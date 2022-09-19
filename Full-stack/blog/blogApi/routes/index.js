const express = require('express');
const router = express.Router();
const pool = require('../pool')

//Allow CORS
const cors = require('cors');
router.use(cors());

/* GET home page. */

//redirect is just for development
router.get('/', function (req, res, next) {
  res.redirect('/blogs')
});

router.route('/blogs')
  .get(function (req, res, next) {
    pool.query('SELECT * FROM blogs', (error, results, fields) => {
      if (error) {
        res.sendStatus(500);//TODO: create a more spacific error for user
      }
      return res.send(results);
    })
  });
router.route('/posts/:postID')
  .get(function (req, res, next) {
    pool.query('SELECT * FROM posts WHERE userID = ?', [req.params.postID], (error, results, fields) => { //post has primary id and also user id which is blogs' primary key
      if (error) {
        res.sendStatus(500);//TODO: create a more spacific error for user
      }
      return res.send(results);
    })
  });
  router.route('/comments/:postID')
  .get(function (req, res, next) {
    pool.query('SELECT * FROM comments WHERE postId = ?', [req.params.postID], (error, results, fields) => { //post has primary id and also user id which is blogs' primary key
      if (error) {
        res.sendStatus(500);//TODO: create a more spacific error for user
      }
      return res.send(results);
    })
  });

  /*TODO: 
  add Create, Update, and Delete feature
  add a login
  */

module.exports = router;
