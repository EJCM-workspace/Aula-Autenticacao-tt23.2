const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/AuthController");
const { Router } = require('express');
const passport = require("passport");

const router = Router();

router.use("/private", passport.authenticate('jwt', {session: false}));

router.get('/private/getDetails', AuthController.getDetails);
router.post('/login', AuthController.login);

router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
router.post("/users", UserController.create);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.destroy);

module.exports = router;
