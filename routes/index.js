const express = require("express");
const router = express.Router();
const indexRouter = require("../controllers/index");
const auth = require("../middlewares/auth");

router.get("/", auth, indexRouter.welcomePage);

module.exports = router;