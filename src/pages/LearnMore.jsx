import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPost = ({ title, content }) => (
  <div className="mb-12">
    <h3 className="mb-4 text-2xl font-bold text-blue-100">{title}</h3>
    <p className="leading-relaxed text-gray-200">{content}</p>
  </div>
);

const LearnMore = () => {
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      title: "Decentralized, Peer-to-Peer Matching",
      content: "Our platform leverages blockchain technology to create a truly decentralized peer-to-peer network. Unlike traditional ride-sharing services, there's no central authority controlling the matching process. Instead, smart contracts and autonomous agents facilitate direct connections between riders and drivers, ensuring transparency and reducing costs for all participants."
    },
    {
      title: "Autonomous Agents for Negotiation",
      content: "We utilize Fetch.ai's advanced autonomous agents to handle ride negotiations. These AI-powered agents work on behalf of both riders and drivers, automatically negotiating terms, prices, and routes based on predefined preferences and real-time conditions. This automation reduces friction and ensures fair dealings for all parties involved."
    },
    {
      title: "Dynamic, Distance-Based Pricing",
      content: "Our pricing model is completely transparent and based on actual distance and market conditions. Smart contracts automatically calculate fares using real-time data, eliminating surge pricing and hidden fees. Drivers receive fair compensation while riders enjoy competitive rates, all secured and verified on the blockchain."
    },
    {
      title: "Smart Contract Integration",
      content: "Every ride is governed by smart contracts deployed on the blockchain. These contracts automatically handle payment escrow, ride verification, and dispute resolution. This ensures that both riders and drivers are protected, with payments only released when all conditions are met. The immutable nature of blockchain provides a trustless environment for all transactions."
    },
    {
      title: "Basic Reputation System",
      content: "Trust is built into our platform through a decentralized reputation system. Both riders and drivers earn reputation tokens based on their behavior, punctuality, and service quality. These tokens are stored on the blockchain, creating an immutable record that helps maintain high service standards and community trust."
    },
    {
      title: "Simulated Geolocation",
      content: "Our platform includes a sophisticated geolocation system that tracks rides in real-time while maintaining user privacy. Location data is encrypted and only shared between the matched rider and driver during active rides. This ensures both safety and privacy for all users."
    },
    {
      title: "Future Enhancements",
      content: "We're constantly evolving our platform with planned features including multi-token payment support, advanced route optimization, carpooling smart contracts, and integration with other decentralized services. Our goal is to create a comprehensive mobility ecosystem that's truly owned and operated by its community."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <button 
          onClick={() => navigate('/')} 
          className="text-2xl font-bold text-white transition hover:text-gray-200"
        >
          DRide
        </button>
        <button 
          onClick={() => navigate('/')}
          className="text-white transition hover:text-gray-200"
        >
          Back to Home
        </button>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl px-4 py-12 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl animate-fade-in">
          The Technology Behind DRide
        </h1>
        <p className="mb-12 text-xl text-gray-200">
          Discover how we're revolutionizing ride-sharing through blockchain technology and autonomous agents.
        </p>

        {/* Blog Posts */}
        <div className="space-y-16">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Ready to Experience the Future?
          </h2>
          <button
            onClick={() => navigate('/home')}
            className="px-8 py-3 font-semibold text-blue-600 transition duration-300 transform bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105"
          >
            Join DRide Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 mt-20 text-white bg-black/20">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <p className="text-gray-300">
            © 2024 DRide. Building the future of decentralized transportation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LearnMore;