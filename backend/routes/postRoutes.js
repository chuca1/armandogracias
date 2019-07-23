const { Router } = require("express");
const router = Router();
const { postApost } = require("../controllers/post.controller");

router.post("/new", postApost);

module.exports = router;
