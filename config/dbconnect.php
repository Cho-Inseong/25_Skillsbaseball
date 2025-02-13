<?php
$host = 'localhost'; //phpmyadmin에서 mysql데이터 베이스에 들어가 뷰에 들어가면 user가 있는데 거기 있음음
$db_name = 'skillsbaseball';
$user_name = 'root'; //이것도 user에 있음
$password = '';//이하동문문

try {
    $pdo = new PDO("mysql:host=$host; dbname=$db_name;", $user_name, $password);
} catch (PDOException $e) {
    echo "<script>alert('데이터베이스 연결 실패 ". addslashes($e->getMessage())."');</script>";
};
?>