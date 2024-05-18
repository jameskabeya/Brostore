import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleEmailPasswordLogin = async (e) => {
        e.preventDefault();
        try {
            // Placeholder API call to authenticate user
            const response = await fetch('your-authentication-api-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Redirect user to dashboard or homepage upon successful login
                window.location.href = '/dashboard';
            } else {
                // Handle authentication error
                setError('Invalid email or password. Please try again.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    const handleFacebookLogin = () => {
        // Placeholder function for handling Facebook login
        console.log('Logging in with Facebook');
    };

    const handleGoogleLogin = () => {
        // Placeholder function for handling Google login
        console.log('Logging in with Google');
    };

    const handleOtherSocialLogin = (provider) => {
        // Placeholder function for handling login with other social media providers
        console.log('Logging in with', provider);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <form onSubmit={handleEmailPasswordLogin} className="space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none mt-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="flex flex-col space-y-4">
                    <button
                        onClick={handleFacebookLogin}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                        Sign in with Facebook</button>
                    <button
                        onClick={handleGoogleLogin}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign in with Google
                    </button>
                    {/* Example of how to add more social media login options */}
                    {/* Replace 'Provider' with the name of the social media platform */}
                    <button
                        onClick={() => handleOtherSocialLogin('Provider')}
                        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign in with Provider
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
