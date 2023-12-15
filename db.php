<?php
// Database credentials
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'crm';

// Create a connection
$conn = new mysqli($host, $user, $pass, $db);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}