const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 */

const userRoutes = (app) => {
    const router = express.Router();

    /**
     * @swagger
     * /users:
     *   post:
     *     summary: Cria um novo usuário
     *     responses:
     *       201:
     *         description: Usuário criado
     */
    router.post("/users", userController.createUser);

    /**
     * @swagger
     * /users:
     *   get:
     *     summary: Lista usuários
     *     responses:
     *       200:
     *         description: Lista de usuários
     */
    router.get("/users", userController.getUsers);

    /**
     * @swagger
     * /users/{id}:
     *   get:
     *     summary: Busca usuário por ID
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Usuário encontrado
     */
    router.get("/users/:id", userController.getUser);

    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     summary: Atualiza usuário
     */
    router.put("/users/:id", userController.updateUser);

    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     summary: Remove usuário
     */
    router.delete("/users/:id", userController.deleteUser);

    app.use('/api', router);
};

module.exports = userRoutes;
