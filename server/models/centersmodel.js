'use strict';
module.exports = class CenterModel {
  constructor(sequelize, DataTypes) {
    this.sequelize = sequelize;
    this.DataTypes = DataTypes;
  }

  centerModel () {
    const centerModel = this.sequelize.define('centerModel', {
      name: {
        type: this.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: this.DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: this.DataTypes.STRING,
        allowNull: false,
      },
      facilities: {
        type: this.DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: this.DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: this.DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: this.DataTypes.INTEGER,
        allowNull: false,
      },
      cost: {
        type: this.DataTypes.INTEGER,
        allowNull: false,
      },
      updatedBy: {
        type: this.DataTypes.INTEGER,
        allowNull: false,
      }
    });
    return centerModel;
  }
} 