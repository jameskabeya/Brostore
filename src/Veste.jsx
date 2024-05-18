import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Veste() {
    return (
        <div className='bg-gray-200'>
            <div className="grid gap-2 p-4 justify-center">
                <div>
                    <img className="w-80 mt-20" src="./src/assets/man1.png" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
                <div>
                    <Link to='/CheckoutForm'>
                        <img className="w-80" src="./src/assets/man2.png" alt="" />
                        <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                        <p className="flex justify-center">What people said about us</p>
                    </Link>
                </div>
                <div>
                    <img className="w-80" src="./src/assets/man3.png" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
                <div>
                    <img className="w-80" src="./src/assets/man4.png" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
            </div>
            <div className="grid md:grid-cols-4 gap-2 p-4 justify-center">
                <div>
                    <img className="w-80" src="./src/assets/man1.png" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
                <div>
                    <img className="w-80" src="./src/assets/man2.png" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
                <div>
                    <img className="w-80" src="./src/assets/man3.png" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
                <div>
                    <img className="w-80" src="./src/assets/man4.png" alt="" />
                    <p className="flex font-bold justify-center">Dark Blue Shirt</p>
                    <p className="flex justify-center">What people said about us</p>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
