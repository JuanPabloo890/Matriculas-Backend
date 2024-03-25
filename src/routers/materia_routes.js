import { Router } from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js'

import { 
    registrarMateria,
    detalleMateria,
    actualizarMateria,
    eliminarMateria
} from '../controllers/materia_controller.js'

const router = Router()

/**
 * @openapi
 * /api/materia/registrar:
 *   post:
 *     tags:
 *       - Materias
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Base de datos
 *               codigo:
 *                 type: string
 *                 example: 1234
 *               descripcion:
 *                 type: string
 *                 example: BD relacional
 *               creditos:
 *                 type: string
 *                 example: 4 creditos
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

router.post('/materia/registrar',verificarAutenticacion, registrarMateria)

/**
 * @openapi
 * /api/materia/{id}:
 *   get:
 *     tags:
 *       - Materias
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la materia
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
router.get('/materia/:id', verificarAutenticacion, detalleMateria)

/**
 * @openapi
 * /api/materia{id}:
 *   put:
 *     tags:
 *       - Materias
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la materia
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
 *                 example: Base de datos
 *               codigo:
 *                 type: string
 *                 example: 12345
 *               descripcion:
 *                 type: string
 *                 example: BD relacional.
 *               creditos:
 *                 type: string
 *                 example: 3 creditos
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
router.put('/materia/:id', verificarAutenticacion, actualizarMateria)

/**
 * @openapi
 * /api/materia/{id}:
 *   delete:
 *     tags:
 *       - Materias
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la materia
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
router.delete('/materia/:id', verificarAutenticacion, eliminarMateria)


export default router