izq = 100
alt = 576
vida = localStorage.getItem("vida")
vidaene = 100
vidaene2 = 200
vidaene3 = 1000
eneizq = 1272
arma = 2 // localStorage.getItem("arma")

setTimeout(actualizarVida,100)
// setTimeout(actualizarArma,100)

function actualizarVida() {
    document.getElementById("vida").innerText = "Vida: "+Math.max(vida, 0)+"/100";
}
// function actualizarArma() {
//     if(arma===1) {
//         document.getElementById("arma1").innerHTML = '<img src="img/arma1s.jpg" width="100px">'
//         document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="100px">'
//         document.getElementById("arma").style.background = "grey";
//         document.getElementById("arma").style.border = 2+"px solid red";
//         document.getElementById("arma").style.height = 10+"px";
//         document.getElementById("arma").style.width = 30+"px";
//     } else {
//         document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="100px">'
//         document.getElementById("arma2").innerHTML = '<img src="img/arma2s.jpg" width="100px">'
//         document.getElementById("arma").style.background = "darkblue";
//         document.getElementById("arma").style.border = 2+"px solid white";
//         document.getElementById("arma").style.height = 8+"px";
//         document.getElementById("arma").style.width = 45+"px";
//     }
// }

function restarVida(cantidad) {
    vida -= cantidad
    document.getElementById("vida").innerText = "Vida: "+Math.max(vida, 0)+"/100";
    if (vida<=0) {
        setTimeout(perder, 308);
    }
}
function caertranca() {
    restarVida(20)
}
function caer() {
    restarVida(35)
    if (vida<=0) {
        setTimeout(perder, 308);
    }
}
function moverAdelante() {
    if (izq<1675) {
        if (alt===446&&izq===700&&vidaene>0) {
            restarVida(20);
        } else if (alt===186&&izq===1225&&vidaene2>0&&pas===1||pas===2&&izq===1300&&alt===186&&vidaene2>0||pas===3&&izq===1375&&alt===186&&vidaene2>0||pas===4&&izq===1450&&alt===186&&vidaene2>0||pas===5&&izq===1525&&alt===186&&vidaene2>0||pas===6&&izq===1600&&alt===186&&vidaene2>0||pas===7&&izq===1525&&alt===186&&vidaene2>0||pas===8&&izq===1450&&alt===186&&vidaene2>0||pas===9&&izq===1375&&alt===186&&vidaene2>0||pas===10&&izq===1300&&alt===186&&vidaene2>0) {
            restarVida(60);
        } else if (alt===56&&izq===850&&pos===1) {
            restarVida(80)
        }
        izq += 75;
        document.getElementById("player").style.left = izq + "px";
        if (alt===446) {
            if (izq>=1375) {
                setTimeout(bajar, 305);
            }
        } else if (alt===316) {
            if (izq>700) {
                setTimeout(bajar, 305);
            }
        } else if (alt===186) {
            if (izq>=850&&izq<=1150) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            }
        } else if (alt===56) {
            if (izq>=1225){
                setTimeout(bajar, 305);
            } else if (izq===550) {
                setTimeout(bajar, 305);
            }
        } else if(alt===-74) {
            if (izq=325) {
                setTimeout(bajar, 305);
            }
        }
    }
}
function moverAtras() {
    if (izq>25) {
        if (alt===446&&izq===775&&vidaene>0) {  // ataques enemigos
            restarVida(20);
        } else if (alt===186&&izq===1300&&vidaene2>0&&pas===1||pas===2&&izq===1375&&alt===186&&vidaene2>0||pas===3&&izq===1450&&alt===186&&vidaene2>0||pas===4&&izq===1525&&alt===186&&vidaene2>0||pas===5&&izq===1600&&alt===186&&vidaene2>0||pas===6&&izq===1675&&alt===186&&vidaene2>0||pas===7&&izq===1600&&alt===186&&vidaene2>0||pas===8&&izq===1525&&alt===186&&vidaene2>0||pas===9&&izq===1450&&alt===186&&vidaene2>0||pas===10&&izq===1375&&alt===186&&vidaene2>0) {      // ataques enemigos
            restarVida(60);
        } else if (alt===56&&izq===1000&&pos===1) {
            restarVida(80)
        }
        izq -= 75;
        document.getElementById("player").style.left = izq + "px";
        if (alt===446) {
            if (izq<=325) {
                setTimeout(bajar, 305);
            }
        } else if (alt===316) {
                setTimeout(bajar, 305);
        } 
        else if (alt===186) {
            if (izq===1150||izq<=400) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            }
        } 
        else if (alt===56) {
            if (izq<=775&&izq>475) {
                setTimeout(bajar, 305);
            } else if (izq<250) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            }
        } else if(alt===-74) {
            if (izq===1150) {
                setTimeout(bajar, 305);
            }
        }
    } else if (izq===25&&alt===-74&&vidaene<=0&&vidaene2<=0) {
        localStorage.setItem("vida", vida)
        izq -= 75;
        document.getElementById("player").style.left = izq + "px";
        setTimeout(siguientePantalla, 300)
    }
}
function saltar() {
    alt -= 130;
    document.getElementById("player").style.top = alt + "px";
    if (alt===446) {
        if (izq>=1375||izq<=325) {
            setTimeout(bajar, 305);
        }
    } else if (alt===316) {
        if (izq<1375&&izq>325&&izq!==1225) {
            setTimeout(bajar, 305);
        }
    }
     else if (alt===56) {
        if (izq>=1225&&izq<1675||izq>475&&izq<=775) {
            setTimeout(bajar, 305);
        }
    } else if(alt===-74) {
        if (izq>=325&&izq<=1150) {
            setTimeout(bajar, 305);
        }
    } else if (alt===-204) {
        setTimeout(bajar, 305);
    }
}
function bajar() {
    alt += 130;
    document.getElementById("player").style.top = alt + "px";
}
function atacar() {
    if (vidaene<=0&&vidaene2<=0) {
        document.getElementById("puerta").style.backgroundColor = "green"
    }
    document.getElementById("arma").style.left = 25+"px";
    setTimeout(volverArma, 305);
    if (izq===700&&alt===446){
        if (arma===2) {
            vidaene -= 80
        } else if (arma===1) {
            vidaene -= 60
        }
        document.getElementById("vidaene").innerText = "Vida: "+Math.max(vidaene, 0)+"/100";
        if (vidaene<=0) {
            document.getElementById("enemigo").style.height = 10+"px";
            document.getElementById("enemigo").style.width = 70+"px";
            document.getElementById("enemigo").style.top = 102+"px";
            document.getElementById("vidaene").style.bottom = 0;
            document.getElementById("vidaene").style.top = 13+"px";
            document.getElementById("vidaene").style.right = 0;
            document.getElementById("enemigo2").style.bottom = 250+"px";
            document.getElementById("armita").style.bottom = 519+"px";
            document.getElementById("enemigo3").style.bottom = 466+"px";
        }
    } else if (pas===1&&izq===1225&&alt===186||pas===2&&izq===1300&&alt===186||pas===3&&izq===1375&&alt===186||pas===4&&izq===1450&&alt===186||pas===5&&izq===1525&&alt===186||pas===6&&izq===1600&&alt===186||pas===7&&izq===1525&&alt===186||pas===8&&izq===1450&&alt===186||pas===9&&izq===1375&&alt===186||pas===10&&izq===1300&&alt===186) {
        if (arma===2) {
            vidaene2 -= 80
        } else if (arma===1) {
            vidaene2 -= 60
        }
        document.getElementById("vidaene2").innerText = "Vida: "+Math.max(vidaene2, 0)+"/200";
        if (vidaene2<=0) {
            document.getElementById("enemigo2").style.height = 10+"px";
            document.getElementById("enemigo2").style.width = 70+"px";
            document.getElementById("enemigo2").style.bottom = 185+"px";
            document.getElementById("vidaene2").style.top = 10+"px";
            document.getElementById("enemigo3").style.bottom = 406+"px";
            document.getElementById("armaen").style.background = "";
            document.getElementById("armaen").style.border = 0;
            document.getElementById("armaen").style.height = 0;
            document.getElementById("armaen").style.width = 0;
        }
    } else if (alt===-74&&izq===625) {
        if (arma===1) {
            vidaene3 -= 60;
        } else if (arma===2){
            vidaene3 -= 80;
        }
        document.getElementById("vidaene3").innerText = "Vida: "+Math.max(vidaene3, 0)+"/100";
        if (vidaene3<=0) {
            document.getElementById("enemigo3").style.height = 10+"px";
            document.getElementById("enemigo3").style.width = 70+"px";
            document.getElementById("enemigo3").style.bottom = 491+"px";
            document.getElementById("vidaene3").style.top = 10+"px";
        }
    }
}
function volverArma() {
    document.getElementById("arma").style.left = 0;
}
function ganar() {
    alert("Te ganaste un armado")
}
function perder() {
    alert("Perdiste jajaja")
    window.location.href = "index.html"
}
function siguientePantalla() {
    window.location.href = "levl4.html"
    // ganar()
}
function ataqueEnemigo() {
    ataque()
    setTimeout(volverArmaEn, 305)
}
function ataque() {
    document.getElementById("armaen").style.right = 45 + "px";
    if (pas===1&&izq===1225&&alt===186||pas===2&&izq===1300&&alt===186||pas===3&&izq===1375&&alt===186||pas===4&&izq===1450&&alt===186||pas===5&&izq===1525&&alt===186||pas===6&&izq===1600&&alt===186||pas===7&&izq===1525&&alt===186||pas===8&&izq===1450&&alt===186||pas===9&&izq===1375&&alt===186||pas===10&&izq===1300&&alt===186) {
        restarVida(40)
    }
}
function volverArmaEn() {
    document.getElementById("armaen").style.right = 20 + "px"
}
function intervalo() {
    if (vidaene2>0) {
        ataqueEnemigo()
    }
}
function intervalo1() {
    if (vidaene2>0) {
        ataqueEnemigo()
    }
}
function intervalo2() {
    if (vidaene2>0) {
        if (alt===186&&izq===1300&&vidaene2>0&&pas===1||pas===2&&izq===1375&&alt===186&&vidaene2>0||pas===3&&izq===1450&&alt===186&&vidaene2>0||pas===4&&izq===1525&&alt===186&&vidaene2>0||pas===5&&izq===1600&&alt===186&&vidaene2>0||pas===6&&izq===1600&&alt===186&&vidaene2>0||pas===7&&izq===1525&&alt===186&&vidaene2>0||pas===8&&izq===1450&&alt===186&&vidaene2>0||pas===9&&izq===1375&&alt===186&&vidaene2>0||pas===10&&izq===1300&&alt===186&&vidaene2>0||pas===11&&izq===1300&&alt===186&&vidaene2>0) {
            restarVida(60)
        }
        paso()
    }
}
function intervalo0() {
    if (vidaene3>0) {
        saltoEnemigo()
    }
}

