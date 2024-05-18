import React, { useState } from 'react';

const PaymentPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validatePhoneNumber = (input) => {
    const phoneRegex = /^(?:\+243|0)[1-9]\d{8}$/;
    return phoneRegex.test(input);
  };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Le nom complet est requis.';
    }

    if (!validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = 'Numéro de téléphone invalide. Veuillez entrer un numéro de téléphone valide.';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Adresse e-mail invalide. Veuillez entrer une adresse e-mail valide.';
    }

    if (!address.trim()) {
      newErrors.address = 'L\'adresse de livraison est requise.';
    }

    if (!amount || amount <= 0) {
      newErrors.amount = 'Le montant doit être supérieur à 0.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({});
    
    // Simuler la soumission de paiement
    try {
      // Remplacer par l'appel à l'API de paiement
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage('Paiement réussi !');
      // Réinitialiser les champs du formulaire
      setPhoneNumber('');
      setFullName('');
      setEmail('');
      setAddress('');
      setAmount('');
    } catch (error) {
      setMessage('Échec du paiement. Veuillez réessayer ultérieurement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Paiement Mobile Money</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 mb-2">Nom Complet</label>
            <input
              type="text"
              id="fullName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Adresse E-mail</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">Numéro de Téléphone</label>
            <input
              type="text"
              id="phoneNumber"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 mb-2">Adresse de Livraison</label>
            <input
              type="text"
              id="address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Montant (USD)</label>
            <input
              type="number"
              id="amount"
              placeholder="Entrez le montant"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Traitement...' : 'Payer'}
          </button>
        </form>
        {message && (
          <div className={`mt-4 text-center ${message.includes('réussi') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
