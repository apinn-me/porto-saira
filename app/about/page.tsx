'use client';

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 via-pink-400 to-pink-300 text-white font-sans">

      {/* Navbar */}
      <header className="relative flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-white">
          <span className="bg-gradient-to-r from-pink-100 to-pink-300 text-transparent bg-clip-text">S</span>aira
        </h1>

        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="hover:text-pink-100">Home</Link>
          <Link href="/about" className="hover:text-pink-100">About</Link>
          <Link href="/service" className="hover:text-pink-100">Service</Link>
          <Link href="/portfolio" className="hover:text-pink-100">Portfolio</Link>
        </nav>

        <a href="#" className="hidden sm:inline-block bg-white text-pink-500 px-4 py-2 rounded-full shadow hover:bg-pink-200 transition font-semibold">
          Contact
        </a>

        <button
          className="md:hidden text-white text-3xl ml-4 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-pink-400 text-white flex flex-col items-center md:hidden shadow-md z-50 py-4">
            <Link href="/" className="py-2 hover:text-pink-100" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" className="py-2 hover:text-pink-100" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/service" className="py-2 hover:text-pink-100" onClick={() => setMenuOpen(false)}>Service</Link>
            <Link href="/portfolio" className="py-2 hover:text-pink-100" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link href="/contact" className="py-2 mt-2 bg-white text-pink-500 rounded-full px-4 py-1 shadow hover:bg-pink-200 transition font-semibold" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </header>

      {/* About Page Content */}
      <section data-aos="fade-up" className="flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-24 py-16">
        <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0 relative">
          <div className="w-[300px] h-[400px] rounded-full overflow-hidden relative flex items-center justify-center before:absolute before:-top-6 before:-left-6 before:w-24 before:h-24 before:rounded-full before:bg-green-300 before:blur-xl before:opacity-60 after:absolute after:-bottom-6 after:-right-6 after:w-24 after:h-24 after:rounded-full after:bg-yellow-200 after:blur-2xl after:opacity-50">
            <Image
              src="/image/1.png"
              alt="About Me"
              width={300}
              height={400}
              className="w-full h-full object-cover rounded-3xl"
              draggable={false}
            />
          </div>
        </div>

        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-4xl font-bold mb-4">About Me</h3>
          <p className="mb-6 text-base sm:text-lg">
            Saya adalah seorang fotografer dan desainer grafis yang berdedikasi dan penuh semangat. Saya mencintai dunia visual dan percaya bahwa setiap karya memiliki cerita melalui warna, bentuk, dan komposisi.
          </p>
          <a href="#" className="inline-block bg-white text-pink-500 font-bold px-6 py-3 rounded-full shadow hover:bg-pink-200 transition">
            Download CV
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-500 py-12 px-4 sm:px-6 lg:px-24 text-center">
        <h4 className="text-xl font-semibold mb-4">Let&#39;s Connect!</h4>
        <p className="mb-6">Tertarik bekerja sama? Jangan ragu untuk menghubungi saya kapan saja.</p>
        <div className="flex flex-wrap justify-center gap-4 text-white mb-6">
          {['Facebook', 'Instagram', 'LinkedIn', 'GitHub'].map((platform, i) => (
            <a key={i} href="#" className="hover:text-pink-200">{platform}</a>
          ))}
        </div>
        <p className="text-sm">&copy; 2025 Saira. All rights reserved.</p>
      </footer>
    </div>
  );
}
