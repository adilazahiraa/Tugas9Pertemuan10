Gambar Tampilan Awal
Komponen ini merupakan halaman login sederhana yang dibangun menggunakan **Ionic Vue** untuk aplikasi berbasis mobile. Halaman ini menampilkan judul "Praktikum Pemrograman Mobile" di bagian atas dan sebuah tombol untuk login menggunakan akun Google. Tombol tersebut menggunakan komponen `<ion-button>` dari Ionic dengan ikon Google di sebelah kiri, yang diambil dari pustaka ikon Ionic (`ionicons/icons`). Ketika tombol diklik, fungsi `login` dipanggil, yang terhubung dengan metode `loginWithGoogle` dari store autentikasi (menggunakan Pinia). Metode ini memanfaatkan Firebase Authentication dan Capacitor Google Auth untuk mengautentikasi pengguna.
Dari sisi desain, elemen-elemen di dalam halaman diatur menggunakan CSS Flexbox, sehingga semuanya tersusun secara vertikal di tengah halaman dengan tata letak yang rapi. Tombol login juga diberikan sudut membulat menggunakan properti `--border-radius` untuk memberikan tampilan modern. Store autentikasi yang digunakan dalam komponen ini didefinisikan secara terpisah, bertanggung jawab untuk menangani proses login, logout, serta penyimpanan status pengguna. Setelah pengguna berhasil login, mereka akan diarahkan ke halaman utama aplikasi (`/home`). Halaman ini dirancang untuk mempermudah pengguna dalam melakukan autentikasi secara visual dan fungsional dengan integrasi Google.

Gambar Login
Proses login pada komponen ini dilakukan melalui integrasi Firebase Authentication dengan Google Sign-In menggunakan library Capacitor Google Auth. Berikut adalah penjelasan langkah-langkah proses login yang terjadi:
1. Klik Tombol Login
Pengguna mengklik tombol "Sign In with Google" yang ada di halaman. Tombol ini memiliki event handler @click="login", yang memanggil fungsi login.
2. Memanggil Fungsi Login di Store
Fungsi login memanggil metode loginWithGoogle yang didefinisikan di dalam store Pinia (authStore). Store ini bertugas menangani seluruh logika autentikasi aplikasi.
3. Inisialisasi Google Auth
Di dalam metode loginWithGoogle, library Capacitor Google Auth diinisialisasi terlebih dahulu menggunakan GoogleAuth.initialize. Konfigurasi ini mencakup clientId (ID klien aplikasi yang diberikan oleh Firebase), serta pengaturan izin (scopes) seperti akses ke profil dan email pengguna.
4. Login dengan Google
Setelah inisialisasi, metode GoogleAuth.signIn memunculkan antarmuka login Google kepada pengguna. Pengguna kemudian memasukkan kredensial akun Google mereka (email dan password). Jika berhasil, Google Auth mengembalikan data pengguna, termasuk token autentikasi (idToken).
5. Verifikasi dengan Firebase
Token autentikasi yang diterima dari Google (idToken) digunakan untuk membuat kredensial Firebase melalui GoogleAuthProvider.credential(idToken). Kredensial ini kemudian dikirim ke Firebase Authentication menggunakan metode signInWithCredential, yang memverifikasi token tersebut dan mendaftarkan atau masuk ke akun pengguna di Firebase.
6. Menyimpan Informasi Pengguna
Setelah berhasil login, Firebase mengembalikan data pengguna (result.user), yang kemudian disimpan dalam state user di store. State ini memastikan aplikasi mengetahui bahwa pengguna telah terautentikasi.
7. Navigasi ke Halaman Utama
Setelah data pengguna tersimpan, aplikasi secara otomatis mengarahkan pengguna ke halaman utama (/home) menggunakan metode router.push("/home").

Gambar SudahLogin
Komponen ini adalah halaman beranda sederhana menggunakan **Ionic Vue**, yang terdiri dari struktur dasar aplikasi Ionic. Halaman ini menggunakan `<ion-page>` sebagai wrapper utama, dengan header yang berisi toolbar dan judul "Home". Header bersifat transparan (`:translucent="true"`), memberikan efek semi-transparan pada bagian atas halaman. Bagian konten utama diatur dengan `<ion-content>` yang menggunakan atribut `:fullscreen="true"` agar memenuhi seluruh tinggi layar. Di dalamnya, terdapat komponen tambahan `TabsMenu`, yang kemungkinan digunakan untuk menampilkan navigasi tab di bagian bawah halaman. Struktur ini menciptakan layout dasar yang rapi dan fleksibel untuk aplikasi mobile.

Gambar Profile
Halaman ini adalah tampilan profil pengguna dalam aplikasi Ionic yang mencakup beberapa elemen UI. Di bagian atas, terdapat header dengan judul "Profile" dan tombol logout di sudut kanan atas. Ketika tombol logout diklik, fungsi `logout` dari store otentikasi akan dipanggil untuk keluar dari sesi pengguna. Di bawah header, ada tampilan avatar pengguna yang diambil dari `userPhoto` yang diset dari foto profil pengguna. Jika terjadi kesalahan saat memuat gambar, fungsi `handleImageError` akan mengganti foto dengan gambar default. Kemudian, ada daftar input yang menampilkan data profil pengguna, seperti nama dan email, yang diambil dari objek `user`. Semua input ini bersifat readonly untuk mencegah perubahan langsung. Di bagian bawah halaman, komponen `TabsMenu` digunakan untuk menampilkan menu tab navigasi. Halaman ini memberikan tampilan yang bersih dan terstruktur untuk informasi profil pengguna.
