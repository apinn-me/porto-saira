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
          <Link href="/service" className="hover:text-pink-100">Service</Link>
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
            <Link href="/service" className="py-2 hover:text-pink-100" onClick={() => setMenuOpen(false)}>Service</Link>
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
          <h3 className="text-4xl font-bold mb-4">Tentang Saya</h3>
          <p className="mb-6 text-base sm:text-lg">
            Saya adalah seorang pengembang Internet of Things (IoT) yang antusias menciptakan solusi pintar untuk kehidupan sehari-hari. Berbekal pengalaman dalam mikrokontroler seperti ESP32 dan sensor-sensor digital, saya merancang sistem otomatisasi yang efisien dan terkoneksi dengan cloud.
          </p>
          <a href="/cv.pdf" download className="inline-block bg-white text-pink-500 font-bold px-6 py-3 rounded-full shadow hover:bg-pink-200 transition">
            Download CV
          </a>
        </div>
      </section>

      {/* My Work Section */}
      <section data-aos="fade-up" className="px-4 sm:px-6 lg:px-24 py-16 text-center bg-white text-gray-900 rounded-t-3xl shadow-inner">
        <h3 className="text-4xl font-bold mb-2">IoT Projects</h3>
        <p className="mb-10 text-gray-600">Berikut beberapa proyek IoT yang telah saya kembangkan.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Smart Plant Watering",
              desc: "Sistem penyiram tanaman otomatis berbasis kelembaban tanah menggunakan ESP32 dan pompa.",
            },
            {
              title: "IoT Air Quality Monitor",
              desc: "Alat pemantau kualitas udara (CO2, PM2.5) dengan notifikasi real-time ke dashboard.",
            },
            {
              title: "RFID Door Lock System",
              desc: "Sistem pengaman pintu berbasis kartu RFID yang terintegrasi dengan ESP32.",
            },
            {
              title: "Smart Energy Meter",
              desc: "Pengukur energi listrik rumah tangga dengan sensor arus non-invasif dan tampilan via web.",
            },
            {
              title: "Remote Temp Control",
              desc: "Pengontrol suhu ruangan menggunakan sensor DHT22 dan fan otomatis.",
            },
            {
              title: "Firebase Weather Logger",
              desc: "Stasiun cuaca mini yang mengirim data suhu dan kelembaban ke Firebase Realtime DB.",
            }
          ].map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="mb-4 h-32 bg-gradient-to-tr from-pink-100 via-pink-200 to-white rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm italic">[Thumbnail]</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-700 mb-4">{project.desc}</p>
              <div className="flex gap-3 justify-center text-pink-500 text-xl">
                <a href="#" className="hover:text-pink-300">🔗</a>
                <a href="#" className="hover:text-pink-300">📁</a>
              </div>
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
