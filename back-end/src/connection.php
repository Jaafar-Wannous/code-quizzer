<?php
try {
$host = "db";
$port = 3306;
$dbname = "quiz_app_db";
$user = "root";
$password = "root";

$connection = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $user, $password );
} catch (\Throwable $e) {
    echo $e;
}