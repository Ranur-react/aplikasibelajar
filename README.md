## Tutorial Form Input React-Native to MYSQL dengan PHP Native


#### A. Mempersiapkan Database 
1. Buat Database dan Table seperti berikut
    * Create database *db_mahasiswa* pada mysql




    ![alt text](https://lh3.googleusercontent.com/_NPpj9VayHKW9c1oBBEomr6wON0pZIfgKbvnMSTnVIAf7vnhp2ItzdzTMh2b85Ifhmb-O5wp0RCFLXoyPcSH-2RJJccE5xLgXl2GDTwSWIXkuVD7k7qMtq97F3emC2SixcKLSkA1)

    * Create table *tb_mahassiwa* pada database

    ![alt text](https://lh5.googleusercontent.com/C37yvyVu2OxDUvB-_jEOgYLq1BvHE9q-T3EkB1xkHvv1QebdUjR6x37EPOsQSp_C7q1axA3Bds88DbizcjSqYIv8-zdwrkr07-YJ-QKQ)
    
    ![alt text](https://lh5.googleusercontent.com/SJvmj6WwKqFz6c5uqxOQAKY2YL_2yYmo4KoyMP6OgvP_jflmxNQg8AjHX9XSQGNmYgB_f7Pvd65swgOU_gIF5QOUSpUZZnQJDkDbEAaG)
    

#### A. Mempersiapkan Back-End / API SERVER

2. Buatlah Folder project baru pada xamp/htdoc/APLIKASIBELAJAR sebagai *PHP API Server* agar aplikasi dapat terhubung ke database 

    * Buat file koneksi.php   pada folder Project sebagai koneksi ke database mysql  pada *php server*
        *   ![alt text](https://lh5.googleusercontent.com/phzjFqVoDUfCBX16tdP_vekrQaLiTskBGUG0yk2ANnnUmDjxvNuJWCggU6P3B9-thowBb5PyUhqRu1NqJIRdd3IDZ1rbfzvWk9i5VCoV)


3. Buat file index.php pada folder project sebagai Model/controller pengatur dan pengirim data ke dalam database ataupun ke dalam aplikasi
    *  API POST received dari aplikasi

4. Buat Project Baru pada react-native 
    * Gunakan perintah  berikut untuk membuat Project baru ( *pastikan dalm keadaan terkoneksi ke internet* )

    * Tunggu proses inisialisasi hingga selesai
* Setelah proses selesai masuk kedalam  folder project yang baru saja dibuat dengan perintah berikut

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
