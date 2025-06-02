const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

const userRoutes = (app) => {
    const router = express.Router();

    router.post("/users", userController.createUser);
    router.get("/users", userController.getUsers);
    router.get("/users/:id", userController.getUser);
    router.put("/users/:id", userController.updateUser);
    router.delete("/users/:id", userController.deleteUser);

    app.use('/api', router);
};

module.exports = userRoutes;
