

<!-- // session_start();
// include('validar.php');
// if (isset($_SESSION['usuario'])) {
    // $records = $conex->prepare('SELECT usuario, clave FROM datos WHERE usuario = :usuario');
    // $records->bindParam(':usuario', $_SESSION['usuario']);
    // $records->execute();
    // $results = $records->fetch(PDO::FETCH_ASSOC);

    // $useer = null;

    // if (count($results) > 0) {
    //     $useer = $results;
    // }
// } -->





<!DOCTYPE html>
<html>
<head>
    <title>RPG</title>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Quicksand:wght@300&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="css/index.css">
    <script src="js/index.js"></script>
</head>
<body>
    <div id="fondo">
        <h1 id="titulo">RPG</h1>
        <button onclick="irais()" class="boton">Iniciar sesion</button>
        <button onclick="iraregistro()" class="boton">Registrarse</button>
        <div id="suelo"></div>
        <div id="player"></div>
        <div id="enemigo"></div>
        <div id="enemigo2"></div>
    </div>
</body>
</html>