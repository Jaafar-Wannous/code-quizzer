<?php
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$password = $data['password'];

$query = $connection->prepare("SELECT * FROM users WHERE email = ?");
$query->execute([$email]);
$user = $query->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['password'])) {
    echo json_encode(["message" => "Login successful"]);
} else {
    echo json_encode(["message" => "Invalid credentials"]);
}