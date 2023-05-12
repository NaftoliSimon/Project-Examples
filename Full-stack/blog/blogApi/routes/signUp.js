const express = require('express');
const router = express.Router();

router.route('/')
  .post((req, res, next) => {
    pool.query('INSERT INTO users(firstName, lastName, email, password) VALUES (?,?,?,?)',
      [req.body.firstName, req.body.lastName, req.body.email, req.body.password],
      (error, results, fields) => {
        if (error) {
          console.error(`User account failed to be created: ${error}`);
          return res.sendStatus(500);
        }
        console.log(`User ${req.body.firstName} ${req.body.lastName} account created`);
        return res.sendStatus(201);
      }
    );

  })
  .get(function (req, res, next) {
    pool.query('SELECT * FROM users', (error, results, fields) => {
      if (error) {
        return res.sendStatus(500);//TODO: create a more specific error for user
      }
      return res.send(results);
    })
  })

module.exports = router;
