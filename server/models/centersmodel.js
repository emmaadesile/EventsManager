'use strict';
module.exports = (sequelize, Datatypes) => {
  const Center = sequelize.define('Center', {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    centerid: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    facilities: {
      type: Datatypes.STRING,
      allowNull: false,
    },  
    address: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    state: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    amount: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    capacity: {
      type: Datatypes.INTEGER,
      allowNull: false,
    }
  });

  Center.associate = (models) => {
    Center.hasMany(models.eventModel, {
      foreignKey: 'centerid',
      as: 'events',
    });

    Center.belongsTo(models.userModel, {
      foreignKey: 'ownerid',
      as: 'events',
    });
  };

  return Center;

}
