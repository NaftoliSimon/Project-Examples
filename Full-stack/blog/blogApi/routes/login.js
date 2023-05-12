const express = require('express');
const router = express.Router();

router.route('/:email')
  .get(function (req, res, next) {
    pool.query('SELECT password FROM users WHERE email = ?', [req.params.email], (error, results, fields) => {
      if (error) {
        console.error("Failed to fetch user password: ", error);
        return res.status(500).json({ error: "Failed to fetch user password" });
      }
      return res.json(results);
    })
  })

module.exports = router;
