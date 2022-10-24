const express = require('express');
const router = express.Router();
const pool = require('../pool')

//Allow CORS
router.use(require('cors')({
  origin: 'http://localhost:3001' //Server runs on port 3000 (default). React runs on port 3001 (default since 3000 is taken)
}));

/* GET home page. */

//redirect is just for development
router.get('/', function (req, res, next) {
  res.redirect('/comments/5')
});



router.route('/blogs')
  .get(function (req, res, next) {
    pool.query('SELECT * FROM blogs', (error, results, fields) => {
      if (error) {
        res.sendStatus(500);//TODO: create a more spacific error for user
      }
      return res.send(results);
    })
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO blogs(name, website, companyName) VALUES (?,?,?)',
      [req.body.name, req.body.website, req.body.companyName]),
      (error, results, fields) => {
        if (error) {
          res.sendStatus(500);
        }
        res.sendStatus(201);
      }
  })
router.route('/posts/:postID')
  .get(function (req, res, next) {
    pool.query('SELECT * FROM posts WHERE userID = ?', [req.params.postID], (error, results, fields) => { //post has primary id and also user id which is blogs' primary key
      if (error) {
        res.sendStatus(500);//TODO: create a more spacific error for user
      }
      return res.send(results);
    })
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO posts(userId, title, body) VALUES (?,?,?)',
      [req.body.userId, req.body.title, req.body.body]),
      (error, results, fields) => {
        if (error) {
          res.sendStatus(500);
        }
        res.sendStatus(201);
      }
  })

router.route('/comments/:postID')
  .get(function (req, res, next) {
    pool.query('SELECT * FROM comments WHERE postId = ?', [req.params.postID], (error, results, fields) => { //post has primary id and also user id which is blogs' primary key
      if (error) {
        res.sendStatus(500);//TODO: create a more spacific error for user
      }
      return res.send(results);
    })
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO comments(postId, name, body) VALUES (?,?,?)',
      [req.params.postID, req.body.name, req.body.body]),
      (error, results, fields) => {
        if (error) {
          res.sendStatus(500);
        }
        res.sendStatus(201);
      }
  })

/*TODO: 
add Update, and Delete feature
add a login
*/

module.exports = router;
