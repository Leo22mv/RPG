<?php

include "conexion.php";
// error_reporting(0);
// session_start();

// if (isset($_SESSION["usuario"])) {
//     header("Location: index.php")
// }

if (isset($_POST['registrar'])) {
    if (strlen($_POST['usuario']) >= 1 && strlen($_POST['clave']) >= 1) {
        $usuario = trim($_POST['usuario']);
        $clave = trim($_POST['clave']);
        $consulta="SELECT * FROM datos WHERE usuario='$usuario'";
        $resultado = mysqli_query($conex,$consulta);
        if (!$resultado->num_rows > 0) {

            $consulta = "INSERT INTO datos(id, usuario, clave) VALUES ('0','$usuario','$clave')";
            $resultado = mysqli_query($conex,$consulta);

            if ($resultado) {
                ?>
                <h3 class="ok">Registro exitoso</h3>
                <?php
            } else {
                ?>
                <h3 class="error">Error</h3>
                <?php
            }
        } else {
            ?>
            <h3 class="error">El usuario ya existe</h3>
            <?php
        }
    } else {
        ?>
        <h3 class="error">Completar datos</h3>
        <?php
    }
}

?>

        