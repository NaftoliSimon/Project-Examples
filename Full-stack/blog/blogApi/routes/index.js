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

const blogsPerPage = 6; //amount of blogs to display per page (server will only fetch this amount at a time from the db)

//Allow CORS
router.use(require('cors')({
  origin: origin,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

/* GET home page. */

//redirect is just for development
router.get('/', function (req, res, next) {
  res.redirect('/comments/5')
});


function getTotalBlogsCount() {
  pool.query('SELECT COUNT(*) as totalBlogs FROM blogs', (error, results, fields) => {
    if (error) {
      return console.error(`Blogs Count Error: ${error}`)
    }

    // Extract the totalBlogs count from the results
    const totalBlogs = results[0].totalBlogs;
    return totalBlogs;
  });
}

router.route('/blogsTotal')
  .get(function (req, res, next) {
    // const totalBlogs = getTotalBlogsCount();
    pool.query('SELECT COUNT(*) as totalBlogs FROM blogs', (error, results, fields) => {
      if (error) {
        return console.error(`Blogs Count Error: ${error}`)
      }

      // Extract the totalBlogs count from the results
      const totalBlogs = results[0].totalBlogs;

      const blogsPerPage = 6; // Number of blogs to display per page
      const totalPages = Math.ceil(totalBlogs / blogsPerPage);
      return res.send(totalPages.toString());
    })
  });
  router.route('/blogsTotal/:category')
  .get(function (req, res, next) {
    pool.query('SELECT COUNT(*) as totalBlogs FROM blogs WHERE category = ?', [req.params.category], (error, results, fields) => {
      if (error) {
        return console.error(`Filtered Blogs Count Error: ${error}`)
      }

      // Extract the totalBlogs count from the results
      const totalBlogs = results[0].totalBlogs;

      const totalPages = Math.ceil(totalBlogs / blogsPerPage);
      return res.send(totalPages.toString());
    })
  });

router.route('/blogs')
  .get(function (req, res, next) {
    // const totalBlogs = getTotalBlogsCount();
    pool.query('SELECT COUNT(*) as totalBlogs FROM blogs', (error, results, fields) => {
      if (error) {
        return console.error(`Blogs Count Error: ${error}`)
      }

      // Extract the totalBlogs count from the results
      const totalBlogs = results[0].totalBlogs;

      // Rest of your code to handle pagination with totalBlogs
      const totalPages = Math.ceil(totalBlogs / blogsPerPage);
      let page = req.query.page;
      page = (page <= totalPages) && (page > 0) ? page : 1; // Default to the first page if not between 1 and totalPage amount

      // console.log('totalBlogs:', totalBlogs, 'totalPages:', totalPages, 'page:', page);
      // Calculate the offset based on the page number
      const offset = (page - 1) * blogsPerPage;

      pool.query('SELECT * FROM blogs LIMIT ? OFFSET ?', [blogsPerPage, offset], (error, results, fields) => {
        if (error) {
          return res.sendStatus(500); // TODO: Create a more specific error for the user
        }

        // Return the totalBlogs count and the blog data
        return res.send(results);
        // });
      });
    })
  })
  .post((req, res, next) => {
    const { name, website, companyName, shortSummary, category } = req.body;
    pool.query('INSERT INTO blogs(name, website, companyName, shortSummary, category) VALUES (?,?,?,?,?)',
      [name, website, companyName, shortSummary, category],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        return res.sendStatus(201);
      }
    );
  })
  router.route('/blogs/delete/:blogID') //Delete a specific blog
  .get(function (req, res, next) {
    pool.query('DELETE FROM blogs WHERE userId = ?', [req.params.blogID], (error, results, fields) => {
      if (error) {
        return res.sendStatus(500); //TODO: create a more specific error for user
      }
      if (!results.affectedRows) {
        return res.sendStatus(404)
      }
      // Redirect to a relevant page after successful deletion
      res.redirect(`${origin}/blogs`);
    })
  })
  router.route('/blogs/:category/:page') //Get a specific category of blogs
  .get(function (req, res, next) {
    const page = req.params.page || 1; // Default to page 1 if not provided
    const offset = (page - 1) * blogsPerPage; //Number of blogs to skip over when making the fetch

    pool.query('SELECT * FROM blogs WHERE category = ? LIMIT ? OFFSET ?;', [req.params.category, blogsPerPage, offset], (error, results, fields) => {
      console.log('category:', req.params.category,'offset:', offset);
      if (error) {
        return res.sendStatus(500);//TODO: create a more specific error for user
      }
      console.log('results:', results);
      return res.send(results);
    });
  })


router.route('/blog/:userID') //Get a single specific blog (based on the user id, or check if such a blog exists)
  .get(function (req, res, next) {
    // console.log(req.params.postID);
    pool.query('SELECT * FROM blogs WHERE userId = ?;', [req.params.userID], (error, results, fields) => { //posts are fetched in descending order so that the newest post is displayed (first) on top
      if (error) {
        return res.sendStatus(500);//TODO: create a more specific error for user
      }
      [results] = results; //destructure results because we only want to return one blog object, not an array of objects
      // if(!results) {
      //   results = null; //if no blog found return null (instead of undefined to be more acuate)
      // }
      return res.send(results);
    })
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
  .get(async (req, res, next) => {
    console.log('email:', req.params.email, 'password:', req.params.password);
    pool.query('SELECT * FROM users WHERE email = ?', [req.params.email], (error, results, fields) => {
      if (error) {
        console.error("Failed to fetch user password: ", error);
        return res.status(500).json({ error: "Failed to fetch user password" });
      }

      console.log('results:', results);
      // const [db] = JSON.parse(JSON.stringify(results));
      // const match = bcryptCompare(db.password, req.params.password);
      // console.log('dbPassword:', db.password);

      // console.log('match:', match);
      return res.send(results);
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
    pool.query('DELETE FROM posts WHERE id = ?', [req.params.postId], (error, results, fields) => {
      if (error) {
        return res.sendStatus(500); //TODO: create a more specific error for user
      }
      if (!results.affectedRows) {
        return res.sendStatus(404)
      }
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