pas = 1

function paso(){
    if (pas<6) {
        pas ++
        eneizq += 75
        document.getElementById("enemigo2").style.left = eneizq + "px";
    } else if (pas>=6&&pas<11) {
        pas ++
        eneizq -= 75
        document.getElementById("enemigo2").style.left = eneizq + "px";
    } else if (pas===11) {
        pas -= 9
        eneizq += 75
        document.getElementById("enemigo2").style.left = eneizq + "px";
    }
}

pos = 1

function saltoEnemigo() {
    if (vidaene>0&&vidaene2>0)  { //por errores de movimiento
        document.getElementById("enemigo3").style.bottom = 656 + "px"
        pos = 2
        setTimeout(caerEnemigo, 1000)
    } else if (vidaene<0&&vidaene2>0) {
        document.getElementById("enemigo3").style.bottom = 596 + "px"
        pos = 2
        setTimeout(caerEnemigo1, 1000)
    } else if (vidaene<0&&vidaene2<0) {
        document.getElementById("enemigo3").style.bottom = 536 + "px"
        pos = 2
        setTimeout(caerEnemigo2, 1000)
    }
}
function caerEnemigo() {
    document.getElementById("enemigo3").style.bottom = 526 + "px"
    pos = 1
    if (alt===56&&izq===925) {
        restarVida(80)
    }
}
function caerEnemigo1() {
    document.getElementById("enemigo3").style.bottom = 466 + "px"
    pos = 1
    if (alt===56&&izq===925) {
        restarVida(80)
    }
}
function caerEnemigo2() {
    document.getElementById("enemigo3").style.bottom = 406 + "px"
    pos = 1
    if (alt===56&&izq===925) {
        restarVida(80)
    }
}
function x() {
    setInterval(intervalo1, 5500)
}
function x1() {
    setInterval(intervalo2, 5500)
}

