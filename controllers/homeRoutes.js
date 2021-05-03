const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Render homepage from root directory
router.get('/', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      order: [['timestamp','DESC']],
      include: [
        {
          model: User,
          attributes: ['name', 'id'],
        },
        {
          model: Comment,
          attributes: ['content'],
        }
      ],
    });

    const blogs = blogData.map(post => post.get({ plain: true }));

    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render login from /login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Render dashboard from /dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userBlogData = await Blog.findAll({
      order: [['timestamp','DESC']],
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['name', 'id'],
        },
        {
          model: Comment,
          attributes: ['content'],
        }
      ],
    });
    var userBlogs = [];
    if (!userBlogData) {
      res.render('dashboard', {
        userBlogs,
        logged_in: req.session.logged_in,
      });
    }
    userBlogs = userBlogData.map(post => post.get({plain: true}));
    res.render('dashboard', {
      userBlogs,
      logged_in: req.session.logged_in,
    })
  } catch (err){
    res.status(400).json(err);
  }
});

// render a post view from post/:id
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name', 'id'],
        },
        {
          model: Comment,
          attributes: ['content'],
          include: {
            model: User,
            attributes:['name'],
            order: [['id', 'ASC']],
          },
        }
      ],
    });
    const blogPost = blogData.get({plain: true});
    res.render('post', {
      blogPost,
      logged_in: req.session.logged_in,
    });
  } catch (err){
    res.status(400).json(err);
  }
});

module.exports = router;