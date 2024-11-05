import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/home');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <header className="text-center mb-8">
                <h1 className="text-5xl font-bold mb-4">Welcome to Decentralized Ride Sharing</h1>
                <p className="text-xl">Experience the future of ride sharing with our decentralized platform.</p>
            </header>
            <main>
                <button
                    className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
                    onClick={handleGetStarted}
                >
                    Get Started
                </button>
            </main>
        </div>
    );
};

export default LandingPage;