setInterval(intervalo, 5500)
setTimeout(x, 2500)
setTimeout(x1, 4500)
setInterval(intervalo0, 2000)

inventarioAbierto = 0

function abrirInventario() {
    document.getElementById("arma1danio").style.visibility = "hidden";
    document.getElementById("arma2danio").style.visibility = "hidden";
    if ( inventarioAbierto===0 ) {
        document.getElementById("iarma").style.width = 100 + "px" ;
        document.getElementById("iarma").style.height = 100 + "px" ;
        document.getElementById("icasco").style.width = 100 + "px" ;
        document.getElementById("icasco").style.height = 100 + "px" ;
        document.getElementById("ipechera").style.width = 100 + "px" ;
        document.getElementById("ipechera").style.height = 100 + "px" ;
        document.getElementById("ibotas").style.width = 100 + "px" ;
        document.getElementById("ibotas").style.height = 100 + "px" ;
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="100px">'
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="100px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="100px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="100px">'
        inventarioAbierto = 1
    } else {
        document.getElementById("iarma").style.width = 0 ;
        document.getElementById("iarma").style.height = 0 ;
        document.getElementById("icasco").style.width = 0 ;
        document.getElementById("icasco").style.height = 0 ;
        document.getElementById("ipechera").style.width = 0 ;
        document.getElementById("ipechera").style.height = 0 ;
        document.getElementById("ibotas").style.width = 0 ;
        document.getElementById("ibotas").style.height = 0 ;
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="0px">'
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="0px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="0px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="0px">'
        inventarioAbierto = 0
        if (armasAbiertas===1) {
            armasAbiertas = 0
            document.getElementById("arma1").style.width = 0 + "px"
            document.getElementById("arma1").style.height = 0 + "px"
            document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="0px">'
            document.getElementById("arma2").style.width = 0 + "px"
            document.getElementById("arma2").style.height = 0 + "px"
            document.getElementById("arma2").innerHTML = '<img src="img/arma2s.jpg" width="0px">'
            document.getElementById("arma3").style.width = 0 + "px"
            document.getElementById("arma3").style.height = 0 + "px"
            document.getElementById("arma4").style.width = 0 + "px"
            document.getElementById("arma4").style.height = 0 + "px"
            document.getElementById("arma5").style.width = 0 + "px"
            document.getElementById("arma5").style.height = 0 + "px"
            document.getElementById("arma6").style.width = 0 + "px"
            document.getElementById("arma6").style.height = 0 + "px"
            document.getElementById("arma7").style.width = 0 + "px"
            document.getElementById("arma7").style.height = 0 + "px"
            if (arma===2) {

            }
        } else if (cascosAbiertas===1) {
            document.getElementById("icasco").style.bottom = 556 + "px" ;
            document.getElementById("icasco").style.left = 650 + "px" ;
            icascoizq = 650
            cascosAbiertas = 0
            document.getElementById("casco1").style.width = 0 + "px"
            document.getElementById("casco1").style.height = 0 + "px"
            document.getElementById("casco2").style.width = 0 + "px"
            document.getElementById("casco2").style.height = 0 + "px"
            document.getElementById("casco3").style.width = 0 + "px"
            document.getElementById("casco3").style.height = 0 + "px"
            document.getElementById("casco4").style.width = 0 + "px"
            document.getElementById("casco4").style.height = 0 + "px"
            document.getElementById("casco5").style.width = 0 + "px"
            document.getElementById("casco5").style.height = 0 + "px"
            document.getElementById("casco6").style.width = 0 + "px"
            document.getElementById("casco6").style.height = 0 + "px"
            document.getElementById("casco7").style.width = 0 + "px"
            document.getElementById("casco7").style.height = 0 + "px"
        } else if (pecherasAbiertas===1) {
            document.getElementById("ipechera").style.bottom = 656 + "px" ;
            document.getElementById("ipechera").style.left = 780 + "px" ;
            pecherasAbiertas = 0
            document.getElementById("pechera1").style.width = 0 + "px"
            document.getElementById("pechera1").style.height = 0 + "px"
            document.getElementById("pechera2").style.width = 0 + "px"
            document.getElementById("pechera2").style.height = 0 + "px"
            document.getElementById("pechera3").style.width = 0 + "px"
            document.getElementById("pechera3").style.height = 0 + "px"
            document.getElementById("pechera4").style.width = 0 + "px"
            document.getElementById("pechera4").style.height = 0 + "px"
            document.getElementById("pechera5").style.width = 0 + "px"
            document.getElementById("pechera5").style.height = 0 + "px"
            document.getElementById("pechera6").style.width = 0 + "px"
            document.getElementById("pechera6").style.height = 0 + "px"
            document.getElementById("pechera7").style.width = 0 + "px"
            document.getElementById("pechera7").style.height = 0 + "px"
        } else if (botasAbiertas===1) {
            document.getElementById("ibotas").style.bottom = 756 + "px" ;
            document.getElementById("ibotas").style.left = 910 + "px" ;
            botasAbiertas = 0
            document.getElementById("botas1").style.width = 0 + "px"
            document.getElementById("botas1").style.height = 0 + "px"
            document.getElementById("botas2").style.width = 0 + "px"
            document.getElementById("botas2").style.height = 0 + "px"
            document.getElementById("botas3").style.width = 0 + "px"
            document.getElementById("botas3").style.height = 0 + "px"
            document.getElementById("botas4").style.width = 0 + "px"
            document.getElementById("botas4").style.height = 0 + "px"
            document.getElementById("botas5").style.width = 0 + "px"
            document.getElementById("botas5").style.height = 0 + "px"
            document.getElementById("botas6").style.width = 0 + "px"
            document.getElementById("botas6").style.height = 0 + "px"
            document.getElementById("botas7").style.width = 0 + "px"
            document.getElementById("botas7").style.height = 0 + "px"
        }
    }    
}

