// Recommended to make sure all PERMISSIONS and ROLES are inside square brackets 
// to avoid any miss-matches or ambiguity a when doing authentication compares.
// Example role: [some_new_role]
// Example permission: [some_new_permission]
// A single or multiple permissions is assigned to a role
// A single or multiple roles are assigned to a user
// do not uses spaces
// if you  accidently add extra commas between permissions/role you may cause the permission checks to fail.

// local database
PERMISSION = {
    user_index_read: "[user_index_read]",
    profile_read: "[profile_read]",
    profile_update: "[profile_update]",
    
    user_admin_index: "[user_admin_index]",
    user_admin_create: "[user_admin_create]",
    user_admin_read: "[user_admin_read]",
    user_admin_update: "[user_admin_update]",
    user_admin_delete: "[user_admin_delete]",

    project_index_read: "[project_index_read]",
    project_create: "[project_create]",
    project_read: "[project_read]",
    project_update: "[project_update]",
    project_delete: "[project_delete]",

    project_item_index_read: "[project_item_index_read]",
    project_item_create: "[project_item_create]",
    project_item_read: "[project_item_read]",
    project_item_update: "[project_item_update]",
    project_item_delete: "[project_item_delete]"
}

ROLE = [
    {
        name: "[system]",
        permission: "[system]"
    },
    {
        name: "[user]",
        permission: "[user_index_read],[profile_read],[profile_update],[profile_delete]"
    },
    {
        name: "[user_admin]",
        permission: "[user_admin_index_read],[user_admin_create],[user_admin_read],[user_admin_update],[user_admin_delete]"
    },
    {
        name: "[project_admin]",
        permission: "[project_index_read],[project_create],[project_read],[project_update],[project_delete]"
    },
    {
        name: "[project_item_admin]",
        permission: "[project_read],[project_item_index_read],[project_item_read],[project_item_create],[project_item_update],[project_item_delete]"
    }
    ,
    {
        name: "[my_custom_role]",
        permission: "[project_read],[project_item_read]"
    }
]

USER = [
    { id: "0", username: "bob_system", role: "[user],[system]" },
    { id: "1", username: "sam_user", role: "[user]" },
    { id: "2", username: "ben_user_admin1", role: "[user],[user_admin]" },
    { id: "3", username: "jay_project_and_item_admin1",  role: "[user],[project_admin],[project_item_admin]" },
    { id: "4", username: "dan_project_item_admin", role: "[user],[project_item_admin]"},
    { id: "5", username: "lee_project_admin",  role: "[user],[project_admim]"},
    { id: "6", username: "jak_project_admin",  role: "[my_custom_role]"},
],

PROJECT = [
    {
        id: "1", name: "project1", ownerid: "1",
        uac: [
            {
                userid: "3"
            }
        ],
        items: [ 
            { id: "1", name: "item1" },
            { id: "2", name: "item1" },
            { id: "3", name: "item1" }
        ]

    }
]

module.exports = {
    USER,
    ROLE,
    PROJECT
}