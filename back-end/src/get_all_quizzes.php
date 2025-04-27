<?php
include 'connection.php';

$query = $connection->query("SELECT * FROM quizzes");
$quizzes = $query->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($quizzes);