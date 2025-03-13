<?php
$servername = "localhost"; // o la IP del servidor si es remoto
$username = "root"; // tu nombre de usuario MySQL
$password = ""; // tu contraseña MySQL (en localhost suele ser vacía en XAMPP, por ejemplo)
$dbname = "registro"; // el nombre de tu base de datos

// Crea la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
