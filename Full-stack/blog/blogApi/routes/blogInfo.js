const express = require('express');
const router = express.Router();

router.route('/blogInfo')
  .post((req, res, next) => {
    pool.query('INSERT INTO blogs(website, companyName, name, shortSummary, userId) VALUES (?,?,?,?,?)',
      [req.body.website, req.body.companyName, req.body.name, req.body.shortSummary, req.body.userId],
      (error, results, fields) => {
        if (error) {
          console.log(`Unable to create blog - ${error.message}`)
          return res.sendStatus(500);//TODO: create a more specific error for user
        }
        // res.sendStatus(200)
      }
    )
  });
router.route('/blogInfo/edit')
  .post((req, res, next) => {
    pool.query('Update blogs SET website = ?, companyName = ?, shortSummary = ? WHERE userId = ?',
      [req.body.website, req.body.companyName, req.body.shortSummary, req.body.userId],
      (error, results, fields) => {
        if (error) {
          console.log(`Unable to update blog info - ${error.message}`)
          return res.sendStatus(500);//TODO: create a more specific error for user
        }
        // res.sendStatus(200)
      }
    )
  });

module.exports = router;
