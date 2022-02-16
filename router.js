const router = require("express").Router();
const auth = require("./controllers/authControllers");
const restrict = require("./middlewares/restrict");

router.get("/", restrict, (req, res) => res.render("game"));
router.get("/whoami", restrict, auth.whoami);
router.get("/login", (req, res) => res.render("login"));

router.get("/register", (req, res) => res.render("register"));
router.get("/api/v1/auth/whoami", restrict, auth.whoami);
router.post("/register", auth.register);
router.post("/login", auth.login);

router.get("/game", (req, res) => res.render("game"));

router.post("/api/v1/auth/register", auth.register);
router.post("/api/v1/auth/login", auth.login);

module.exports = router;
