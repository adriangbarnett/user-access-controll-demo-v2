const { ROLE } = require("../data.js");
const auth = require("./auth.controller.js");



// ---------------------------- MISC PAGES ------------------------

function private(req, res, next) {
    return res.send("private");
}

// ---------------------------- USER  ------------------------
// users dashboard
function user_index_read(req, res, next) {
    return res.send("user_index_read");
}

// profile page: update
function user_profile_read(req, res, next) {
    return res.send("user_profile_read");
}
// profile page: update
function user_profile_update(req, res, next) {
    return res.send("user_profile_update");
}


// ---------------------------- USER ADMIN ------------------------

// users list
function user_admin_index_read(req, res, next) {
    return res.send("user_admin_index_read");
}

// creat
function user_admin_create(req, res, next) {
    return res.send("user_admin_create");
}

// read
function user_admin_read(req, res, next) {
    return res.send("user_admin_read");
}

// update
function user_admin_update(req, res, next) {
    return res.send("user_admin_update");
}

// delete
function user_admin_delete(req, res, next) {
    return res.send("user_admin_delete");
}

// ---------------------------- PROJECT ------------------------

// projects list
function project_index_read(req, res, next) {
    return res.send("project_index_read");
}

// creat
function project_create(req, res, next) {
    return res.send("project_create");
}
// read
function project_read(req, res, next) {
    return res.send("project_read");
}

// update
function project_update(req, res, next) {
    return res.send("project_update");
}

// delete
function project_delete(req, res, next) {
    return res.send("project_delete");
}

// ---------------------------- PROJECT ITEM  ------------------------

// project items list
function project_item_index_read(req, res, next) {
    return res.send("project_item_index_read");
}

// creat
function project_item_create(req, res, next) {
    return res.send("project_item_create");
}
// read
function project_item_read(req, res, next) {
    return res.send("project_item_read");
}

// update
function project_item_update(req, res, next) {
    return res.send("project_item_update");
}

// delete
function project_item_delete(req, res, next) {
    return res.send("project_item_delete");
}

// ---------------------------- SYSTEM ADMIN ------------------------
// system admin only
function system_index_read(req, res, next) {
    return res.send("system_index_read");
}


module.exports = {
    private,

    // user
    user_index_read,
    user_profile_read,
    user_profile_update,

    // user admin
    user_admin_index_read,
    user_admin_create,
    user_admin_read,
    user_admin_update,
    user_admin_delete,

    // project
    project_index_read,
    project_create,
    project_read,
    project_update,
    project_delete,

    // project item
    project_item_index_read,
    project_item_create,
    project_item_read,
    project_item_update,
    project_item_delete,

    //
    system_index_read
}