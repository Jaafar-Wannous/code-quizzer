<?php
include 'connection.php';

$quizzes_id = $_GET['quizzes_id'];

$query = $connection->prepare("SELECT * FROM questions WHERE quizzes_id = ?");
$query->execute([$quizzes_id]);
$questions = $query->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($questions);