'use strict';
module.exports = (sequelize, DataTypes) => {
  var eventsModel = sequelize.define('eventsModel', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return eventsModel;
};