import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Feature } from '../components/Feature';
import { TeamMember } from '../components/TeamMember';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/home');
    };

    const features = [
        {
            icon: '🔒',
            title: 'Fair and Transparent Pricing',
            description: 'DRide’s automated pricing ensures riders stay within budget and drivers earn fair fares—making every trip transparent and satisfying.'
        },
        {
            icon: '👥',
            title: 'User-Centric',
            description: 'DRide’s unique network gives riders and drivers more control, enhances safety, and creates a secure, user-focused ride-sharing experience.'  
        },
        {
            icon: '💰',
            title: 'Autonomous Negotiation',
            description: 'DRide leverages Fetch.ai technology for instant, hassle-free fare agreements—setting fair prices without manual negotiation.'
        },
    ];

    const teamMembers = [
        {
            image: 'https://i.postimg.cc/gkdGLJN8/Screenshot-2024-11-08-174414.png',
            name: 'Sehaj',
            // role: 'Founder & CEO',
            description: 'Front-End Specialist with Full-Stack Development Expertise'
        },
        {
            image: 'https://i.postimg.cc/JhCF9nJM/Screenshot-2024-11-09-131244.png',
            name: 'Suyransh Patwal',
            // role: '',
            description: 'Full-Stack Developer specializing in Blockchain and AI integration'
        },
        {
            image: 'https://i.postimg.cc/PrNyQvkK/Screenshot-2024-11-08-180352.png',
            name: 'Bhawna Sharma',
            // role: 'Head of Operations',
            description: 'Enthusiastic Front-End Developer'
        },
        {
            image: 'https://i.postimg.cc/9f2yKrs6/Screenshot-2024-11-08-180524.png',
            name: 'Hirdesh khandelwal',
            // role: 'Lead Developer',
            description: 'Full-stack developer specializing in blockchain and smart contracts'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            {/* Navigation */}
            <nav className="flex items-center justify-between p-6">
                <div className="text-2xl font-bold text-white">DRide</div>
                <div className="space-x-4">
                    <button className="text-white hover:text-gray-200">About</button>
                    <button className="text-white hover:text-gray-200">Contact</button>
                    <button 
                        className="px-4 py-2 text-blue-500 transition bg-white rounded-full hover:bg-gray-100"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center px-4 py-20 text-white">
                <h1 className="mb-6 text-5xl font-bold text-center md:text-6xl animate-fade-in">
                    Welcome to DRide🚗
                </h1>
                <p className="max-w-2xl mb-12 text-xl text-center md:text-2xl">
                    Experience the future of ride sharing with our automated faire negotiation  platform. 
                    Safer, cheaper, and community-driven.
                </p>
                <div className="space-x-4">
                    <button
                        className="px-8 py-3 font-semibold text-blue-500 transition duration-300 transform bg-white rounded-full shadow-lg hover:bg-gray-200 hover:scale-105"
                        onClick={handleGetStarted}
                    >
                        Get Started
                    </button>
                    <button
                        className="px-8 py-3 font-semibold text-white transition duration-300 border-2 border-white rounded-full hover:bg-white/10"
                        onClick={() => navigate('/learn-more')}
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-6xl px-4 py-16 mx-auto">
                <h2 className="mb-12 text-3xl font-bold text-center text-white">
                    Why Choose DRide?
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <Feature
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>

            {/* Meet the Team Section */}
            <div className="max-w-6xl px-4 py-16 mx-auto">
                <h2 className="mb-6 text-3xl font-bold text-center text-white">
                    Meet the Team
                </h2>
                <p className="max-w-2xl mx-auto mb-12 text-center text-gray-200">
                    Our team of experts is dedicated to revolutionizing the ride-sharing industry through blockchain technology.
                </p>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            image={member.image}
                            name={member.name}
                            role={member.role}
                            description={member.description}
                        />
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 text-center bg-white/5 backdrop-blur-lg">
                <h2 className="mb-6 text-3xl font-bold text-white">
                    Ready to Join the Revolution?
                </h2>
                <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-200">
                    Join thousands of users who are already experiencing the future of ride sharing.
                </p>
                <button
                    className="px-8 py-3 font-semibold text-blue-500 transition duration-300 bg-white rounded-full shadow-lg hover:bg-gray-200"
                    onClick={handleGetStarted}
                >
                    Start Your Journey
                </button>
            </div>

            {/* Footer */}
            <footer className="py-8 text-white bg-black/20">
                <div className="grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-lg font-bold">DRide</h3>
                        <p className="text-gray-300">
                            Revolutionizing ride sharing using automated fairer negotiation.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-300">
                    © 2024 DRide. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
