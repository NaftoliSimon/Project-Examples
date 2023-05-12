const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.route('/')
  .get((req, res, next) => {
    pool.query('SELECT * FROM blogs', (error, results, fields) => {
      if (error) {
        return res.sendStatus(500);
      }
      return res.send(results);
    })
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO blogs(name, website, companyName, shortSummary) VALUES (?,?,?,?)',
      [req.body.name, req.body.website, req.body.companyName, shortSummary]),
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        return res.sendStatus(201);
      }
  })

module.exports = router;
