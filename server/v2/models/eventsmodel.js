'use strict';

module.exports = (sequelize, Datatypes) => {
  const Event = sequelize.define('Event', {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: Datatypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: Datatypes.Date,
      allowNull: false,
    },
    eventId: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
  });

  Event.associate = (models) => {
    Event.belongsTo(models.userModel, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    Event.belongsTo(models.centersModel, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE',
    });
  };

  return Event;
}