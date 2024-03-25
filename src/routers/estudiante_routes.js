import { Router } from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js'

import { 
    registrarEstudiante,
    listarEstudiantes,
    detalleEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
} from '../controllers/estudiante_controller.js'

const router = Router()

/**
 * @openapi
 * /api/estudiante/registrar:
 *   post:
 *     tags:
 *       - Estudiantes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Juan
 *               Apellido:
 *                 type: string
 *                 example: Falconi
 *               cedula:
 *                 type: string
 *                 example: 1727645444
 *               fecha_nacimiento:
 *                 type: string
 *                 example: 12/02/2002
 *               ciudad:
 *                 type: string
 *                 example: Quito
 *               direccion:
 *                 type: string
 *                 example: san antonio N3-154
 *               telefono:
 *                 type: string
 *                 example: 09999999999
 *               email:
 *                 type: string
 *                 example: juan@gmail.com
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
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.post('/estudiante/registrar',verificarAutenticacion, registrarEstudiante)

/**
 * @openapi
 * /api/estudiantes:
 *   get:
 *     tags:
 *       - Estudiantes
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
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.get('/estudiantes', verificarAutenticacion, listarEstudiantes)

/**
 * @openapi
 * /api/estudiante/{id}:
 *   get:
 *     tags:
 *       - Estudiantes
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del estudiante
 *         required: true
 *         schema:
 *           type: string
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
 *                   type: array 
 *                   items: 
 *                     type: object
 */


router.get('/estudiante/:id', verificarAutenticacion, detalleEstudiante)

/**
 * @openapi
 * /api/estudiante/{id}:
 *   put:
 *     tags:
 *       - Estudiantes
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del estudiante
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Juann
 *               Apellido:
 *                 type: string
 *                 example: Falconii
 *               cedula:
 *                 type: string
 *                 example: 1727645464
 *               fecha_nacimiento:
 *                 type: string
 *                 example: 12/02/2002
 *               ciudad:
 *                 type: string
 *                 example: Quito
 *               direccion:
 *                 type: string
 *                 example: san antonio N3-154
 *               telefono:
 *                 type: string
 *                 example: 09999999999
 *               email:
 *                 type: string
 *                 example: juan@gmail.com
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
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.put('/estudiante/:id', verificarAutenticacion, actualizarEstudiante)

/**
 * @openapi
 * /api/estudiante{id}:
 *   delete:
 *     tags:
 *       - Estudiantes
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del estudiante
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               salida:
 *                 format: date
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
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.delete('/estudiante/:id', verificarAutenticacion, eliminarEstudiante)


export default router