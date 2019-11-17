/**
 * @swagger
 * definition:
 *   Note:
 *     properties:
 *       name:
 *         type: string
 *       content:
 *         type: string
 *       user_id:
 *         type: integer
 *       createdAt:
 *         type: string
 *       updatedAt:
 *         type: string
 */
module.exports = (db, DataTypes) => {
    return db.define("Note", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.STRING
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },{
      tableName: "note",
    });
  }