<?php
include 'koneksi.php';
if(isset($_POST['nobp'])){
    $nobp=$_POST['nobp'];
    $query=mysqli_query($conn,"DELETE FROM `tb_mahasiswa` WHERE `nobp` = '$nobp'");
    if(!$query){
        $data['pesan']= "Query atau data yang dikirimkan/POST mungkin salah ";
        $data['data']=$_POST['nobp'];
        $data['status']= false;
    }
    else{
        $data['pesan']= "Data Berhasil dihapus database";
        $data['status']= true;
    }
}else{
    $data['pesan']= "Data yang di POST belum nyampe sini";
    $data['status']= false;
}
echo json_encode($data);
