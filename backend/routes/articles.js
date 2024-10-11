const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// GET all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single article by ID
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new article
router.post('/', async (req, res) => {
  const newArticle = new Article(req.body);
  try {
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT to update an article
router.put('/:id', async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE an article
router.delete('/:id', async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route pour incrémenter les vues d'un article
router.post('/views', async (req, res) => {
  const { articleId } = req.body;

  try {
    // Rechercher l'article par son ID et incrémenter les vues
    const article = await Article.findById(articleId);
    if (article) {
      article.views += 1; // Incrémenter les vues
      await article.save(); // Sauvegarder les modifications
      res.status(200).json(article); // Envoyer l'article mis à jour
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
});

module.exports = router;
