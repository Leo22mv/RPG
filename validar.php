<?php

include 'database.php';

if (isset($_POST['submit'])) {
    
    $usuario=$_POST['usuario'];
    $clave=$_POST['clave'];
    // session_start();
    // $_SESSION['usuario']=$usuario;



    $consulta="SELECT * FROM datos WHERE usuario='$usuario' AND clave='$clave'";
    $resultado = mysqli_query($conex,$consulta);

    $filas=mysqli_num_rows($resultado);

    if($filas>0) {
        header("Location:partidas.php");
    } else {
        ?>
        <h3 class="bad">Usuario y/o contraseña incorrectos</h3>
        <?php
    }
    mysqli_free_result($resultado);
    mysqli_close($conex);
    // session_destroy();
}
// session_start();



// if (!empty($_POST['usuario']) && !empty($_POST['clave'])) {
//     $records = $conex->prepare('SELECT usuario, clave FROM datos WHERE usuario="$usuario"');
//     $records->bindParam(':usuario', $_POST['usuario']);
//     $records->execute();
//     $results = $records->fetch(PDO::FETCH_ASSOC);

//     $message = '';

//     if (is_countable($results) > 0 && password_verify($_POST['clave'], $results['clave'])) {
//         $_SESSION['usuario'] = $results['usuario'];
//         header("Location:login.php");
//     } else {
//         $message = 'errror';
//     }
// }


?>