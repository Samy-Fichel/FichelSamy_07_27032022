'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      post_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        /*references: {
          model: 'Posts',
          key: 'POSTSid',
        }*/
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        /*references: {
          model: 'User',
          key: 'idUSERS',
        }*/
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comments');
  }
};