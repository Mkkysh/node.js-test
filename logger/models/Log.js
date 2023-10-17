const sequelize = require('../utils/db');
const { DataTypes } = require('sequelize');

Log = sequelize.define('Log', {
    
   id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
   },

   id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
   },

   action: {
      type: DataTypes.STRING,
      allowNull: false,
   },

   timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
   }
}, {
   timestamps: false
});

module.exports = Log

