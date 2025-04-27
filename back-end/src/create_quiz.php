<?php
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$title = $data['title'];
$description = $data['description'];

$query = $connection->prepare("INSERT INTO quizzes (title, description) VALUES (?, ?)");
$query->execute([$title, $description]);

echo json_encode(["message" => "Quiz created successfully"]);