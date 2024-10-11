import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage"; // Vérifie que ce fichier existe
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./sass/style.scss";

// Configuration des routes avec createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Composant Home
    errorElement: <ErrorPage />, // Composant pour la gestion des erreurs 404
  },
  {
    path: "/about",
    element: <About />, // Composant About
  },
  {
    path: "/contact",
    element: <Contact />, // Composant Contact
  },
]);

// Rendu de l'application avec RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
