import React, { useState } from 'react';
import Modal from 'react-modal';

const LoginModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Logique de connexion à implémenter ici
    console.log('Username:', username);
    console.log('Password:', password);
    // Réinitialisation des champs après la connexion
    setUsername('');
    setPassword('');
    // Fermer la fenêtre modale après la connexion
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
        Login
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-xl font-bold mb-4">Connexion</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded-lg px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-lg px-4 py-2 w-full"
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Se connecter
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
