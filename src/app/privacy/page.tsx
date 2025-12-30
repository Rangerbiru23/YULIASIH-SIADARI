'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'

export default function Privacy() {
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
              <Link href="/privacy" className="text-green-600 font-semibold">Privacy Policy</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-green-600 font-semibold">Privacy Policy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-green-600">Terms & Conditions</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center mb-8 text-sm">
            <Link href="/" className="text-green-600 hover:text-green-700 flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Kembali ke Beranda
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-green-600" size={40} />
            </div>
            <h1 className="text-4xl font-bold text-green-800 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kebijakan privasi YULIASIH SIADARI menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
            </p>
            <p className="text-sm text-gray-500 mt-4">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Privacy Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Pendahuluan</h2>
              <p className="text-gray-700 leading-relaxed">
                Di YULIASIH SIADARI, kami sangat memprioritaskan privasi dan keamanan data pribadi Anda. Kebijakan privasi ini menjelaskan praktik kami mengenai pengumpulan, penggunaan, dan perlindungan informasi ketika Anda menggunakan website kami atau berinteraksi dengan layanan pertanian kami.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Informasi yang Kami Kumpulkan</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Eye className="text-green-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Informasi Pribadi</h3>
                    <p className="text-gray-700">
                      Nama, alamat email, nomor telepon, alamat fisik, dan informasi kontak lainnya yang Anda berikan secara sukarela.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Database className="text-green-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Informasi Penggunaan Website</h3>
                    <p className="text-gray-700">
                      Data tentang bagaimana Anda mengakses dan menggunakan website kami, termasuk alamat IP, browser, dan waktu akses.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Lock className="text-green-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Informasi Bisnis</h3>
                    <p className="text-gray-700">
                      Informasi terkait kebutuhan pertanian Anda, riwayat pembelian, dan preferensi produk.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Bagaimana Kami Menggunakan Informasi</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Menyediakan layanan pertanian dan produk yang Anda minta</li>
                <li>Merespons pertanyaan dan permintaan informasi Anda</li>
                <li>Mengirimkan informasi tentang produk dan layanan kami</li>
                <li>Meningkatkan kualitas layanan dan website kami</li>
                <li>Memproses transaksi dan pengiriman produk</li>
                <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Perlindungan Data</h2>
              <p className="text-gray-700 mb-4">
                Kami menerapkan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:
              </p>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Enkripsi data saat transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>System monitoring keamanan 24/7</li>
                  <li>Update keamanan rutin pada sistem kami</li>
                  <li>Pelatihan staf tentang perlindungan data</li>
                </ul>
              </div>
            </div>

            {/* Third Party Sharing */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Berbagi dengan Pihak Ketiga</h2>
              <p className="text-gray-700 mb-4">
                Kami tidak menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga. Kami hanya akan berbagi informasi dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Untuk memenuhi layanan yang Anda minta (misal: pengiriman)</li>
                <li>Untuk mematuhi hukum atau perintah pengadilan</li>
                <li>Dengan mitra tepercaya yang telah menandatangani perjanjian kerahasiaan</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Cookies dan Teknologi Pelacakan</h2>
              <p className="text-gray-700 mb-4">
                Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna:
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-700">Cookies Esensial</span>
                  <span className="text-green-600 text-sm">Selalu Aktif</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-700">Cookies Analytics</span>
                  <span className="text-amber-600 text-sm">Opsional</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-700">Cookies Marketing</span>
                  <span className="text-amber-600 text-sm">Opsional</span>
                </div>
              </div>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Hak Anda sebagai Pengguna</h2>
              <p className="text-gray-700 mb-4">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Mengajukan keluhan tentang penanganan data kami</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Hubungi Kami</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin menggunakan hak Anda, silakan hubungi kami:
              </p>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800 mr-3">Perusahaan:</span>
                    <span className="text-gray-700">YULIASIH SIADARI</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800 mr-3">Email:</span>
                    <span className="text-gray-700">privacy@yuliasihsiadari.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800 mr-3">Telepon:</span>
                    <span className="text-gray-700">085285703582</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-gray-800 mr-3">Alamat:</span>
                    <span className="text-gray-700">JL DWIKORA NO 156, Desa/Kelurahan Sukamulya, Kec. Sail, Kota Pekanbaru, Provinsi Riau</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Pembaruan Kebijakan</h2>
              <p className="text-gray-700">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website kami atau email. Penggunaan terus menerus website kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
              </p>
            </div>
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
                <li>JL DWIKORA NO 156, Sukamulya, Sail, Pekanbaru, Riau</li>
                <li>085285703582</li>
                <li>info@yuliasihsiadari.com</li>
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