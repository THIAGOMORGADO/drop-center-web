"use client"

import { FaSignInAlt } from "react-icons/fa";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(true);

  return (
    <header className=" text-black shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Video Call - Center
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/features" className="text-gray-600 hover:text-primary">Features</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-primary">Pricing</Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4 bg-zinc-900">
          <Link href="/signup" className="bg-zinc-900 flex items-center justify-center gap-2 text-white px-4 py-2 rounded hover:bg-primary-dark text-center">
            Entrar
            <FaSignInAlt className="w-4 h-4" />
          </Link>
        </div>

        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 flex">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link href="/features" className="text-gray-600 hover:text-primary">Features</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-primary">Pricing</Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>

            <p className="text-gray-600">-------or-------</p>

            <Link href="/login" className=" text-primary gap-2 hover:text-primary-dark text-right flex items-center">
              Entrar
              <FaSignInAlt className="w-4 h-4" />
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}