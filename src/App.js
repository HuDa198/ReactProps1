import React from 'react';
import './App.css';
import UserCard from './compenents/usercard';

function App() {
  const utilisateur = {
    nom: "Doe",
    prénom: "John",
    email: "john.doe@example.com",
    ImageUrl: "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
   };
  return <>
  <UserCard nom={utilisateur.nom} prenom={utilisateur.prénom} email={utilisateur.email} img={utilisateur.ImageUrl} />
  </>
}

export default App;
