# Website Learning Helper 🎓

Website ini dirancang untuk membantu proses belajar menjadi lebih menyenangkan dan terorganisir. Dengan fitur-fitur seperti pemutar musik, timer belajar (Pomodoro), dan daftar to-do untuk mencatat materi yang perlu dipelajari, Anda dapat meningkatkan produktivitas belajar Anda.

---

## Kode Utama 💻

### Struktur HTML:
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UAS Konsep Bahasa Pemrograman</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="max-w-2xl mx-auto p-5">
        <!-- Header -->
        <header class="text-center mb-8">
            <h1 class="text-4xl font-bold text-gray-700">Website Learning Helper🥶🥶</h1>
            <p class="text-md text-gray-600">Happy Learningg ( ˶ˆᗜˆ˵ )</p>
        </header>

        <!-- Spotify Embed -->
        <section id="spotify-player" class="mb-10">
            <h2 class="section-title text-center">Music Player🎧</h2>
            <div class="bg-white rounded-lg p-6 shadow-lg">
                <iframe src="https://open.spotify.com/embed/playlist/1zpagwyEdJPg5LPrB9O1il?utm_source=generator" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </section>

        <!-- Pomodoro Timer -->
        <section id="pomodoro" class="mb-10">
            <h2 class="section-title text-center">Learning Timer⏱︎</h2>
            <div class="bg-white rounded-lg shadow-lg p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label for="work-time" class="block font-medium text-gray-700">Waktu Belajar (menit):</label>
                        <input type="number" id="work-time" class="border rounded-lg p-2 w-full text-center" value="25">
                    </div>
                    <div>
                        <label for="break-time" class="block font-medium text-gray-700">Waktu Istirahat (menit):</label>
                        <input type="number" id="break-time" class="border rounded-lg p-2 w-full text-center" value="5">
                    </div>
                </div>
                <div class="flex justify-center space-x-4 mt-5">
                    <button id="start-timer" class="btn text-white px-6 py-2 rounded">Mulai</button>
                    <button id="pause-timer" class="btn text-white px-6 py-2 rounded">Jeda</button>
                    <button id="reset-timer" class="btn text-white px-6 py-2 rounded">Reset</button>
                </div>
                <h3 id="timer-display" class="text-4xl font-bold mt-5 text-center text-gray-800">25:00</h3>
            </div>
        </section>

        <!-- To-Do List -->
        <section id="todo-list" class="mb-10">
            <h2 class="section-title text-center">Learning Progress📖</h2>
            <div class="bg-white rounded-lg p-6 shadow-lg">
                <form id="todo-form" class="flex mb-5">
                    <input type="text" id="todo-input" class="border rounded-lg p-2 flex-1 mr-2" placeholder="Tambahkan Materi Yang Mau Dipelajari">
                    <button type="submit" class="btn text-white px-6 py-2 rounded">Tambah</button>
                </form>
                <ul id="todo-items" class="list-disc pl-5 space-y-2">
                    <!-- Item to-do list akan ditambahkan di sini -->
                </ul>
                <div class="mt-5 text-center">
                    <p class="text-sm text-gray-600">Statistik: <span id="stats" class="font-semibold text-gray-800"></span></p>
                </div>
            </div>
        </section>
    </div>

    <footer class="text-center mt-10">
        <p class="text-gray-600 text-sm">&copy; 2024 Jeaxxy. All Rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

---

## Fitur Utama 🚀

1. **Music Player 🎧**
   - Terintegrasi dengan Spotify untuk memutar playlist favorit selama sesi belajar.
   - Memungkinkan pengguna untuk tetap termotivasi dengan musik pilihan.

2. **Pomodoro Timer ⏱︎**
   - Timer belajar yang dapat diatur sesuai kebutuhan:
     - **Waktu Belajar**: Default 25 menit.
     - **Waktu Istirahat**: Default 5 menit.
   - Tombol interaktif:
     - `Mulai` untuk memulai timer.
     - `Jeda` untuk menghentikan sementara.
     - `Reset` untuk mengatur ulang timer.

3. **To-Do List 📖**
   - Menambahkan materi yang ingin dipelajari melalui form input.
   - Fitur statistik untuk melacak kemajuan belajar Anda.

---

## Teknologi yang Digunakan 🛠️

- **HTML5**: Struktur utama halaman web.
- **CSS (Tailwind CSS)**: Digunakan untuk styling cepat dan konsisten.
- **JavaScript**: Untuk fitur interaktif seperti timer dan to-do list.
- **Spotify Embed**: Menyediakan layanan pemutar musik langsung.

---

## Cara Menggunakan 💡

1. **Buka Website**:
   - Pastikan file `index.html` dibuka melalui browser favorit Anda.

2. **Gunakan Music Player**:
   - Scroll ke bagian **Music Player** dan putar playlist Spotify yang tersedia.

3. **Atur Timer**:
   - Masukkan durasi belajar dan istirahat sesuai kebutuhan Anda.
   - Klik tombol `Mulai` untuk memulai sesi belajar.

4. **Kelola To-Do List**:
   - Tambahkan materi yang ingin dipelajari melalui form di bagian **Learning Progress**.
   - Pantau statistik belajar Anda di bagian bawah.

---

## Lisensi 📜

Hak cipta © 2024 Jeaxxy. Semua hak dilindungi. Silakan gunakan proyek ini untuk tujuan belajar dan eksplorasi.

---

Selamat belajar dan tetap semangat! 🎉
