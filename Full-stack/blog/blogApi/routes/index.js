const express = require('express');
const router = express.Router();
const pool = require('../pool')
const origin = 'http://localhost:3001' //Server runs on port 3000 (default). React runs on port 3001 (default since 3000 is taken)

//Allow CORS
router.use(require('cors')({
  origin: origin
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
        return res.sendStatus(500);//TODO: create a more spacific error for user
      }
      return res.send(results);
    })
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO blogs(name, website, companyName) VALUES (?,?,?)',
      [req.body.name, req.body.website, req.body.companyName]),
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        return res.sendStatus(201);
      }
  })
router.route('/posts/:postID')
  .get(function (req, res, next) {
    pool.query('SELECT * FROM posts WHERE userID = ?', [req.params.postID], (error, results, fields) => { //post has primary id and also user id which is blogs' primary key
      if (error) {
        return res.sendStatus(500);//TODO: create a more spacific error for user
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

router.route('/comments/:postID')
  .get(function (req, res, next) {
    pool.query('SELECT * FROM comments WHERE postId = ?', [req.params.postID], (error, results, fields) => { //post has primary id and also user id which is blogs' primary key
      if (error) {
        return res.sendStatus(500);//TODO: create a more spacific error for user
      }
      return res.send(results);
    })
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO comments(postId, name, body) VALUES (?,?,?)',
      [req.params.postID, req.body.name, req.body.body]),
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        return res.sendStatus(201);
      }
  })

router.route('/:blogID/deleteComment/:commentID')
  .get(function (req, res, next) {
    pool.query('DELETE FROM comments WHERE id = ?', [req.params.commentID], (error, results, fields) => { //post has primary id and also user id which is blogs' primary key
      if (error) {
        return res.sendStatus(500);//TODO: create a more spacific error for user
      }
      if (!results.affectedRows) {
        return res.sendStatus(404)
      }

      res.redirect(`${origin}/blogs/${req.params.blogID}`) //TODO: update redirect to go to post (and show comments?)
    })
  })

/* TODO: get edit comment to work */
router.route('/editComment/:commentID')
  .post((req, res, next) => {
    pool.query('UPDATE comments SET body = ?, name = ? WHERE id = ?'),
      [req.body.body, req.body.name, req.params.commentID],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);//TODO: create a more spacific error for user
        }
        res.redirect(`${origin}/blogs`) //TODO: update redirect to go to comment
        // res.sendStatus(200);
      }
  })

/*TODO: 
Comments: add Update features
Blogs & Posts: add Insert, Update, and delete features
Add a login
*/

module.exports = router;
