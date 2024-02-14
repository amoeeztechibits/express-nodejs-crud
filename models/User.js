
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize,DataTypes) => {

    const User = sequelize.define('users', {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        status:{
          type: DataTypes.ENUM('ACTIVE', 'NON-ACTIVE'),
          allowNull:false,
        }
      });
    return User;
}


