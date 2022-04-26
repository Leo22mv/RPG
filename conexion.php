<?php

$host='localhost';
$user='root';
$password='';
$database='registro';

$conex = mysqli_connect($host,$user,$password,$database);

if (!$conex) {
    die("Conexion fallida");
}

?>