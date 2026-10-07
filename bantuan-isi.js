window.OCTO_BANTUAN = {
  app: 'GTwin',
  intro: 'Urutan kerja: buka model IFC gedung, tempatkan sensor di model, pantau lewat "Dasbor", catat inspeksi dan kerusakan, lalu simpan paket data aset (AIM).',
  langkah: [
    ['Pahami mode data', 'Lihat label di pojok kanan atas. "Data tim tersinkron" berarti data dibagikan ke anggota tim; "Mode lokal – tidak tersimpan" berarti perubahan hilang saat halaman ditutup.'],
    ['Buka model IFC', 'Aplikasi memuat model contoh (Graha_Satria_AsBuilt.ifc) lebih dulu. Untuk model sendiri, klik "Buka IFC" di tab "Model 3D" lalu pilih file berekstensi .ifc dari perangkat Anda.'],
    ['Jelajahi model', 'Putar, geser, dan zoom dengan mouse atau sentuh. Klik elemen untuk melihat datanya di panel kanan, atau cari lewat kolom "Cari nama, tag, atau GlobalId" di "Struktur model". Klik dua kali untuk fokus ke elemen terpilih.'],
    ['Atur tampilan', 'Pilih lantai di menu "Semua lantai", lalu nyalakan "Ruang", "Sensor", atau "X-ray" sesuai kebutuhan. Tombol ikon bingkai menampilkan seluruh model.'],
    ['Tempatkan sensor', 'Klik "Tempatkan sensor", lalu klik permukaan model. Isi nama, jenis, sumber data, dan batas normal di formulir, lalu "Simpan sensor". Tombol ini hanya muncul untuk peran Admin dan Manajer FM.'],
    ['Pantau di dasbor', 'Buka tab "Dasbor" untuk melihat sensor aktif, suhu, energi, kepatuhan inspeksi, dan tiket terbuka. Tab "Sensor IoT" menampilkan daftar semua sensor beserta statusnya.'],
    ['Laporkan kerusakan atau inspeksi', 'Pilih elemen, klik "Laporkan kerusakan" atau "Inspeksi sekarang", isi formulir, lalu kirim. Untuk sensor yang bermasalah, klik "Buat tiket" di detail sensor.'],
    ['Jadwalkan inspeksi rutin', 'Di tab "Inspeksi", klik "Jadwal rutin baru", tentukan elemen atau kelas aset, frekuensi, dan daftar periksa. Mulai pemeriksaan dengan tombol "Mulai" saat jatuh tempo.'],
    ['Daftarkan anggota tim', 'Admin mendaftarkan email dan peran di tab "Anggota". Anggota yang diundang membuka halaman, mengirim email terdaftarnya, lalu Admin menekan "Setujui".'],
    ['Simpan data aset (AIM)', 'Di tab "Data AIM", unduh paket lewat "Unduh paket AIM (.zip)" atau "Hanya aim.json", atau kirim ke Google Drive dengan "Sinkronkan ke Google Drive".']
  ],
  panduan: [
    ['Model 3D', [
      ['Buka IFC', 'Membuka file .ifc dari perangkat. Model ini hanya terlihat di perangkat Anda sampai dijadikan model tim.'],
      ['Jadikan model tim', 'Muncul setelah Anda membuka IFC sendiri (untuk Admin/Manajer FM). Menyimpan model sebagai model yang dilihat semua anggota; batas ukuran 20 MB.'],
      ['Struktur model', 'Pohon elemen per lantai dan kelas. Ketik di kolom pencarian untuk mencari nama, tag, atau GlobalId (maksimal 150 hasil).'],
      ['Semua lantai', 'Menyaring tampilan ke satu lantai.'],
      ['Ruang, Sensor, X-ray', 'Ruang menampilkan IfcSpace, Sensor menampilkan atau menyembunyikan node sensor, X-ray membuat model transparan.'],
      ['Tempatkan sensor', 'Mode klik-permukaan untuk menaruh node sensor baru. Tekan Esc untuk batal.'],
      ['Panel kanan (inspektur)', 'Menampilkan GlobalId, tag, lantai, ruang, kondisi terakhir, tiket terbuka, sensor terpasang, riwayat inspeksi, dan set properti (Pset). Tombol "Fokus" mengarahkan kamera ke elemen.']
    ]],
    ['Dasbor', [
      ['Kartu ringkasan', 'Sensor aktif, suhu dan kelembaban rata-rata, energi hari ini (kWh), kepatuhan inspeksi rutin, tiket insidental terbuka, waktu penyelesaian rata-rata, dan indeks kondisi aset.'],
      ['Grafik', 'Suhu ruang dan beban listrik 24 jam, jumlah inspeksi 8 minggu terakhir, dan tiket terbuka per kategori.'],
      ['Peringatan sensor', 'Daftar sensor yang tidak normal. Klik baris untuk membuka detailnya di model.'],
      ['Jadwal inspeksi terdekat', 'Jadwal rutin yang akan jatuh tempo, lengkap dengan tombol "Mulai". Nilai sensor diperbarui otomatis tiap 5 detik.']
    ]],
    ['Sensor IoT', [
      ['Tambah sensor', 'Membuka formulir sensor (nama, jenis, sumber data, batas bawah/atas, elemen IFC, posisi X/Y/Z). Tersedia untuk Admin dan Manajer FM.'],
      ['Jenis sensor', 'Suhu, kelembaban, CO₂, daya listrik, aliran air, okupansi, getaran, detektor asap, dan kamera CCTV.'],
      ['Sumber data', '"Simulasi (demo)", "Data impor / gateway", atau "Input manual". Aplikasi tidak terhubung langsung ke perangkat lewat MQTT atau HTTP.'],
      ['Catat pembacaan', 'Untuk sensor "Input manual": isi nilai lalu klik "Catat pembacaan".'],
      ['Unggah CSV', 'Untuk sensor "Data impor / gateway": unggah CSV berkolom waktu,nilai (ISO 8601 atau epoch ms).'],
      ['Buat tiket', 'Muncul saat sensor tidak normal; membuat laporan insidental terisi otomatis dari data sensor.'],
      ['Lihat di model, Ubah', 'Lihat di model memindahkan kamera ke posisi sensor; Ubah membuka formulir sensor (Hapus ada di dalamnya).'],
      ['Kamera CCTV', 'Isi "URL stream / web viewer kamera" (harus diawali http:// atau https://), lalu buka lewat "Buka stream kamera".']
    ]],
    ['Inspeksi', [
      ['Laporan & tiket', 'Daftar inspeksi dengan filter "Aktif", "Insidental", "Rutin", "Selesai", dan "Semua". Klik baris untuk membuka dan mengubahnya.'],
      ['Laporkan kerusakan', 'Isi judul, elemen IFC, kategori, prioritas, tenggat, petugas, deskripsi, dan foto (bila tersedia), lalu "Kirim laporan".'],
      ['Daftar periksa', 'Tandai tiap butir "Baik", "Temuan", atau "N/A" pada inspeksi rutin.'],
      ['Penilaian kondisi', 'Skala 1 (sangat baik) sampai 5 (sangat buruk). Inspeksi pada suatu elemen wajib dinilai sebelum "Simpan & selesaikan".'],
      ['Jadwal rutin', 'Tab "Jadwal rutin" menyimpan jadwal harian sampai tahunan. Setelah inspeksi selesai, jatuh tempo berikutnya dihitung otomatis.'],
      ['Foto', 'Unggah foto di formulir bila fitur penyimpanan tersedia di tampilan Anda.']
    ]],
    ['Anggota dan peran', [
      ['Peran', 'Admin (mengelola semua), Manajer FM (sensor, jadwal, model, tutup tiket), Teknisi (inspeksi dan pembacaan manual), Pengamat (hanya melihat).'],
      ['Daftarkan anggota', 'Khusus Admin: isi email, peran, dan nama/jabatan, lalu "Daftarkan".'],
      ['Hubungkan akun Anda', 'Anggota mengirim email terdaftarnya; Admin menyetujui atau menolak di "Permintaan verifikasi".'],
      ['Ubah peran / Hapus', 'Admin dapat mengganti peran lewat menu di tabel atau menghapus anggota.'],
      ['Berbagi halaman', 'Halaman dibagikan lewat tombol "Bagikan" di claude.ai; menghapus anggota di sini tidak mencabut akses bagi di claude.ai.']
    ]],
    ['Data AIM dan ekspor', [
      ['Register aset', 'Daftar aset FM dari set properti IFC, bisa dicari dan disaring per kelas. Klik baris untuk melompat ke elemen di model.'],
      ['Kelengkapan data', 'Persentase terisinya pabrikan, model, nomor seri, garansi, dan kode aset.'],
      ['Unduh paket AIM (.zip)', 'Berisi aim.json, CSV register aset, sensor, jadwal, inspeksi, dan file IFC. Tombol nonaktif bila unduhan tidak tersedia di tampilan Anda.'],
      ['Hanya aim.json', 'Mengunduh data terstruktur tanpa CSV dan model.'],
      ['Sinkronkan ke Google Drive', 'Mengunggah paket ke Drive lewat konektor Google Drive di akun claude.ai Anda; ID folder tujuan bersifat opsional. CSV menjadi Google Sheets.'],
      ['OneDrive', 'Tidak ada unggahan otomatis; unduh ZIP lalu unggah manual ke folder OneDrive proyek.']
    ]]
  ],
  pintasan: [
    ['Esc', 'Membatalkan mode "Tempatkan sensor"'],
    ['Klik dua kali pada model', 'Fokus kamera ke elemen yang terpilih']
  ],
  bagian: ['Umum', 'Model 3D', 'Dasbor', 'Sensor IoT', 'Inspeksi', 'Anggota', 'Data AIM (ekspor / Drive)']
};
