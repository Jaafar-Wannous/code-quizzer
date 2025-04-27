<?php
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];

$query = $connection->prepare("DELETE FROM questions WHERE id = ?");
$query->execute([$id]);

echo json_encode(["message" => "Question deleted successfully"]);