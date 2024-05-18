import Carousel from "./Carousel";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import Storyline from "./PaymentPage";

export default function Manstyles() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const productList = [
    "man1.png",
    "man2.png",
    "man3.png",
    "man4.png",
    "mans5.jpeg",
    "mans6.jpeg",
    "mans7.jpeg",
    "mans8.jpeg",
    "mans9.jpeg",
    "mans10.jpeg",
    "mans11.jpeg",
    "mans12.jpeg",
    "mans13.jpeg",
    "mans14.jpeg",
    "mans15.jpeg",
    "mans16.jpeg",
    "mans17.jpeg",
    "mans18.jpeg",
    "mans19.jpeg",
    "mantos.jpeg",
    "mantos2.jpeg",
    "mantos3.jpeg",
  ];

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="container mx-auto mt-10">
        <Carousel />
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {productList.map((image, index) => (
          <Link to="/CheckoutForm" key={index}>
            <div className="group relative bg-white p-4 rounded-lg shadow-lg  transition-shadow duration-300">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src={`src/assets/${image}`}
                alt=""
              />
              <div className=" flex-col items-center justify-center absolute top-0 left-0 w-full h-full rounded-lg ">
                <div className="flex justify-between gap-5">
                  <img className="w-40" src={`src/assets/`} alt="" />
                  <img className="w-40" src={`src/assets/`} alt="" />
                </div>


              </div>
              <p className="mt-2 p-4  text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, et doloremque consectetur, harum omnis tempore
                eveniet laborum molestias amet maiores vel! Quod odit quisquam
                hic quia culpa tempora adipisci rerum.
              </p>
              <button
                onClick={addToCart}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Ajouter au panier
              </button>
              <p className=" mt-2">Articles dans le panier: {cartItems}</p>
            </div>
          </Link>
        ))}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <p className="text-2xl font-bold mb-4">Faites nous confiance</p>
          <p className="text-lg mb-4">
            Le choix est libre, habillez-vous avec des habits de qualité et sur mesure.
          </p>
          <div>
            <p className="mb-2">Enregistrez-vous pour plus d'informations</p>
            <div className="space-y-2">
              <input
                placeholder="Enter Full Name"
                className="w-full bg-gray-200 p-2 rounded"
                type="text"
              />
              <input
                placeholder="Password"
                className="w-full bg-gray-200 p-2 rounded"
                type="password"
              />
              <textarea
                placeholder="Commentaire"
                className="w-full bg-gray-200 p-2 rounded"
                rows="2"
              ></textarea>
              <Link to="/CheckoutForm">
                <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded mt-2">
                  Send Now
                </button>
              </Link>
              <div>
                {/* <Storyline /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
