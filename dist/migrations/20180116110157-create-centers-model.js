'use strict';

module.exports = {
  up: function () {
    function up(queryInterface, Sequelize) {
      return queryInterface.createTable('centersModels', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false
        },
        state: {
          type: Sequelize.STRING,
          allowNull: false
        },
        capacity: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        ownerId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        facilities: {
          type: Sequelize.STRING,
          allowNull: false
        },
        amount: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        centerId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true

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
    }

    return up;
  }(),
  down: function () {
    function down(queryInterface, Sequelize) {
      return queryInterface.dropTable('centersModels');
    }

    return down;
  }()
};