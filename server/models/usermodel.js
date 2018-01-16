'use strict';
module.exports = (sequelize, DataTypes) => {
  var userModel = sequelize.define('userModel', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userModel;
};