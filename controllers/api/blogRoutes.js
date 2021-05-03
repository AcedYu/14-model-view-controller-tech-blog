const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');

router.post('/', async (req, res) => {
  req.body.user_id = req.session.user_id;
  try {
    const blogData = await Blog.create(req.body);
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;