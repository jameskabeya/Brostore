import React, { useState } from 'react';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="max-w-md grid gap-2 mt-40 justify-center mx-auto p-4">
            <h2 className="text-xl grid justify-center font-semibold mb-4">Commander</h2>
            <form className='md:grid-cols-2 grid justify-between gap-4 md:text-center' onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block font-medium">
                        Prénom
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-50 border rounded-md py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block font-medium">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-50 border rounded-md py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-md py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block font-medium">
                        Adresse
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border rounded-md py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block font-medium">
                        Ville
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border rounded-md py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="postalCode" className="block font-medium">
                        Code Postal
                    </label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full border rounded-md py-2 px-3"
                        required
                    />
                </div>
                <div className='grid justify-center '>
                    <button
                        type="submit"
                        className="bg-blue-500  text-white rounded-md py-2 px-4 hover:bg-blue-600"
                    >
                        Passer la commande
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
