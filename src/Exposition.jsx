export default function Exposition () {
  return (
    <div className="p-8 bg-pink-500 grid md:grid-cols-4 gap-2 justify-center">
        <div className="shadow-lg p-2">
            <p className='text-2xl font-bold'>Free Shipping</p>
            <p>Enjoy free shipping </p>
            <p>on all orders above $100</p>
        </div>
        <div className="shadow-lg p-2">
            <p className='text-2xl font-bold'>SUPPORT 24/7</p>
            <p>Our support team is there </p>
            <p>to help you for queries</p>
        </div>
        <div className="shadow-lg p-2">
            <p className='text-2xl font-bold'>30 DAYS RETURN</p>
            <p>Simply return it within </p>
            <p>30 days for an exchange.</p>
        </div>
        <div className="shadow-lg p-2">
            <p className='text-2xl font-bold'>100% PAYMENT SECURE</p>
            <p>Our payments are secured </p>
            <p>with 256 bit encryption.</p>
        </div>
    </div>
  )
}
