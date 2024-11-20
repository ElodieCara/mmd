const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  description: { type: String },
  author: { type: String },
  createdAt: { type: Date, default: Date.now },
  category: { type: String, default: "Non classé" },
  tags: { type: [String], default: [] },
  views: { type: Number, default: 0 },
  type: { type: String, enum: ["Card--news-style1", "Card--news-style2", "Card--news-style3", "Card--news-style4"], default: "Card--news-style1" }
});

module.exports = mongoose.model('Article', articleSchema);

