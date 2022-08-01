
// get data from DEMO database
const { PERMISSION, ROLE, USER, PROJECT } = require("../data.js");

// set user from url id (DEV  or SYSTEM function only)
function setUser(req, res, next) {
    req.user = findUserById(req.query.userid);
    next();
}

// Set project from url
function setProject(req, res, next) {
    req.project  = findProjectId(req.query.projectid);
    if (req.project) { return next(); }
    return res.status(400).send("Project id not found");
}

// Set item id from url
function setProjectItem(req, res, next) {
    req.item  = findProjectItemId(req.project, req.query.itemid);
    if (req.item ) { return next(); }
    return res.status(400).send("Project item id not found");
}

// Check if user is logged in
function isAuth(req, res, next) {
    if (!req.user) {
        return res.status(401).send("Not authenticated");
    }
    return next();
}

// Check user NOT logged it
function isNotAuth(req, res, next) {
    if (!req.user) { return next(); }
    return res.status(401).send("Is Authenticated")
}

// Authenticate role
function authRole(role) {
    return (req, res, next) => {
        if (req.user.role === ROLE.SYSADM) { return next(); }
        if(role === "user" && req.user.role === ROLE.ADMIN) { return next(); }
        if (req.user.role === role) { return next() }
        return res.status(401).send(`Permission denied, requires role: [${role}], your role is: [${req.user.role}]`);
    }
}

// authrenincate one or many permisions
function authPermission(permission) {
    return (req, res, next) => {

        // error check
        if (!req.user.role) { return res.status(401).send(`role not set`);  }
        if (!permission) { return res.send("CODE ERROR [permission] param is not set"); }
        
        // system admin override all
        if (req.user.role === ROLE.SYSTEM) {  return next(); }

        // a user could have multiple roles assigned to them, split it
        const userRoles = req.user.role.split(',');
        if (!userRoles) { return res.send("CODE DEFECT: [userRoles] is undefined/empty"); }

        // the permission sent may contain multiple required permissions
        // step through each permissions then SUM the result
        // if there is an error in the "permission" variable sent, then the SUM wil cause a failier
        arrayPermission = permission.split(',');
        
        var count = 0; // sum

        if (arrayPermission) {

            // for each opermisison we want to find:
            for(let ap = 0; ap != arrayPermission.length; ap++) {
                
                // check the single permission in the assigned user role(s)
                count = count + checkAuthOnePermission(arrayPermission[ap], req.user.role);
            }
        }

        // check SUM result
        if (count === arrayPermission.length) {
            return next();
        }

        // Fail
        return res.status(401).send(`Permission denied\r\nYour role: ${req.user.role}\r\nRequired permission: ${permission}`);

    }
}


// check a single permission in all user roles
// return "1" when match found, return 0 when match not found
// used by function: authPermission
function checkAuthOnePermission(permissionToFind, userRole){

    // error check
    if (!userRole) { console.log("!userRole"); return 0;  }
    if (!permissionToFind) { console.log("!permissionToFind"); return 0; }
    
    // user can have mutlple roles, spit then
    var trimReqUsrRole=trimStartChar(userRole,',');
    const userRoles = trimReqUsrRole.split(',');

    if(!userRoles) { console.log("!userRoles"); return 0; }

    // for each role assitgned to the user
    for(let r = 0; r != userRoles.length; r++) {
        
        // lookup role in DB
        lookUpRole = ROLE.find(lookUpRole => lookUpRole.name === userRoles[r]);
        if (lookUpRole) {

            // check if the lookUpRole contains the permisison we need
            if (lookUpRole.permission.includes(permissionToFind) === true ) { return 1 }
        }
    }
    return 0; // not found
}

// trim any unwanted chars from start of a string
function trimStartChar(text, unwantedCharacter ) {
    while(text.charAt(0) === unwantedCharacter ) {
        text=text.substring(1);
    }
    return text;
}

// ---------------------------------- DATABASE LOOKUP FUNCTIONS --------------------------

// find and get user from db by id
function findUserById(id) {
    if (id) { return item = USER.find(item => item.id === id); }
    return null;
}


// find and get project from db by id
function findProjectId(id) {
    if (id) { return item = PROJECT.find(item => item.id === id); }
    return null;
}

// find and get a item within a project
function findProjectItemId(project, id) {
    if (!project || id == null) { return null ;}
    if (project.items) {
        if (project.items && id) { 
            return item = project.items.find(item => item.id === id); 
        }
    }
}

//
module.exports = {
    isAuth,
    setUser,
    setProject,
    setProjectItem,
    isNotAuth,
    authRole,
    authPermission
}