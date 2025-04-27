<?php
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];

$query = $connection->prepare("DELETE FROM quizzes WHERE id = ?");
$query->execute([$id]);

echo json_encode(["message" => "Quiz deleted successfully"]);