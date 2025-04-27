<?php
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];
$question_text = $data['question_text'];

$query = $connection->prepare("UPDATE questions SET question_text = ? WHERE id = ?");
$query->execute([$question_text, $id]);

echo json_encode(["message" => "Question updated successfully"]);