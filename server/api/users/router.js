const router = require('express').Router();
const users = require('./index');

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags: [User]
 *     description: Get specific user. if user id is not specify then return all user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Get user by id
 *         schema: 
 *           $ref: '#definition/Users'
 */
router.get('/:id?', users.get);

/**
 * @swagger
 * /users/:
 *   post:
 *     tags: [User]
 *     description: Get specific user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: User name
 *         in: query
 *         required: true
 *         type: string
 *       - name: email
 *         description: User email
 *         in: query
 *         required: true
 *         type: string
 *       - name: password
 *         description: User pass
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: create a new user
 */
router.post('/', users.post);
// router.put('/', users.put);
// router.delete('/:user_id', users.delete);

module.exports = router;