import React from 'react'
import Exposition from './Exposition'
import Footer from './Footer'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className=" ">
            {/* <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('./src/assets/man4.png')" }}>
                <p>Welcome</p>
            </div> */}
            <div>
                {/* <Carousel /> */}
            </div>
            <div className="relative min-h-screen bg-cover text-white bg-center flex items-center justify-center">
                <img
                    src="./src/assets/man4.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0 bg-black opacity-50"
                    style={{ zIndex: -1 }}
                ></div>
                <div className="relative p-4 z-10 text-center">
                    <h1 className="text-4xl font-bold mb-4">Styles D'habillement classique</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt rerum accusamus sapiente natus omnis ex saepe unde reiciendis, culpa neque odit dignissimos provident! Illum perspiciatis ipsum aspernatur consequuntur iure!</p>
                    <div>
                        <button className='border-4 mt-4 font-bold text-white p-4'>Voir Plus</button>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <p className="text-3xl flex justify-center">Discover NEW Arrivals</p>
                <p className="flex p-4 justify-center">Recently added shirts!</p>
            </div>
            <div className='mt-5 relative grid md:grid-cols-4 gap-2 p-4 justify-center'>
                <img src="./src/assets/femme14.jpeg" alt="" />
                <div className='absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300'>
                    <Link to='/womenstyles'>
                        <button className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-blue-400 transition duration-300 ease-in-out">Voir plus</button>
                    </Link>
                </div>
                <div className=''>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia temporibus maxime enim nulla similique deserunt sequi quod, iusto, amet provident soluta, distinctio odio in ipsa repellendus voluptatem quasi praesentium!</p>
                </div>
            </div>
            <div className='mt-5 relative grid md:grid-cols-4 gap-2 p-4 justify-center'>
                <img src="./src/assets/man1.png" alt="" />
                <div className='absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300'>
                    <Link to='/Veste'>
                        <button className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-blue-400 transition duration-300 ease-in-out">Voir plus</button>
                    </Link>
                </div>
                <div className=''>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia temporibus maxime enim nulla similique deserunt sequi quod, iusto, amet provident soluta, distinctio odio in ipsa repellendus voluptatem quasi praesentium!</p>
                </div>
            </div>
            <div className="grid md:grid-cols-4 gap-2 p-4 justify-center">
                <div>
                    <img src="./src/assets/Rectangle 1 (2).svg" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
                <div>
                    <img src="./src/assets/Rectangle 1 (3).svg" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
                <div>
                    <img src="./src/assets/Rectangle 1 (4).svg" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
                <div>
                    <img src="./src/assets/Rectangle 1 (5).svg" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
            </div>
            <div className="grid md:grid-cols-4 gap-2 p-4 justify-center">
                <div>
                    <img src="./src/assets/Rectangle 1 (2).svg" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
                <div>
                    <img src="./src/assets/Rectangle 1 (3).svg" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
                <div>
                    <img src="./src/assets/Rectangle 1 (4).svg" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
                <div>
                    <img src="./src/assets/Rectangle 1 (5).svg" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
            </div>
            <div className="mt-4">
                <Exposition />
                <div className="mt-5">
                    <p className="text-3xl font-bold justify-center flex">Top Sellers</p>
                    <p className="justify-center flex">Browse our top-selling products</p>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="p-4 mt-5 bg-blue-600">SHOP NOW</button>
            </div>
            <footer className='mt-2'>
                <Footer />
            </footer>
        </div>
    )
}
