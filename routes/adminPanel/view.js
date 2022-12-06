let express = require("express");
let router = express();

const {
  renderIndexFile,
  renderLoginPage,
  renderRegisterPage,
  renderDriversPage,
  renderOtherUsersPage,
  renderNewUserPage,
  renderJobPage,
} = require("../../controllers/adminPanel/view");

router.get("/", renderIndexFile);
router.get("/login", renderLoginPage);
router.get("/register", renderRegisterPage);
router.get("/drivers", renderDriversPage);
router.get("/otherUsers", renderOtherUsersPage);
router.get("/newUsers", renderNewUserPage);
router.get("/jobs", renderJobPage);

module.exports = router;
