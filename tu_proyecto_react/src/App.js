import React from "react";  // Importa la biblioteca React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Importa componentes de enrutamiento
import Auth from "./components/Auth";  // Componente de autenticación
import Profile from "./components/Profile";  // Componente del perfil del usuario
import PostList from "./components/PostList";  // Componente que lista las publicaciones
import CreatePost from "./components/CreatePost";  // Componente para crear una nueva publicación

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;
