import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx';


// importation de React Router DOM pour la gestion des routes
import { 
  createBrowserRouter, 
  RouterProvider 

} from 'react-router-dom';

// importation des composants de l'application
import Home from './home/Home.jsx';


const router = createBrowserRouter([
  {
    // les liens de navigation qui seront affichés dans la barre de navigation
    path: '/',
    element: <App />,
    // les composants qui seront affichés lorsque le lien est cliqué
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  }
])

// le point d'entrée de l'application
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
