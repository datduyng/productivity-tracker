const router = require('express').Router();
const notes = require('./index');

/**
 * @swagger
 * /notes/{id}:
 *   get:
 *     tags: [Note]
 *     description: Get specific note
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: note id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Get note by id
 */
router.get('/:id?', notes.get);

/**
 * @swagger
 * /notes/:
 *   post:
 *     tags: [Note]
 *     description: Get specific user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: Note name
 *         in: query
 *         required: true
 *         type: string
 *       - name: content
 *         description: Note content
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: create a new user
 */
router.post('/', notes.post);

/**
 * @swagger
 * /notes/{id}/:
 *   put:
 *     tags: [Note]
 *     description: Update note
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Note id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: name
 *         description: Note name
 *         in: query
 *         required: true
 *         type: string
 *       - name: content
 *         description: Note content
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: update existent note
 */
router.put('/:id', notes.put);
router.delete('/:id', notes.delete);

module.exports = router;