import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LineWomen() {

    const [cartItems, setCartItems] = useState(0);

    const addToCart = () => {
        setCartItems(cartItems + 1);
    };
    const productList = [
        "femme1.jpeg",
        "femme4.jpeg",
        "femme7.jpeg",
        "femme6.jpeg",
        "femme8.jpeg",
        "femme9.jpeg",
        "femme10.jpeg",
        "femme11.jpeg",
        "femme12.jpeg",
        "femme13.jpeg",
        "femme14.jpeg",
        "femme15.jpeg",
        "femme16.jpeg",
        "femme17.jpeg",
        "femme18.jpeg",
        "femme19.jpeg",
        "femme20.jpeg",
        "femme21.jpeg",
        "femme22.jpeg",
    ];
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto grid mt-40 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-10 bg-white shadow-md rounded-lg m-10">
                <p className="mb-4 text-lg font-semibold">Vos commentaires</p>
                <textarea className="mb-4 p-2 w-full border border-gray-300 rounded-lg" placeholder="Ecrire ici" cols="30" rows="4"></textarea>
                <button className="p-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-300">Commenter</button>
            </div>
            <div className="p-8 mt-4">
                <div className="grid gap-5">
                    {[21, 22].map((index) => (
                        <div key={index} className="flex gap-4 justify-center items-center bg-white p-5 shadow-md rounded-lg">
                            <img className="w-32 h-32 rounded-full" src={`./src/assets/femme${index}.jpeg`} alt="" />
                            <div>
                                <p className="mt-5">Once we ordered some accessories items and we got the.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
