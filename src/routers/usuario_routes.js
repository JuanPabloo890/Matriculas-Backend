import { Router } from "express"

import {
    loginUser,
    registro
} from '../controllers/usuario_controller.js'

const router = Router()

/**
 * @openapi
 * /api/login:
 *   post:
 *     tags:
 *       - Login y Registro Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: test123@hotmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                     usuario:
 *                       type: object
 *                       properties:
 *                         nombre:
 *                           type: string
 *                           example: Usuario Ejemplo
 *                         email:
 *                           type: string
 *                           example: test123@hotmail.com
 */
router.post('/login',loginUser)

/**
 * @openapi
 * /api/registro:
 *   post:
 *     tags:
 *       - Login y Registro Usuarios
 *     summary: Registro de nuevo usuario
 *     description: Crea un nuevo usuario con correo electrónico y contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: julio@hotmail.com
 *               password:
 *                 type: string
 *                 example: contraseña
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: Usuario registrado exitosamente.
 *                     user:
 *                       type: object
 *                       properties:
 *                         email:
 *                           type: string
 *                           example: julio@hotmail.com
 *                         token:
 *                           type: string
 *                           example: 4FYSTYaaA1564
 */
router.post('/registro',registro)

export default router