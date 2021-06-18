<?php
include 'koneksi.php';
if(isset($_POST['nobp'])){

    $data['data']=$_POST['nobp'];
    $nobp=$_POST['nobp'];
    $nama=$_POST['nama'];
    $jurusan=$_POST['jurusan'];
    $alamat=$_POST['alamat'];
    $hp=$_POST['hp'];

    $query=mysqli_query($conn,"INSERT INTO `db_mahasiswa`.`tb_mahasiswa` (`nobp`, `nama`, `jurusan`, `alamat`, `hp`) VALUES ('$nobp', '$nama', '$jurusan', '$alamat', '$hp');");
    
    if(!$query){
        $data['pesan']= "Query atau data yang dikirimkan/POST mungkin salah atau sudah ada di dalam database, coba cek lagi deh query dan data yang dikirmkan  tadi";
        $data['status']= false;
    }
    else{
        $data['pesan']= "Data Berhasil masuk database";
        $data['status']= true;
    }
}else{
    $data['pesan']= "Data yang di POST belum nyampe sini";
    $data['status']= false;
}
echo json_encode($data);
