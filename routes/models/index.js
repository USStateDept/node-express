/**
 * Models - Index
 *
 * @desc Index Class, purpose is to setup and sync the models.
 * Executed in the server initiation. Be careful making edits
 * to this file
 */
"use strict";

import fs        from "fs";
import path      from "path";
import Sequelize from "sequelize";
import config    from "../../config";
let model;

module.exports.init = dbconfig => {
  
  let sequelize = new Sequelize(dbconfig.name, dbconfig.user, dbconfig.pass, dbconfig.settings);
  let db = {};

  fs
    .readdirSync(__dirname)
    .filter( file => {
      return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach( file => {
      let imodel = sequelize.import(path.join(__dirname, file));
      db[imodel.name] = imodel;
    });

  Object.keys(db).forEach( modelName => {
    if ("associate" in db[modelName]) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  model = db;
};

module.exports.getModel = () => {
  return model;
};
