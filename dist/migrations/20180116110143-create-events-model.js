'use strict';

module.exports = {
  up: function () {
    function up(queryInterface, Sequelize) {
      return queryInterface.createTable('eventsModels', {
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
        startDate: {
          type: Sequelize.DATE,
          allowNull: false
        },
        endDate: {
          type: Sequelize.DATE,
          allowNull: false
        },
        centerId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false
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
      return queryInterface.dropTable('eventsModels');
    }

    return down;
  }()
};