armasAbiertas = 0

function abrirArmas() {
    if (armasAbiertas===0) {
        document.getElementById("icasco").style.width = 0 ;
        document.getElementById("icasco").style.height = 0 ;
        document.getElementById("ipechera").style.width = 0 ;
        document.getElementById("ipechera").style.height = 0 ;
        document.getElementById("ibotas").style.width = 0 ;
        document.getElementById("ibotas").style.height = 0 ;
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="0px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="0px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="0px">'
        armasAbiertas = 1
        document.getElementById("arma1").style.width = 100 + "px"
        document.getElementById("arma1").style.height = 100 + "px"
        document.getElementById("arma2").style.width = 100 + "px"
        document.getElementById("arma2").style.height = 100 + "px"
        document.getElementById("arma3").style.width = 100 + "px"
        document.getElementById("arma3").style.height = 100 + "px"
        document.getElementById("arma4").style.width = 100 + "px"
        document.getElementById("arma4").style.height = 100 + "px"
        document.getElementById("arma5").style.width = 100 + "px"
        document.getElementById("arma5").style.height = 100 + "px"
        document.getElementById("arma6").style.width = 100 + "px"
        document.getElementById("arma6").style.height = 100 + "px"
        document.getElementById("arma7").style.width = 100 + "px"
        document.getElementById("arma7").style.height = 100 + "px"
        if (arma===2) {
            document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="100px">'
            document.getElementById("arma2").innerHTML = '<img src="img/arma2s.jpg" width="100px">'
        } else {
            document.getElementById("arma1").innerHTML = '<img src="img/arma1s.jpg" width="100px">'
            document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="100px">'
        }
        document.getElementById("arma1danio").style.visibility = "visible";
        document.getElementById("arma2danio").style.visibility = "visible";
    } else {
        document.getElementById("icasco").style.width = 100 + "px" ;
        document.getElementById("icasco").style.height = 100 + "px" ;
        document.getElementById("ipechera").style.width = 100 + "px" ;
        document.getElementById("ipechera").style.height = 100 + "px" ;
        document.getElementById("ibotas").style.width = 100 + "px" ;
        document.getElementById("ibotas").style.height = 100 + "px" ;
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="100px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="100px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="100px">'
        armasAbiertas = 0
        document.getElementById("arma1").style.width = 0 + "px"
        document.getElementById("arma1").style.height = 0 + "px"
        document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="0px">'
        document.getElementById("arma2").style.width = 0 + "px"
        document.getElementById("arma2").style.height = 0 + "px"
        document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="0px">'
        document.getElementById("arma3").style.width = 0 + "px"
        document.getElementById("arma3").style.height = 0 + "px"
        document.getElementById("arma4").style.width = 0 + "px"
        document.getElementById("arma4").style.height = 0 + "px"
        document.getElementById("arma5").style.width = 0 + "px"
        document.getElementById("arma5").style.height = 0 + "px"
        document.getElementById("arma6").style.width = 0 + "px"
        document.getElementById("arma6").style.height = 0 + "px"
        document.getElementById("arma7").style.width = 0 + "px"
        document.getElementById("arma7").style.height = 0 + "px"
        document.getElementById("arma1danio").style.visibility = "hidden";
        document.getElementById("arma2danio").style.visibility = "hidden";
    }
}

