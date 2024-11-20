const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// GET all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    console.log("Articles renvoyés :", articles);
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

// PUT to update article tags
router.put('/:id/tags', async (req, res) => {
  try {
    const { tags } = req.body; // Les tags envoyés depuis le frontend
    if (!tags || !Array.isArray(tags)) {
      return res.status(400).json({ message: 'Les tags doivent être un tableau.' });
    }

    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { tags },
      { new: true, runValidators: true } // Renvoie l'article mis à jour avec les validateurs du modèle
    );

    if (!updatedArticle) {
      return res.status(404).json({ message: 'Article non trouvé.' });
    }

    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour des tags', error });
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

// DELETE all articles
router.delete('/', async (req, res) => {
  try {
    await Article.deleteMany({}); // Supprime tous les articles de la collection
    res.status(200).json({ message: 'Tous les articles ont été supprimés avec succès.' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression des articles', error: err.message });
  }
});

// Route pour incrémenter les vues d'un article
router.post('/views', async (req, res) => {
  const { articleId } = req.body;

  try {
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
