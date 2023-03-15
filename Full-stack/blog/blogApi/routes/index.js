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
        return res.sendStatus(500);//TODO: create a more specific error for user
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
    console.log(req.params.postID);
    pool.query('SELECT * FROM posts WHERE userId = ?', [req.params.postID], (error, results, fields) => { //post has primary id and also user id which is blogs' primary key
      if (error) {
        return res.sendStatus(500);//TODO: create a more specific error for user
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

router.route('/comments/:postID/:userId')
  .get(function (req, res, next) {
    pool.query('SELECT * FROM comments WHERE postId = ?', [req.params.postID], (error, results, fields) => { //post has primary id and also user id which is blogs' primary key
      if (error) {
        return res.sendStatus(500);//TODO: create a more specific error for user
      }
      return res.send(results);
    })
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO comments(postId, name, body, userId) VALUES (?,?,?,?)',
      [req.params.postID, req.body.name, req.body.body, req.params.userId]),
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        return res.sendStatus(201);
      }
  })

router.route('/:blogID/deleteComment/:commentID/:postID')
  .get(function (req, res, next) {
    pool.query('DELETE FROM comments WHERE id = ?', [req.params.commentID], (error, results, fields) => { //post has primary id and also user id which is blogs' primary key
      if (error) {
        return res.sendStatus(500);//TODO: create a more spacific error for user
      }
      if (!results.affectedRows) {
        return res.sendStatus(404)
      }
      // res.redirect(`${origin}/blogs/${req.params.blogID}/${req.params.postID}`) //postID is added to url only for reselecting the selected posts to open the comments after deleting one of its comments (see PostsList.js)
      res.redirect(`${origin}/blogs/${req.params.blogID}`)
    })
  })

router.route('/editComment/:commentID')
  .post((req, res, next) => {
    pool.query('UPDATE comments SET name = ?, body = ? WHERE id = ?',
      [req.body.name, req.body.body, req.params.commentID],
      (error, results, fields) => {
        if (error) {
          console.log(`Unable to update contact - ${error.message}`)
          return res.sendStatus(500);//TODO: create a more specific error for user
        }
        res.sendStatus(200)
      }
    )
  });

router.route('/signUp')
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
router.route('/login/:email')
  // .get(function (req, res, next) {
  //   pool.query('SELECT password FROM users WHERE email = ?',[req.params.email], (error, results, fields) => {
  //     if (error) {
  //       return res.sendStatus(500);//TODO: create a more specific error for user
  //     }
  //     return res.send(results);
  //   })
  // })
  .get(function (req, res, next) {
    pool.query('SELECT password FROM users WHERE email = ?', [req.params.email], (error, results, fields) => {
      if (error) {
        console.error("Failed to fetch user password: ", error);
        return res.status(500).json({ error: "Failed to fetch user password" });
      }
      return res.json(results);
    })
  })
router.route('/blogInfo')
  .post((req, res, next) => {
    pool.query('INSERT INTO blogs(website, companyName, name, userId) VALUES (?,?,?,?)',
      [req.body.website, req.body.companyName, req.body.name, req.body.userId],
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
    pool.query('Update blogs SET website = ?, companyName = ? WHERE userId = ?',
      [req.body.website, req.body.companyName, req.body.userId],
      (error, results, fields) => {
        if (error) {
          console.log(`Unable to update blog info - ${error.message}`)
          return res.sendStatus(500);//TODO: create a more specific error for user
        }
        // res.sendStatus(200)
      }
    )
  });

/*TODO: 
Comments: add Update features
Blogs & Posts: add Insert, Update, and delete features
Make adding & editing comments and posts automatically update without refreshing the page
*/

module.exports = router;
