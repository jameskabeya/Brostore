import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const defaultProduct = {
    name: 'Produit Exemple',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur incidunt cumque, laboriosam temporibus dolor vel laborum atque nobis in ducimus itaque perspiciatis perferendis beatae explicabo ab sequi quod exercitationem soluta!',
    price: 49.99,
    image: './src/assets/femme6.jpeg', // URL de l'image par défaut
};

const DetailsForm = ({ product = defaultProduct }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        amount: product.price,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validatePhoneNumber = (input) => /^(?:\+243|0)[1-9]\d{8}$/.test(input);
    const validateEmail = (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Le nom complet est requis.';
        }

        if (!validatePhoneNumber(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Numéro de téléphone invalide. Veuillez entrer un numéro de téléphone valide.';
        }

        if (!validateEmail(formData.email)) {
            newErrors.email = 'Adresse e-mail invalide. Veuillez entrer une adresse e-mail valide.';
        }

        if (!formData.address.trim()) {
            newErrors.address = 'L\'adresse de livraison est requise.';
        }

        if (!formData.amount || formData.amount <= 0) {
            newErrors.amount = 'Le montant doit être supérieur à 0.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setMessage('');

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setMessage('Paiement réussi !');
            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                address: '',
                amount: product.price,
            });
        } catch (error) {
            setMessage('Échec du paiement. Veuillez réessayer ultérieurement.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen mt-20 flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full flex flex-col lg:flex-row mb-8">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Résumé de la commande</h2>
                    <div className="items-center mb-4">
                        <div>
                            <img className="w-full h-full flex items-center justify-center object-cover rounded-lg" src={product.image} alt={product.name} />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-medium">{product.name}</p>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-lg font-semibold text-blue-600">{product.price} USD</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Paiement Mobile Money</h2>
                    <form onSubmit={handleSubmit}>
                        {['fullName', 'email', 'phoneNumber', 'address'].map((field) => (
                            <div key={field} className="mb-4">
                                <label htmlFor={field} className="block text-gray-700 mb-2 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    id={field}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    value={formData[field]}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                            </div>
                        ))}
                        <div className="mb-4">
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Montant (USD)</label>
                            <input
                                type="number"
                                id="amount"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                value={formData.amount}
                                onChange={handleInputChange}
                                required
                                readOnly
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
        </div>
    );
};

export default DetailsForm;
