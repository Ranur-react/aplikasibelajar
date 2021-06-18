### Tutorial Form Input React-Native to MYSQL dengan PHP Native

1. Buat Database dan Table seperti berikut
    * Create database db_mahasiswa pada mysql
    ![alt text](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

Create table tb_mahassiwa pada database

 
Buat koneksi ke database
Buat API POST received dengan metode :?
Buat Project Baru pada react-native 
Gunakan perintah  berikut untuk membuat Project baru (pastikan dalm keadaan terkoneksi ke internet )

Tunggu proses inisialisasi hingga selesai
Setelah proses selesai masuk kedalam  folder project yang baru saja dibuat dengan perintah berikut

Sehingga tampilan akan seperti berikut pada terminal

Setelah berada di dalam folder project, jalankan perintah berikut untuk menajalankan react-native  
Test koneksi dengan Mobile Perangkat 


Jalankan perintah berikut untuk menjalankan project pada emulator  jika device / emulator sudah dipastikan terdeteksi

Setelah perintah dijalankan tunggu hingga metro server running pada desktop seperti pada gmabar dibawah 

Jika Metro Server sudah jalan , kita sudah pastikan aplikasi berjalan dengan pada perangkat.


Buatlah Form Input Sederhana pada RN
1. Buka file app.js

2. Hapus Semua Script di dalam file tersbut lalu ganti dengan scripts seperti berikut

3. Setelah kodingan ini selesai tampilan pada Emulator akan berubah  seperti berikut

5. Selanjutnya rancang design Form yang sesuai dengan data yang akan kita inputkan pada database.
Buat folder baru dengan nama FormInput pada Projects


Buat file index.js  pada folder yang telah dibuat





Setelah Files index.js berhasil dibuat pada folder, selanjutnya coba tuliskan script berikut pada pada files index.js 




























































































Buat State penampung data yang di inputkan
Buat External funtions dengan props parameter untuk proses SEND data kedalam API MYSQL dengan vanilla JS
Panggil External Functions tersebut kedalam event
