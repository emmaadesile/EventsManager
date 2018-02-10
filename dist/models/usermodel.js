'use strict';

module.exports = function (sequelize, Datatypes) {
  var User = sequelize.define('User', {
    firstname: {
      type: Datatypes.STRING,
      allowNull: false
    },
    lastname: {
      type: Datatypes.STRING,
      allowNull: false
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false
    },
    role: {
      type: Datatypes.INTEGER
    },
    address: {
      type: Datatypes.STRING,
      allowNull: false
    },
    state: {
      type: Datatypes.STRING,
      allowNull: false
    },
    phonenumber: {
      type: Datatypes.INTEGER,
      allowNull: false
    }
  });

  User.associate = function (models) {
    User.hasMany(models.eventsModel, {
      foreignKey: 'userid',
      as: 'events'
    });
  };
  return User;
};