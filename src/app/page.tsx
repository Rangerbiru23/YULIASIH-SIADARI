'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Leaf, Users, Award, Sprout } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="YULIASIH SIADARI Logo"
                className="h-12 w-auto mr-3"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-green-800">YULIASIH SIADARI</span>
                <span className="text-xs text-green-600">Pertanian Tanaman Musim</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Terms & Conditions</Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-green-600">Privacy Policy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-green-600">Terms & Conditions</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              YULIASIH SIADARI
            </h1>
            <p className="text-xl md:text-2xl text-green-600 mb-8">
              Pertanian Tanaman Musim Lainnya YTDL
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Mitra terpercaya dalam bidang pertanian tanaman musim. Kami menyediakan produk pertanian berkualitas tinggi dengan metode pertanian modern dan berkelanjutan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-lg">
                Hubungi Kami
              </button>
              <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors shadow-lg">
                Tentang Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Tentang Kami</h2>
              <p className="text-gray-700 mb-6">
                YULIASIH SIADARI adalah perusahaan pertanian yang berdedikasi untuk menghasilkan produk tanaman musim berkualitas tinggi. Dengan pengalaman bertahun-tahun di bidang pertanian, kami berkomitmen untuk menyediakan produk terbaik bagi konsumen.
              </p>
              <p className="text-gray-700 mb-6">
                Kami menggunakan metode pertanian modern yang ramah lingkungan dan berkelanjutan, memastikan setiap produk yang kami hasilkan memenuhi standar kualitas tertinggi.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-green-600 mr-3" size={20} />
                  <span className="text-gray-700">JL DWIKORA NO 156, Sukamulya, Sail, Pekanbaru</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-green-600 mr-3" size={20} />
                  <span className="text-gray-700">085285703582</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-green-600 mr-3" size={20} />
                  <span className="text-gray-700">info@yuliasihsiadari.com</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/hero-farm.jpg"
                alt="Pertanian YULIASIH SIADARI"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Mengapa Memilih Kami</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Kami menawarkan keunggulan dalam setiap aspek pertanian untuk memberikan nilai terbaik bagi pelanggan
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Pertanian Berkelanjutan</h3>
              <p className="text-gray-700">
                Kami menggunakan metode pertanian yang ramah lingkungan dan berkelanjutan untuk menjaga keseimbangan ekosistem.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Kualitas Terjamin</h3>
              <p className="text-gray-700">
                Setiap produk melalui proses quality control ketat untuk memastikan kualitas terbaik reach konsumen.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Pelayanan Terpercaya</h3>
              <p className="text-gray-700">
                Tim profesional kami siap memberikan pelayanan terbaik dan solusi untuk kebutuhan pertanian Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Layanan Kami</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Komprehensif solusi pertanian untuk mendukung kesuksesan bisnis pertanian Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <Sprout className="text-green-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-green-800 mb-2">Budidaya Tanaman</h3>
              <p className="text-gray-700 text-sm">
                Budidaya tanaman musim dengan teknologi modern
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
              <Leaf className="text-amber-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-green-800 mb-2">Konsultasi Pertanian</h3>
              <p className="text-gray-700 text-sm">
                Ahli pertanian siap memberikan konsultasi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <Award className="text-green-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-green-800 mb-2">Produk Berkualitas</h3>
              <p className="text-gray-700 text-sm">
                Produk pertanian premium dan segar
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
              <Users className="text-amber-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-green-800 mb-2">Kemitraan</h3>
              <p className="text-gray-700 text-sm">
                Program kemitraan pertanian yang menguntungkan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Galeri Pertanian Kami</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Lihat keindahan dan kemajuan pertanian kami yang menggabungkan tradisi dengan teknologi modern
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/hero-farm.jpg"
                alt="Lahan Pertanian Hijau"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Lahan Pertanian Hijau</h3>
                  <p className="text-sm">Lahan subur untuk tanaman musim berkualitas</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/farming-tech.jpg"
                alt="Teknologi Pertanian Modern"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Teknologi Pertanian Modern</h3>
                  <p className="text-sm">Greenhouse dan metode pertanian berkelanjutan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Memulai Kerjasama Pertanian?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Hubungi kami hari ini untuk konsultasi gratis dan temukan solusi pertanian terbaik untuk kebutuhan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg font-semibold">
              <Phone className="inline mr-2" size={20} />
              085285703582
            </button>
            <button className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors shadow-lg font-semibold">
              <Mail className="inline mr-2" size={20} />
              Kirim Email
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src="/logo.png"
                  alt="YULIASIH SIADARI Logo"
                  className="h-10 w-auto mr-3"
                />
                <div>
                  <h3 className="text-xl font-bold">YULIASIH SIADARI</h3>
                  <p className="text-green-400 text-sm">Pertanian Tanaman Musim</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Perusahaan pertanian terpercaya yang berdedikasi untuk menyediakan produk tanaman musim berkualitas tinggi dengan metode pertanian modern dan berkelanjutan.
              </p>
              <div className="flex space-x-4">
                <Facebook className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                <Instagram className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                <Twitter className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white">Beranda</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-1" size={16} />
                  <span>JL DWIKORA NO 156, Sukamulya, Sail, Pekanbaru, Riau</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  <span>085285703582</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  <span>info@yuliasihsiadari.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 YULIASIH SIADARI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}