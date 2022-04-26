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
        <form method="post" id="login">  <!--  action="validar.php" -->
            <input type="text" id="usuario" name='usuario' placeholder="Usuario">
            <input type="password" id="pass" name='clave' placeholder="Contraseña">
            <input type="submit" name="submit" value="Iniciar Sesion">
        </form>
        <button onclick="iraregistro()">Registrarse</button>
        <div id="suelo"></div>
        <div id="player"></div>
        <div id="enemigo"></div>
        <div id="enemigo2"></div>
    </div>
    <?php include 'validar.php'; ?>
</body>
</html>