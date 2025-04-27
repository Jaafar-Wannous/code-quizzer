<?php
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$quizzes_id = $data['quizzes_id'];
$question_text = $data['question_text'];

$query = $connection->prepare("INSERT INTO questions (quizzes_id, question_text) VALUES (?, ?)");
$query->execute([$quizzes_id, $question_text]);

echo json_encode(["message" => "Question created successfully"]);