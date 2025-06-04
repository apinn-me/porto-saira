'use client';

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import Image from 'next/image';
    import {
  Monitor,
  ShoppingCart,
  Smartphone,
  Search,
  Megaphone,
  Palette,
} from "lucide-react";

export default function Home() {
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

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="hover:text-pink-100">Home</Link>
          <Link href="/about" className="hover:text-pink-100">About</Link>
          <Link href="/service" className="hover:text-pink-100">Service</Link>
          <Link href="/portfolio" className="hover:text-pink-100">Portfolio</Link>
        </nav>

        {/* Contact Button */}
        <a href="#" className="hidden sm:inline-block bg-white text-pink-500 px-4 py-2 rounded-full shadow hover:bg-pink-200 transition font-semibold">
          Contact
        </a>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-3xl ml-4 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
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

      {/* Hero Section */}
      <section data-aos="fade-up" className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-24 py-12 lg:py-20">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Saira<br />
            Salsabilah<br />
            <span className="text-white">Photography &amp; Designer</span>
          </h2>
          <p className="mb-6 text-base sm:text-lg">
            Berbekal rasa ingin tahu yang tinggi dan semangat untuk berinovasi, saya selalu berusaha untuk melihat melampaui batasan dan menemukan cara-cara baru untuk meningkatkan atau menciptakan sesuatu yang lebih baik.
          </p>
          <a href="#" className="inline-block bg-gradient-to-r from-pink-300 to-pink-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300">
            Hire Me Now
          </a>
        </div>
        <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0 relative">
          <div className="w-[300px] h-[400px] rounded-3xl relative overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-md shadow-xl">
            <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-green-300 opacity-30 filter blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-yellow-300 opacity-20 filter blur-4xl"></div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-pink-300 opacity-25 filter blur-2xl"></div>
            <Image
              src="/image/2.png"
              alt="About Me"
              width={300}
              height={400}
              className="w-full h-full object-cover rounded-3xl"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
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
          <h3 className="text-3xl font-bold mb-4">Bit About Me</h3>
          <p className="mb-6 text-base sm:text-lg">
            Saya adalah seorang fotografer dan desainer grafis dengan minat besar pada dunia kreatif. Saya senang menciptakan desain yang menarik dan berfungsi dengan baik.
          </p>
          <a href="#" className="inline-block bg-white text-pink-500 font-bold px-6 py-3 rounded-full shadow hover:bg-pink-200 transition">
            Download CV
          </a>
        </div>
      </section>


{/* Services Section */}
<section data-aos="fade-up" className="bg-pink-200 py-16 px-4 sm:px-6 lg:px-24 text-center">
  <h3 className="text-3xl font-bold mb-10 text-gray-800">My Best Services</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        icon: <Monitor size={40} className="text-pink-600 mb-4 mx-auto" />,
        title: "Website Design",
        desc: "Mendesain website yang estetis dan responsif untuk pengalaman pengguna yang optimal.",
      },
      {
        icon: <ShoppingCart size={40} className="text-pink-600 mb-4 mx-auto" />,
        title: "Ecommerce Solutions",
        desc: "Membangun platform jual beli online lengkap dengan sistem checkout dan payment gateway.",
      },
      {
        icon: <Smartphone size={40} className="text-pink-600 mb-4 mx-auto" />,
        title: "Mobile Development",
        desc: "Pengembangan aplikasi Android dan iOS yang ringan, cepat, dan mudah digunakan.",
      },
      {
        icon: <Search size={40} className="text-pink-600 mb-4 mx-auto" />,
        title: "SEO Optimization",
        desc: "Meningkatkan peringkat website di mesin pencari dengan teknik SEO terbaru.",
      },
      {
        icon: <Megaphone size={40} className="text-pink-600 mb-4 mx-auto" />,
        title: "Digital Marketing",
        desc: "Strategi pemasaran digital yang efektif untuk menjangkau audiens secara luas.",
      },
      {
        icon: <Palette size={40} className="text-pink-600 mb-4 mx-auto" />,
        title: "UI/UX Design",
        desc: "Menciptakan desain antarmuka dan pengalaman pengguna yang menarik dan intuitif.",
      },
    ].map((service, index) => (
      <div
        key={index}
        className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 hover:bg-opacity-30"
      >
        {service.icon}
        <h4 className="text-xl font-semibold mb-2 text-gray-700">{service.title}</h4>
        <p className="text-sm text-gray-700">{service.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* Portfolio Section */}
      <section data-aos="fade-up" className="py-16 px-4 sm:px-6 lg:px-24 text-center">
        <h3 className="text-3xl font-bold mb-10">My Portfolio</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform">
              <div className="relative w-full h-48">
                <Image
                  src={`/portfolio${item}.jpg`}
                  alt={`Portfolio ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">Project Title {item}</h4>
                <p className="text-sm">Deskripsi singkat tentang proyek ini dan hasil yang dicapai.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section data-aos="fade-up" className="bg-white py-16 px-4 sm:px-6 lg:px-24 text-center text-gray-800">
        <h3 className="text-3xl font-bold mb-10">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="p-6 bg-pink-50 rounded-xl shadow-md">
              <p className="italic mb-4">&ldquo;Saira memberikan hasil luar biasa! Desainnya profesional dan sesuai keinginan.&rdquo;</p>
              <h4 className="font-semibold">Client {i}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-pink-500 py-12 px-4 sm:px-6 lg:px-24 text-center">
        <h4 className="text-xl font-semibold mb-4">Let&rsquo;s Talk With Me!</h4>
        <p className="mb-6">Saya tersedia untuk bekerja freelance, project kolaborasi, atau pertanyaan seputar desain.</p>
        <div className="flex flex-wrap justify-center gap-4 text-white mb-6">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">Facebook</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">Instagram</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">LinkedIn</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">GitHub</a>
        </div>
        <p className="text-sm">Copyright &copy; 2025 Saira Design Identity. All rights reserved.</p>
      </footer>

    </div>
  );
}
