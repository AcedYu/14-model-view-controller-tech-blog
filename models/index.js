const Blog = require("./Blog");
const User = require("./User");
const Comment = require("./Comment");

// User can have many blog posts
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Blog.belongsTo(User, {
  foreignKey:'user_id'
});

// User can have many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Blogs can have many comments
Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(Blog, {
  foreignKey: 'blog_id'
});

module.exports = { Blog, User, Comment };