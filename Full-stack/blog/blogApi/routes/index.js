// const express = require('express');
// const origin = 'http://localhost:3001' //Server runs on port 3000 (default). React runs on port 3001 (default since 3000 is taken)
// const router = express.Router();
// const blogsRouter = require('./blogs');
// const postsRouter = require('./posts');
// const commentsRouter = require('./comments');
// const signUpRouter = require('./signUp');
// const loginRouter = require('./login');
// const blogInfoRouter = require('./blogInfo');

// //Allow CORS
// router.use(require('cors')({
//   origin: origin
// }));

// router.use('/blogs', blogsRouter);
// router.use('/posts', postsRouter);
// router.use('/comments', commentsRouter);
// router.use('/signUp', signUpRouter);
// router.use('/login', loginRouter);

// router.use('/blogInfo', blogInfoRouter);

// module.exports = router;
const bcrypt = require('bcrypt');
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
    pool.query('INSERT INTO blogs(name, website, companyName, shortSummary) VALUES (?,?,?,?)',
      [req.body.name, req.body.website, req.body.companyName, shortSummary]),
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        return res.sendStatus(201);
      }
  })
router.route('/posts/:postID')
  .get(function (req, res, next) {
    // console.log(req.params.postID);
    pool.query('SELECT * FROM posts WHERE userId = ? ORDER BY id DESC;', [req.params.postID], (error, results, fields) => { //posts are fetched in descending order so that the newest post is displayed (first) on top
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

router.route('/comments/:postID/:userId') //TODO: make blogApi have separate url for not logged in, instead of combining the GET and POST to one url (see Post.js)
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
        return res.sendStatus(500);//TODO: create a more specific error for user
      }
      if (!results.affectedRows) {
        return res.sendStatus(404)
      }
      // res.redirect(`${origin}/blogs/${req.params.blogID}/${req.params.postID}`) //postID is added to url only for re-selecting the selected posts to open the comments after deleting one of its comments (see PostsList.js)
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
  .post(async (req, res, next) => {
    const rawPassword = req.body.password;
    // const hashedPassword = await bcrypt.hash(rawPassword, 10);
    pool.query('INSERT INTO users(firstName, lastName, email, password) VALUES (?,?,?,?)',
      [req.body.firstName, req.body.lastName, req.body.email, rawPassword],
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
  // async function bcryptCompare(dbPassword, password) {
  //   const match = await bcrypt.compare(dbPassword, password);
  //   return match;
  // }
router.route('/login/:email/:password')
  .get(async function (req, res, next) {
    pool.query('SELECT password FROM users WHERE email = ?', [req.params.email], (error, results, fields) => {
      if (error) {
        console.error("Failed to fetch user password: ", error);
        return res.status(500).json({ error: "Failed to fetch user password" });
      }
      // console.log('results:', results);
      // const [db] = JSON.parse(JSON.stringify(results));
      // const match = bcryptCompare(db.password, req.params.password);
      // console.log('dbPassword:', db.password);
      
      // console.log('match:', match);
      return res.json(results);
    })
  })
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

router.route('/postInfo')
  .post((req, res, next) => {
    console.log('postInfo: post info sent');
    pool.query('INSERT INTO posts(title, body, userId) VALUES (?,?,?)',
      [req.body.title, req.body.body, req.body.userId],
      (error, results, fields) => {
        if (error) {
          console.log(`Unable to create post - ${error.message}`)
          return res.sendStatus(500);//TODO: create a more specific error for user
        }
        // res.sendStatus(200)
      }
    )
  });
router.route('/postInfo/edit')
  .post((req, res, next) => {
    // console.log('userId:', req.body.userId);
    pool.query('Update posts SET title = ?, body = ? WHERE id = ?',
      [req.body.title, req.body.body, req.body.postId],
      (error, results, fields) => {
        if (error) {
          console.log(`Unable to update post info - ${error.message}`)
          return res.sendStatus(500);//TODO: create a more specific error for user
        }
        // res.sendStatus(200)
      }
    )
  });
router.route('/postInfo/delete/:blogId/:postId')
  .get(function (req, res, next) {
    pool.query('DELETE FROM post WHERE id = ?', [req.params.postId], (error, results, fields) => {
      if (error) {
        return res.sendStatus(500);//TODO: create a more specific error for user
      }
      if (!results.affectedRows) {
        return res.sendStatus(404)
      }
      // res.redirect(`${origin}/blogs/${req.params.blogID}/${req.params.postID}`) //postID is added to url only for re-selecting the selected posts to open the comments after deleting one of its comments (see PostsList.js)
      res.redirect(`${origin}/blogs/${req.params.blogId}`);
    })
  })

/*TODO: 
Posts: add Update features
Blogs & Posts: add delete features
Make adding & editing comments and posts automatically update without refreshing the page
Limit data to x amount fetched and displayed at one time
Separate above routs into separate files for organizational purposes
*/

module.exports = router;
