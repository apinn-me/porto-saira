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
          <span className="bg-gradient-to-r from-pink-100 to-pink-300 text-transparent bg-clip-text">IOT</span>Space
        </h1>

        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="hover:text-pink-100">Home</Link>
          <Link href="/about" className="hover:text-pink-100">About</Link>
          <Link href="/portfolio" className="hover:text-pink-100">Portfolio</Link>
        </nav>

        <a href="#contact" className="hidden sm:inline-block bg-white text-pink-500 px-4 py-2 rounded-full shadow hover:bg-pink-200 transition font-semibold">
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
            <Link href="/portfolio" className="py-2 hover:text-pink-100" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link href="#contact" className="py-2 mt-2 bg-white text-pink-500 rounded-full px-4 py-1 shadow hover:bg-pink-200 transition font-semibold" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </header>

      {/* About Page Content */}
      <section data-aos="fade-up" className="flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-24 py-16">
        <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0 relative">
          <div className="w-[300px] h-[400px] rounded-3xl overflow-hidden relative flex items-center justify-center before:absolute before:-top-6 before:-left-6 before:w-24 before:h-24 before:rounded-full before:bg-green-300 before:blur-xl before:opacity-60 after:absolute after:-bottom-6 after:-right-6 after:w-24 after:h-24 after:rounded-full after:bg-yellow-200 after:blur-2xl after:opacity-50">
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
          <h3 className="text-4xl font-bold mb-4">Tentang Saya</h3>
          <p className="mb-6 text-base sm:text-lg">
            Saya adalah seorang pengembang Internet of Things (IoT) yang antusias menciptakan solusi pintar untuk kehidupan sehari-hari. Berbekal pengalaman dalam mikrokontroler seperti ESP32 dan sensor-sensor digital, saya merancang sistem otomatisasi yang efisien dan terkoneksi dengan cloud.
          </p>
          <a href="/cv.pdf" download className="inline-block bg-white text-pink-500 font-bold px-6 py-3 rounded-full shadow hover:bg-pink-200 transition">
            Download CV
          </a>
        </div>
      </section>

      <section data-aos="fade-up" className="relative mt-24 px-4 sm:px-6 lg:px-24 py-16 text-center text-gray-900 rounded-b-3xl overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-100 opacity-80 -z-10" />

        {/* Decorative Blobs */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200 rounded-full filter blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-40 -z-10" />

        <h3 className="text-4xl font-bold mb-2">Riwayat Pendidikan</h3>
        <p className="mb-10 text-gray-700">Perjalanan pendidikan saya hingga tingkat menengah atas.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {[
            {
              icon: "📗",
              institution: "smp Al Washliyah 8 Medan ",
              years: "2016 - 2019"
            },

            {
              icon: "📙",
              institution: "MAN 3 Medan",
              years: "2019 - 2022"
            }
          ].map((edu, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300">
              <div className="mb-4 text-5xl">{edu.icon}</div>
              <h4 className="text-lg font-semibold mb-1">{edu.institution}</h4>

              <p className="text-sm text-gray-500">{edu.years}</p>
            </div>
          ))}
        </div>
      </section>



      <section data-aos="fade-up" className="mt-30 px-4 sm:px-8 lg:px-30 py-16 text-center bg-white text-gray-900 rounded-t-3xl shadow-inner">
        <h3 className="text-4xl font-bold mb-2">IoT Projects</h3>
        <p className="mb-10 text-gray-600">Berikut beberapa proyek IoT yang telah saya kembangkan.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Smart Plant Watering",
              desc: "Sistem penyiram tanaman otomatis berbasis kelembaban tanah menggunakan ESP32 dan pompa.",
              image: "./image/4.jpg"
            },
            {
              title: "DHT11 Temperature Monitoring",
              desc: "Monitoring suhu dengan sensor DHT11 dan pengiriman data ke cloud.",
              image: "./image/5.jpg"
            },
            {
              title: "RFID Door Lock System",
              desc: "Sistem pengaman pintu berbasis kartu RFID yang terintegrasi dengan ESP32.",
              image: "./image/6.jpg"
            },
          ].map((project, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 max-w-md mx-auto">
              <div className="mb-6 h-48 overflow-hidden rounded-lg flex items-center justify-center bg-gray-100">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>
              <h4 className="text-2xl font-semibold mb-3">{project.title}</h4>
              <p className="text-base text-gray-700 mb-4">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Footer */}
      <footer id="contact" className="bg-pink-500 py-12 px-4 sm:px-6 lg:px-24 text-center">
        <h4 className="text-xl font-semibold mb-4">Hubungi Saya</h4>
        <p className="mb-6">Ingin berkolaborasi dalam proyek IoT atau teknologi lainnya? Yuk diskusi!</p>
        <div className="flex flex-wrap justify-center gap-4 text-white mb-6">
          {['LinkedIn', 'GitHub', 'Email', 'WhatsApp'].map((platform, i) => (
            <a key={i} href="#" className="hover:text-pink-200">{platform}</a>
          ))}
        </div>
        <p className="text-sm">&copy; 2025 IOTSpace. All rights reserved.</p>
      </footer>
    </div>
  );
}
