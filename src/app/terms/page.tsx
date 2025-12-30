'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowLeft, FileText, AlertCircle, CheckCircle, Gavel } from 'lucide-react'

export default function Terms() {
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
              <Link href="/terms" className="text-green-600 font-semibold">Terms & Conditions</Link>
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
              <Link href="/terms" className="block px-3 py-2 text-green-600 font-semibold">Terms & Conditions</Link>
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
            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-amber-600" size={40} />
            </div>
            <h1 className="text-4xl font-bold text-green-800 mb-4">Terms & Conditions</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan penggunaan layanan YULIASIH SIADARI untuk pertanian tanaman musim.
            </p>
            <p className="text-sm text-gray-500 mt-4">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Terms Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Pendahuluan</h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di YULIASIH SIADARI. Syarat dan ketentuan ini mengatur penggunaan website dan layanan pertanian yang kami sediakan. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
            </div>

            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Informasi Perusahaan</h2>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold text-gray-800">Nama Perusahaan:</span>
                    <p className="text-gray-700">YULIASIH SIADARI</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Bidang Usaha:</span>
                    <p className="text-gray-700">Pertanian Tanaman Musim Lainnya YTDL</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Alamat:</span>
                    <p className="text-gray-700">JL DWIKORA NO 156, Sukamulya, Sail, Pekanbaru, Riau</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Kontak:</span>
                    <p className="text-gray-700">085285703582</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Layanan Kami</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Budidaya Tanaman Musim</h3>
                    <p className="text-gray-700">
                      Kami menyediakan layanan budidaya tanaman musim dengan metode pertanian modern dan berkelanjutan.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Konsultasi Pertanian</h3>
                    <p className="text-gray-700">
                      Layanan konsultasi untuk membantu petani dalam meningkatkan hasil panen dan kualitas produk.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Penjualan Produk Pertanian</h3>
                    <p className="text-gray-700">
                      Penyediaan produk pertanian berkualitas tinggi kepada konsumen dan mitra bisnis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Kewajiban Pengguna</h2>
              <p className="text-gray-700 mb-4">
                Sebagai pengguna layanan kami, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Menjaga kerahasiaan informasi akun dan kredensial</li>
                <li>Tidak menggunakan layanan untuk kegiatan ilegal atau melawan hukum</li>
                <li>Mematuhi semua peraturan dan ketentuan yang berlaku</li>
                <li>Tidak merusak atau mengganggu sistem kami</li>
                <li> Menghormati hak kekayaan intelektual kami</li>
                <li>Memberikan informasi yang benar tentang kebutuhan pertanian Anda</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Syarat Pembayaran</h2>
              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <AlertCircle className="text-amber-600 mr-2" size={20} />
                    Metode Pembayaran
                  </h3>
                  <p className="text-gray-700">
                    Kami menerima pembayaran melalui transfer bank, tunai, atau metode lain yang disepakati bersama.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-gray-800 mb-2">Jadwal Pembayaran</h3>
                  <p className="text-gray-700">
                    Pembayaran harus dilakukan sesuai dengan kesepakatan yang tertulis dalam kontrak atau perjanjian kerjasama.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-gray-800 mb-2">Kebijakan Pengembalian</h3>
                  <p className="text-gray-700">
                    Pengembalian produk akan diproses sesuai dengan kebijakan yang berlaku dan kondisi produk.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Quality */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Kualitas Produk</h2>
              <p className="text-gray-700 mb-4">
                Kami berkomitmen untuk menyediakan produk pertanian berkualitas tinggi:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Semua produk melalui proses quality control ketat</li>
                <li>Produk segar dan memenuhi standar kualitas</li>
                <li>Pengemasan yang aman dan higienis</li>
                <li>Informasi lengkap tentang produk dan asal usulnya</li>
                <li>Garansi kualitas sesuai dengan kesepakatan</li>
              </ul>
            </div>

            {/* Delivery and Shipping */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Pengiriman dan Logistik</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-700">Area Pengiriman</span>
                  <span className="text-green-600 text-sm">Pekanbaru dan sekitarnya</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-700">Waktu Pengiriman</span>
                  <span className="text-amber-600 text-sm">1-3 hari kerja</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-700">Biaya Pengiriman</span>
                  <span className="text-blue-600 text-sm">Disesuaikan jarak</span>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Hak Kekayaan Intelektual</h2>
              <p className="text-gray-700 mb-4">
                Semua konten, materi, dan hak kekayaan intelektual dalam website ini adalah milik YULIASIH SIADARI:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Logo, merek, dan nama perusahaan dilindungi hukum</li>
                <li>Konten website tidak boleh disalin tanpa izin tertulis</li>
                <li>Produk dan metode pertanian kami adalah hak milik intelektual</li>
                <li>Pelanggaran akan ditindak sesuai hukum yang berlaku</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Batasan Tanggung Jawab</h2>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex items-start">
                  <Gavel className="text-red-600 mr-3 mt-1" size={20} />
                  <div>
                    <p className="text-gray-700 mb-2">
                      YULIASIH SIADARI tidak bertanggung jawab atas:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Kerugian tidak langsung atau konsekuensial</li>
                      <li>Keterlambatan pengiriman karena force majeure</li>
                      <li>Kerusakan produk setelah diterima pelanggan</li>
                      <li>Penggunaan produk yang tidak sesuai petunjuk</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Pemutusan Layanan</h2>
              <p className="text-gray-700 mb-4">
                Kami berhak menghentikan atau menangguhkan layanan jika:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pengguna melanggar syarat dan ketentuan</li>
                <li>Terdapat aktivitas mencurigakan atau penipuan</li>
                <li>Pengguna menggunakan layanan untuk kegiatan ilegal</li>
                <li>Adanya keadaan force majeure yang memaksa penghentian</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Penyelesaian Sengketa</h2>
              <p className="text-gray-700 mb-4">
                Sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">1</span>
                  <span className="text-gray-700">Musyawarah dan mufakat secara kekeluargaan</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">2</span>
                  <span className="text-gray-700">Mediasi dengan pihak ketiga netral</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">3</span>
                  <span className="text-gray-700">Penyelesaian melalui pengadilan di Pekanbaru</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Hubungi Kami</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800 mr-3">Perusahaan:</span>
                    <span className="text-gray-700">YULIASIH SIADARI</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800 mr-3">Email:</span>
                    <span className="text-gray-700">legal@yuliasihsiadari.com</span>
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

            {/* Agreement */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Persetujuan</h2>
              <p className="text-gray-700">
                Dengan menggunakan website dan layanan YULIASIH SIADARI, Anda menyatakan bahwa telah membaca, memahami, dan setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian manapun dari syarat dan ketentuan ini, harap tidak menggunakan layanan kami.
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