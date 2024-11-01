const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  description: { type: String },
  author: { type: String },
  createdAt: { type: Date, default: Date.now },
  category: { type: String },
  tags: { type: [String] },
  views: { type: Number, default: 0 }
});

module.exports = mongoose.model('Article', articleSchema);

