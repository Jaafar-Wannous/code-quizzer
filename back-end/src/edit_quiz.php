<?php
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];
$title = $data['title'];
$description = $data['description'];

$query = $connection->prepare("UPDATE quizzes SET title = ?, description = ? WHERE id = ?");
$query->execute([$title, $description, $id]);

echo json_encode(["message" => "Quiz updated successfully"]);