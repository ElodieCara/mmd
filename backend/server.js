const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const articlesRouter = require('./routes/articles'); // Assurez-vous que le chemin est correct

const app = express();
const port = 5001;

// Configurer dotenv pour accéder à votre fichier .env
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/api/articles', articlesRouter);

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
