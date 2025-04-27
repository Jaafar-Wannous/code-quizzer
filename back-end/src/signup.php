<?php
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['name']) || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(["error" => "Missing required fields"]);
    exit;
}

$username = $data['name'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_BCRYPT);

$stmt = $connection->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");

try {
    $stmt->execute([$username, $email, $password]);
    echo json_encode(["message" => "User registered successfully"]);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
