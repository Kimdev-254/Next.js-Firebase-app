import React from "react";
import { FaSquareGithub, FaSquareWhatsapp, FaSquareXTwitter, FaSquare, FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto bg-foreground shadow-md rounded-lg  text-white mb-2 py-4">
            <div className="container mx-auto mt-2 text-center">
                <div className="flex justify-center space-x-4 mb-4 ">
                    <Link href="https://wa.me/0719628538" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                        <FaSquareWhatsapp size={30} />
                    </Link>
                    <Link href="https://github.com/Kimdev-254" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                        <FaSquareGithub size={30} />
                    </Link>
                    <Link href="https://twitter.com/Kimdev@254" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                        <FaSquareXTwitter size={30} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/boniface-kimani-49ba6030a/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                        <FaLinkedin size={30} />
                    </Link>
                </div>
            </div>
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2024 Kimdev254. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;