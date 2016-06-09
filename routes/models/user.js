/**
 * User Model
 *
 */
"use strict";

export default (sequelize, DataTypes) => {
  let user = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    api_key: {
      type: DataTypes.STRING
    },
    verified: {
      type: DataTypes.BOOLEAN
    },
    role: {
      type: DataTypes.STRING
    }
  },
    {
      underscored: true,
      freezeTableName: true,
      tableName: 'user',
      classMethods: {
        associate: models => {

        }
      }   
    });

  return user;
};