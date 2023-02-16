const router = require("express").Router();
const { login, forgotPassword, createUser } = require("../Controller/AuthController");
const { categoriesData } = require("../Controller/DataController");

router.route("/auth/login").post(login);
router.route("/auth/createUser").post(createUser);
router.route("/auth/forgotPassword").put(forgotPassword);
router.route("/categoriesData").get(categoriesData);
module.exports = router ;