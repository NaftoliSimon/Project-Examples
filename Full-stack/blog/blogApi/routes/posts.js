const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.route('/:postID')
  .get((req, res, next) => {
    console.log(req.params.postID);
    pool.query('SELECT * FROM posts WHERE userId = ? ORDER BY id DESC;', [req.params.postID], (error, results, fields) => {
      if (error) {
        return res.sendStatus(500);
      }
      return res.send(results);
    })
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO posts(userId, title, body) VALUES (?,?,?)',
      [req.body.userId, req.body.title, req.body.body]),
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        return res.sendStatus(201);
      }
  })

module.exports = router;
