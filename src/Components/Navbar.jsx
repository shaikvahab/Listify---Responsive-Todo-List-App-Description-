import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-green-500 p-3 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-white text-2xl font-bold">Listify</h1>

                {/* Navigation Links */}
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-white text-lg hover:underline transition-all">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-lg hover:underline transition-all">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-lg hover:underline transition-all">
                            Taskbar
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};



export default Navbar
