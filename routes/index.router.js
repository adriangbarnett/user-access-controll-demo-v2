// Routes
const express = require('express');
const router = express.Router();
module.exports = router;

// contollers
const index = require("../controllers/index.controller.js")
const auth = require("../controllers/auth.controller.js")

// Public
router.get("/", (req, res) =>{ res.send("index"); });

// Protected
router.get("/private", auth.setUser, auth.isAuth, index.private);

// User
router.get("/user_index_read", auth.setUser, auth.isAuth, auth.authPermission("[user_index_read]"), index.user_index_read);
router.get("/user_profile_read", auth.setUser, auth.isAuth, auth.authPermission("[user_index_read]"), index.user_profile_read);
router.get("/user_profile_update", auth.setUser, auth.isAuth, auth.authPermission("[user_index_read]"), index.user_profile_update);

// User Admin
router.get("/user_admin_index_read", auth.setUser, auth.isAuth, auth.authPermission("[user_admin_index_read]"), index.user_admin_index_read);
router.get("/user_admin_create", auth.setUser, auth.isAuth, auth.authPermission("[user_admin_create]"), index.user_admin_create);
router.get("/user_admin_read", auth.setUser, auth.isAuth, auth.authPermission("[user_admin_read]"), index.user_admin_read);
router.get("/user_admin_update", auth.setUser, auth.isAuth, auth.authPermission("[user_admin_read],[user_admin_update]"), index.user_admin_update);
router.get("/user_admin_delete", auth.setUser, auth.isAuth, auth.authPermission("[user_admin_read],[user_admin_delete]"), index.user_admin_delete);

// Project
router.get("/project_index_read", auth.setUser, auth.isAuth, auth.authPermission("[project_index_read]"), index.project_index_read);
router.get("/project_create", auth.setUser, auth.isAuth, auth.authPermission("[project_create]"), index.project_create);
router.get("/project_read", auth.setUser,auth.setProject,  auth.authPermission("[project_read]"), index.project_read);
router.get("/project_update", auth.setUser, auth.setProject, auth.authPermission("[project_read],[project_update]"), index.project_update);
router.get("/project_delete", auth.setUser, auth.setProject, auth.authPermission("[project_read],[project_delete]"), index.project_delete);

// Project Item
router.get("/project_item_index_read", auth.setUser, auth.isAuth, auth.authPermission("[project_read],[project_item_index_read]"), index.project_item_index_read);
router.get("/project_item_create", auth.setUser, auth.isAuth, auth.authPermission("[project_read],[project_item_create]"), index.project_item_create);
router.get("/project_item_read", auth.setUser,auth.setProject,  auth.authPermission("[project_read],[project_item_read]"), index.project_item_read);
router.get("/project_item_update", auth.setUser, auth.setProject, auth.authPermission("[project_read],[project_item_update]"), index.project_item_update);
router.get("/project_item_delete", auth.setUser, auth.setProject, auth.authPermission("[project_read],[project_item_read],[project_item_delete]"), index.project_item_delete);