<?php
$server="localhost";
$username="root";
$password="";
$db="db_mahasiswa";

$conn = new mysqli($server, $username, $password, $db);
if(!$conn){
    die("koneksi Database gagal" . mysqli_connect_error());
}
?>