import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Produit 1',
    description: 'Description du produit 1.',
    originalPrice: 59.99,
    discountedPrice: 39.99,
    image: './src/assets/femme14.jpeg',
  },
  {
    id: 2,
    name: 'Produit 2',
    description: 'Description du produit 2.',
    originalPrice: 79.99,
    discountedPrice: 49.99,
    image: './src/assets/mans12.jpeg',
  },
  {
    id: 2,
    name: 'Produit 2',
    description: 'Description du produit 2.',
    originalPrice: 79.99,
    discountedPrice: 49.99,
    image: './src/assets/femme7.jpeg',
  },
  {
    id: 2,
    name: 'Produit 2',
    description: 'Description du produit 2.',
    originalPrice: 79.99,
    discountedPrice: 49.99,
    image: './src/assets/mans12.jpeg',
  },
  {
    id: 2,
    name: 'Produit 2',
    description: 'Description du produit 2.',
    originalPrice: 79.99,
    discountedPrice: 49.99,
    image: './src/assets/mans12.jpeg',
  },
  {
    id: 2,
    name: 'Produit 2',
    description: 'Description du produit 2.',
    originalPrice: 79.99,
    discountedPrice: 49.99,
    image: './src/assets/mans12.jpeg',
  },
  {
    id: 2,
    name: 'Produit 2',
    description: 'Description du produit 2.',
    originalPrice: 79.99,
    discountedPrice: 49.99,
    image: './src/assets/mans12.jpeg',
  },
  {
    id: 2,
    name: 'Produit 2',
    description: 'Description du produit 2.',
    originalPrice: 79.99,
    discountedPrice: 49.99,
    image: './src/assets/mans12.jpeg',
  },
  {
    id: 2,
    name: 'Produit 2',
    description: 'Description du produit 2.',
    originalPrice: 79.99,
    discountedPrice: 49.99,
    image: './src/assets/mans12.jpeg',
  },
];

const Styles = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date('2024-12-31') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Ventes Flash et Promotions</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">Temps restant pour les ventes flash:</h3>
            <div className="text-2xl font-semibold text-red-500">
              {timerComponents.length ? timerComponents : <span>Temps écoulé!</span>}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img className="w-full h-64 object-cover rounded-lg mb-4" src={product.image} alt={product.name} />
              <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center mb-4">
                <span className="text-lg font-semibold text-red-500 mr-2">${product.discountedPrice}</span>
                <span className="text-gray-500 line-through">${product.originalPrice}</span>
              </div>
              <Link to={`/product/${product.id}`} className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">Acheter maintenant</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Styles;







// import React from 'react'

// export default function Styles() {
//     return (
//         <div className='p-4 '>
//             <div className='mt-5 relative'>
//                 <img src="./src/assets/femme14.jpeg" alt="" />
//                 <div className='absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300'>
//                     <button className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-blue-400 transition duration-300 ease-in-out">Voir plus</button>
//                 </div>
//                 <div className=''>
//                     <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia temporibus maxime enim nulla similique deserunt sequi quod, iusto, amet provident soluta, distinctio odio in ipsa repellendus voluptatem quasi praesentium!</p>
//                 </div>
//             </div>
//             <div className='mt-5 relative'>
//                 <img src="./src/assets/femme14.jpeg" alt="" />
//                 <div className='absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300'>
//                     <button className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-blue-400 transition duration-300 ease-in-out">Voir plus</button>
//                 </div>
//                 <div className=''>
//                     <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia temporibus maxime enim nulla similique deserunt sequi quod, iusto, amet provident soluta, distinctio odio in ipsa repellendus voluptatem quasi praesentium!</p>
//                 </div>
//             </div>

//         </div>
//     )
// }