cascosAbiertas = 0
icascoizq = 650

function abrirCascos() {
    if (cascosAbiertas===0) {
        document.getElementById("iarma").style.width = 0 ;
        document.getElementById("iarma").style.height = 0 ;
        document.getElementById("ipechera").style.width = 0 ;
        document.getElementById("ipechera").style.height = 0 ;
        document.getElementById("ibotas").style.width = 0 ;
        document.getElementById("ibotas").style.height = 0 ;
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="0px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="0px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="0px">'
        document.getElementById("icasco").style.bottom = 456 + "px" ;
        document.getElementById("icasco").style.left = 520 + "px" ;
        icascoizq = 520
        cascosAbiertas = 1
        document.getElementById("casco1").style.width = 100 + "px"
        document.getElementById("casco1").style.height = 100 + "px"
        document.getElementById("casco2").style.width = 100 + "px"
        document.getElementById("casco2").style.height = 100 + "px"
        document.getElementById("casco3").style.width = 100 + "px"
        document.getElementById("casco3").style.height = 100 + "px"
        document.getElementById("casco4").style.width = 100 + "px"
        document.getElementById("casco4").style.height = 100 + "px"
        document.getElementById("casco5").style.width = 100 + "px"
        document.getElementById("casco5").style.height = 100 + "px"
        document.getElementById("casco6").style.width = 100 + "px"
        document.getElementById("casco6").style.height = 100 + "px"
        document.getElementById("casco7").style.width = 100 + "px"
        document.getElementById("casco7").style.height = 100 + "px"
    } else {
        document.getElementById("iarma").style.width = 100 + "px" ;
        document.getElementById("iarma").style.height = 100 + "px" ;
        document.getElementById("ipechera").style.width = 100 + "px" ;
        document.getElementById("ipechera").style.height = 100 + "px" ;
        document.getElementById("ibotas").style.width = 100 + "px" ;
        document.getElementById("ibotas").style.height = 100 + "px" ;
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="100px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="100px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="100px">'
        document.getElementById("icasco").style.bottom = 556 + "px" ;
        document.getElementById("icasco").style.left = 650 + "px" ;
        icascoizq = 650
        cascosAbiertas = 0
        document.getElementById("casco1").style.width = 0 + "px"
        document.getElementById("casco1").style.height = 0 + "px"
        document.getElementById("casco2").style.width = 0 + "px"
        document.getElementById("casco2").style.height = 0 + "px"
        document.getElementById("casco3").style.width = 0 + "px"
        document.getElementById("casco3").style.height = 0 + "px"
        document.getElementById("casco4").style.width = 0 + "px"
        document.getElementById("casco4").style.height = 0 + "px"
        document.getElementById("casco5").style.width = 0 + "px"
        document.getElementById("casco5").style.height = 0 + "px"
        document.getElementById("casco6").style.width = 0 + "px"
        document.getElementById("casco6").style.height = 0 + "px"
        document.getElementById("casco7").style.width = 0 + "px"
        document.getElementById("casco7").style.height = 0 + "px"
    }
}

