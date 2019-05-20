const mysql = require('mysql');
const config = require('../models/db_info').local;
module.exports = (() => {
  return {
    init: (() => {
      return mysql.createConnection({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.database
      })
    })
  }
});