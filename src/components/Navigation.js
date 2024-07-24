// src/components/Navigation.js
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="max-w-7xl mx-auto mb-15 text-gray-300 border-y-indigo-500">
            <nav className="bg-card text-card-foreground p-4 shadow-md rounded-lg flex items-center justify-between">
                <div className="flex items-center space-x-10">
                    <i className="fa fa-file-text transform hover:scale-110 transition-transform duration-300 overflow-hidden" aria-hidden="true"></i>
                    <div className="hidden md:flex items-center space-x-10">
                        <Link legacyBehavior href="/">
                            <a className={`text-muted-foreground cursor-pointer pb-1 ${router.pathname === '/' ? 'text-primary border-b-2 border-primary' : 'hover:text-primary hover:border-b-2 hover:border-primary'}`}>Home</a>
                        </Link>
                        <Link legacyBehavior href="/support">
                            <a className={`text-muted-foreground cursor-pointer pb-1 ${router.pathname === '/support' ? 'text-primary border-b-2 border-primary' : 'hover:text-primary hover:border-b-2 hover:border-primary'}`}>Support</a>
                        </Link>
                        <Link legacyBehavior href="/features">
                            <a className={`text-muted-foreground cursor-pointer pb-1 ${router.pathname === '/features' ? 'text-primary border-b-2 border-primary' : 'hover:text-primary hover:border-b-2 hover:border-primary'}`}>Features</a>
                        </Link>
                        <Link legacyBehavior href="/dashboard">
                            <a className={`text-muted-foreground cursor-pointer pb-1 ${router.pathname === '/dashboard' ? 'text-primary border-b-2 border-primary' : 'hover:text-primary hover:border-b-2 hover:border-primary'}`}>Dashboard</a>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <button className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <i className="fa fa-bell" aria-hidden="true"></i>
                    </button>
                    <img src="https://placehold.co/40x40" alt="profile-picture" className="h-8 w-8 rounded-full border border-muted transform hover:scale-110 transition-transform duration-300 overflow-hidden" />
                    <button className="md:hidden text-muted-foreground hover:text-primary" onClick={toggleMenu}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden bg-card text-card-foreground p-4 rounded-lg shadow-md mt-2">
                    <Link legacyBehavior href="/">
                        <a className={`block text-muted-foreground cursor-pointer pb-1 mb-2 ${router.pathname === '/' ? 'text-primary border-b-2 border-primary' : 'hover:text-primary hover:border-b-2 hover:border-primary'}`}>Home</a>
                    </Link>
                    <Link legacyBehavior href="/support">
                        <a className={`block text-muted-foreground cursor-pointer pb-1 mb-2 ${router.pathname === '/support' ? 'text-primary border-b-2 border-primary' : 'hover:text-primary hover:border-b-2 hover:border-primary'}`}>Support</a>
                    </Link>
                    <Link legacyBehavior href="/features">
                        <a className={`block text-muted-foreground cursor-pointer pb-1 mb-2 ${router.pathname === '/features' ? 'text-primary border-b-2 border-primary' : 'hover:text-primary hover:border-b-2 hover:border-primary'}`}>Features</a>
                    </Link>
                    <Link legacyBehavior href="/dashboard">
                        <a className={`block text-muted-foreground cursor-pointer pb-1 mb-2 ${router.pathname === '/dashboard' ? 'text-primary border-b-2 border-primary' : 'hover:text-primary hover:border-b-2 hover:border-primary'}`}>Dashboard</a>
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Navigation;