pecherasAbiertas = 0

function abrirPecheras() {
    if (pecherasAbiertas===0) {
        document.getElementById("icasco").style.width = 0 ;
        document.getElementById("icasco").style.height = 0 ;
        document.getElementById("iarma").style.width = 0 ;
        document.getElementById("iarma").style.height = 0 ;
        document.getElementById("ibotas").style.width = 0 ;
        document.getElementById("ibotas").style.height = 0 ;
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="0px">'
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="0px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="0px">'
        document.getElementById("ipechera").style.bottom = 456 + "px" ;
        document.getElementById("ipechera").style.left = 520 + "px" ;
        pecherasAbiertas = 1
        document.getElementById("pechera1").style.width = 100 + "px"
            document.getElementById("pechera1").style.height = 100 + "px"
            document.getElementById("pechera2").style.width = 100 + "px"
            document.getElementById("pechera2").style.height = 100 + "px"
            document.getElementById("pechera3").style.width = 100 + "px"
            document.getElementById("pechera3").style.height = 100 + "px"
            document.getElementById("pechera4").style.width = 100 + "px"
            document.getElementById("pechera4").style.height = 100 + "px"
            document.getElementById("pechera5").style.width = 100 + "px"
            document.getElementById("pechera5").style.height = 100 + "px"
            document.getElementById("pechera6").style.width = 100 + "px"
            document.getElementById("pechera6").style.height = 100 + "px"
            document.getElementById("pechera7").style.width = 100 + "px"
            document.getElementById("pechera7").style.height = 100 + "px"
    } else {
        document.getElementById("icasco").style.width = 100 + "px" ;
        document.getElementById("icasco").style.height = 100 + "px" ;
        document.getElementById("iarma").style.width = 100 + "px" ;
        document.getElementById("iarma").style.height = 100 + "px" ;
        document.getElementById("ibotas").style.width = 100 + "px" ;
        document.getElementById("ibotas").style.height = 100 + "px" ;
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="100px">'
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="100px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="100px">'
        document.getElementById("ipechera").style.bottom = 656 + "px" ;
        document.getElementById("ipechera").style.left = 780 + "px" ;
        pecherasAbiertas = 0
        document.getElementById("pechera1").style.width = 0 + "px"
            document.getElementById("pechera1").style.height = 0 + "px"
            document.getElementById("pechera2").style.width = 0 + "px"
            document.getElementById("pechera2").style.height = 0 + "px"
            document.getElementById("pechera3").style.width = 0 + "px"
            document.getElementById("pechera3").style.height = 0 + "px"
            document.getElementById("pechera4").style.width = 0 + "px"
            document.getElementById("pechera4").style.height = 0 + "px"
            document.getElementById("pechera5").style.width = 0 + "px"
            document.getElementById("pechera5").style.height = 0 + "px"
            document.getElementById("pechera6").style.width = 0 + "px"
            document.getElementById("pechera6").style.height = 0 + "px"
            document.getElementById("pechera7").style.width = 0 + "px"
            document.getElementById("pechera7").style.height = 0 + "px"
    }
}

