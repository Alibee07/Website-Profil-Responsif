// ===== Tombol Ubah Teks =====
const deskripsi = document.querySelector('#deskripsi');
const tombolTeks = document.querySelector('#btn-teks');

const teksAwal = 'Halo! Saya mahasiswa yang sedang belajar pemrograman web. Saya senang membuat tampilan website yang rapi dan nyaman dilihat.';
const teksBaru = 'Selamat datang di halaman profil saya! Saya suka belajar hal baru, bekerja sama dalam tim, dan terus mengembangkan keterampilan di bidang teknologi.';

tombolTeks.addEventListener('click', function () {
  // Jika teks sekarang adalah teks awal, ganti ke teks baru, dan sebaliknya
  if (deskripsi.textContent.trim() === teksAwal) {
    deskripsi.textContent = teksBaru;
  } else {
    deskripsi.textContent = teksAwal;
  }
});

// ===== Tombol Ganti Tema =====
const tombolTema = document.querySelector('#btn-tema');

tombolTema.addEventListener('click', function () {
  // Tambah/hapus class "dark" pada body
  document.body.classList.toggle('dark');
});
