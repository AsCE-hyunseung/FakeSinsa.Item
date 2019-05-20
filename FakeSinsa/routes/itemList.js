const express = require('express');
const router = express.Router();
const mysql_dbc = require('../models/db_con')();
const connection = mysql_dbc.init();

/* GET item list. */
router.get('/', (req, res, next) => {
  connection.query('SELECT * from itemList', (err, rows, fields) => {
    if (err) {
      throw err;
    }
    //res.render('itemList', {results: JSON.stringify(rows)}); //jade 템플릿으로 출력
    res.send(rows); //그냥 디폴트 html으로 출력
  })
});

module.exports = router;
