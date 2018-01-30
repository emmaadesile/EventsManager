'use strict';
module.exports = (sequelize, Datatypes) => {
  const Event = sequelize.define('Event', {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    startdate: {
      type: Datatypes.DATE,
      allowNull: false,
    },
    enddate: {
      type: Datatypes.Date,
      allowNull: false,
    },
    eventid: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    userid: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
  });

  Event.associate = (models) => {
    Event.belongsTo(models.userModel, {
      foreignKey: 'userid',
      onDelete: 'CASCADE',
    });

    Event.belongsTo(models.centersModel, {
      foreignKey: 'centerid',
      onDelete: 'CASCADE',
    });
  };

  return Center;
}