botasAbiertas = 0

function abrirBotas() {
    if (botasAbiertas===0) {
        document.getElementById("icasco").style.width = 0 ;
        document.getElementById("icasco").style.height = 0 ;
        document.getElementById("iarma").style.width = 0 ;
        document.getElementById("iarma").style.height = 0 ;
        document.getElementById("ipechera").style.width = 0 ;
        document.getElementById("ipechera").style.height = 0 ;
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="0px">'
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="0px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="0px">'
        document.getElementById("ibotas").style.bottom = 456 + "px" ;
        document.getElementById("ibotas").style.left = 520 + "px" ;
        botasAbiertas = 1
        document.getElementById("botas1").style.width = 100 + "px"
        document.getElementById("botas1").style.height = 100 + "px"
        document.getElementById("botas2").style.width = 100 + "px"
        document.getElementById("botas2").style.height = 100 + "px"
        document.getElementById("botas3").style.width = 100 + "px"
        document.getElementById("botas3").style.height = 100 + "px"
        document.getElementById("botas4").style.width = 100 + "px"
        document.getElementById("botas4").style.height = 100 + "px"
        document.getElementById("botas5").style.width = 100 + "px"
        document.getElementById("botas5").style.height = 100 + "px"
        document.getElementById("botas6").style.width = 100 + "px"
        document.getElementById("botas6").style.height = 100 + "px"
        document.getElementById("botas7").style.width = 100 + "px"
        document.getElementById("botas7").style.height = 100 + "px"
    } else {
        document.getElementById("icasco").style.width = 100 + "px" ;
        document.getElementById("icasco").style.height = 100 + "px" ;
        document.getElementById("iarma").style.width = 100 + "px" ;
        document.getElementById("iarma").style.height = 100 + "px" ;
        document.getElementById("ipechera").style.width = 100 + "px" ;
        document.getElementById("ipechera").style.height = 100 + "px" ;
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="100px">'
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="100px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="100px">'
        document.getElementById("ibotas").style.bottom = 756 + "px" ;
        document.getElementById("ibotas").style.left = 910 + "px" ;
        botasAbiertas = 0
        document.getElementById("botas1").style.width = 0 + "px"
        document.getElementById("botas1").style.height = 0 + "px"
        document.getElementById("botas2").style.width = 0 + "px"
        document.getElementById("botas2").style.height = 0 + "px"
        document.getElementById("botas3").style.width = 0 + "px"
        document.getElementById("botas3").style.height = 0 + "px"
        document.getElementById("botas4").style.width = 0 + "px"
        document.getElementById("botas4").style.height = 0 + "px"
        document.getElementById("botas5").style.width = 0 + "px"
        document.getElementById("botas5").style.height = 0 + "px"
        document.getElementById("botas6").style.width = 0 + "px"
        document.getElementById("botas6").style.height = 0 + "px"
        document.getElementById("botas7").style.width = 0 + "px"
        document.getElementById("botas7").style.height = 0 + "px"
    }
}

function seleccionarArma1() {
    arma = 1
    document.getElementById("arma1").innerHTML = '<img src="img/arma1s.jpg" width="100px">'
    document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="100px">'
    document.getElementById("arma").style.background = "grey";
    document.getElementById("arma").style.border = 2+"px solid red";
    document.getElementById("arma").style.height = 10+"px";
    document.getElementById("arma").style.width = 30+"px";
}
function seleccionarArma2() {
    arma = 2
    document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="100px">'
    document.getElementById("arma2").innerHTML = '<img src="img/arma2s.jpg" width="100px">'
    document.getElementById("arma").style.background = "darkblue";
    document.getElementById("arma").style.border = 2+"px solid white";
    document.getElementById("arma").style.height = 8+"px";
    document.getElementById("arma").style.width = 45+"px";
}