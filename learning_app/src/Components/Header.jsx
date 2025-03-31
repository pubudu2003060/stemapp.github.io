import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLogin }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="w-full bg-white shadow-md">
            {/* Upper Header Section */}
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src="../assets/logo.jpg" alt="logo" className="h-10 w-auto" />
                    </div>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            <li><Link to="/student" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link></li>
                            <li><Link to="/student/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link></li>
                            <li><Link to="/student/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link></li>
                            <li><Link to="/student/courses" className="text-gray-700 hover:text-blue-600 font-medium">STEM</Link></li>
                        </ul>
                    </nav>

                    {/* Account Section - Hidden on mobile */}
                    <div className="hidden md:block">
                        {isLogin ? (
                            <ul className="flex space-x-6">
                                <li><Link to="/student/profile" className="text-gray-700 hover:text-blue-600 font-medium">Profile</Link></li>
                                <li><Link to="/student/logout" className="text-gray-700 hover:text-blue-600 font-medium">Logout</Link></li>
                            </ul>
                        ) : (
                            <ul className="flex space-x-6">
                                <li><Link to="/student/SignIn" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link></li>
                                <li>
                                    <Link
                                        to="/student/SignUp"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Mobile Menu Button - Only visible on mobile */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                // X icon
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Menu (hamburger) icon
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Lower Header Section - Desktop Only */}
            <div className="hidden md:block bg-gray-100">
                <div className="container mx-auto px-4 py-2">
                    <nav>
                        <ul className="flex space-x-8 justify-center">
                            <li><Link to="/student/courses" className="text-gray-700 hover:text-blue-600 font-medium">Science</Link></li>
                            <li><Link to="/student/courses" className="text-gray-700 hover:text-blue-600 font-medium">Technology</Link></li>
                            <li><Link to="/student/courses" className="text-gray-700 hover:text-blue-600 font-medium">Engineering</Link></li>
                            <li><Link to="/student/courses" className="text-gray-700 hover:text-blue-600 font-medium">Maths</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu - Only visible when opened */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <nav className="px-4 py-3">
                        <ul className="space-y-3">
                            <li><Link to="/student" className="block text-gray-700 hover:text-blue-600 font-medium py-1">Home</Link></li>
                            <li><Link to="/student/contact" className="block text-gray-700 hover:text-blue-600 font-medium py-1">Contact</Link></li>
                            <li><Link to="/student/about" className="block text-gray-700 hover:text-blue-600 font-medium py-1">About</Link></li>
                            <li><Link to="/student/courses" className="block text-gray-700 hover:text-blue-600 font-medium py-1">STEM</Link></li>
                            <li className="border-t pt-2 mt-2">
                                <Link to="/student/courses" className="block text-gray-700 hover:text-blue-600 font-medium py-1">Science</Link>
                            </li>
                            <li><Link to="/student/courses" className="block text-gray-700 hover:text-blue-600 font-medium py-1">Technology</Link></li>
                            <li><Link to="/student/courses" className="block text-gray-700 hover:text-blue-600 font-medium py-1">Engineering</Link></li>
                            <li><Link to="/student/courses" className="block text-gray-700 hover:text-blue-600 font-medium py-1">Maths</Link></li>
                            <li className="border-t pt-2 mt-2">
                                {isLogin ? (
                                    <>
                                        <Link to="/student/profile" className="block text-gray-700 hover:text-blue-600 font-medium py-1">Profile</Link>
                                        <Link to="/student/logout" className="block text-gray-700 hover:text-blue-600 font-medium py-1 mt-1">Logout</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/student/SignIn" className="block text-gray-700 hover:text-blue-600 font-medium py-1">Login</Link>
                                        <Link
                                            to="/student/SignUp"
                                            className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mt-2 text-center"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;