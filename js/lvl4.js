izq = 1675
alt = -74
vidax = 145
vida = localStorage.getItem("vida")
vidamax = 100
vidaene = 500
vidaene2 = 500
vidaene3 = 500
vidaene4 = 500
eneizq = 824
yapaso = 0
pechera = 0

setTimeout(actualizarVida,100)

function actualizarVida() {
    document.getElementById("vida").innerText = "Vida: "+Math.max(vida, 0)+"/100";
}

function restarVida(cantidad) {
    vida -= cantidad
    if (yapaso===0) {
        document.getElementById("vida").innerText = "Vida: "+Math.max(vida, 0)+"/100";
    } else {document.getElementById("vida").innerText = "Vida: "+Math.max(vida, 0)+"/145";}
    if (vida<=0) {
        setTimeout(perder, 308);
    }
}
function caertranca() {
    restarVida(20)
}
function caer() {
    restarVida(35)
}
function moverAdelante() {
    if (izq<1675) {
        if (alt===576&&izq===475&&vidaene4>0&&pos===1) {
            restarVida(80);
        } else if (pas===1&&izq===775&&alt===186&&vidaene2>0||pas===2&&izq===700&&alt===186&&vidaene2>0||pas===3&&izq===625&&alt===186&&vidaene2>0||pas===4&&izq===700&&alt===186&&vidaene2>0||pas===5&&izq===775&&alt===186&&vidaene2>0) {
            restarVida(60);
        } else if (alt===576&&izq===700&pos===1) {
            restarVida(80)
        } else if (alt===576&&izq===925&&pos===1) {
            restarVida(80)
        }
        izq += 75;
        document.getElementById("player").style.left = izq + "px";
        if (alt===446) {
            if (izq>25) {
                setTimeout(bajar, 305);
            }
        } else if (alt===316) {
            if (izq>25&&izq<1525) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            } else if (izq===1675) {
                setTimeout(bajar, 305);
            }
        } else if (alt===186) {
            if (izq>25&&izq<=550) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                caertranca()
            } else if (izq===850&&vidaene<=0&&vidaene2<=0&&vidaene3<=0&&vidaene4<=0) {
                setTimeout(siguientePantalla, 305);
            }
        } else if (alt===56) {
            if (izq>25&&izq<=325){
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                caer()
            } else if (izq>=925&&izq<1525) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                caer()
            } else if (izq>=700&&izq<925) {
                setTimeout(bajar, 305);
            } else if (izq>1600) {
                setTimeout(bajar, 305);
            }
        } else if(alt===-74) {
            if (izq>=400) {
                setTimeout(bajar, 305);
            }
        }
    }
}
function moverAtras() {
    if (izq>25) {
        if (alt===576&&izq===775&&vidaene>0&&pos===1) {  // ataques enemigos
            restarVida(80);
        } else if (pas===1&&izq===850&&alt===186&&vidaene2>0||pas===2&&izq===775&&alt===186&&vidaene2>0||pas===3&&izq===700&&alt===186&&vidaene2>0||pas===4&&izq===775&&alt===186&&vidaene2>0||pas===5&&izq===850&&alt===186&&vidaene2>0) {      // ataques enemigos
            restarVida(60);
        } else if (alt===576&&izq===1000&&pos===1&&vidaene3>0) {
            restarVida(80)
        } else if (alt===576&&izq===550&&pos===1&&vidaene4>0) {
            restarVida(80)
        } 
        if (alt===576) {
            if (izq===1375) {
                document.getElementById("vidita").innerHTML = '<img src="img/vidita.png" width="0px">'
                vida = vidamax
                document.getElementById("vida").innerText = "Vida: "+Math.max(vida, 0)+"/"+vidamax;
            } else if (izq===1450) {
                yapaso = 1
                document.getElementById("pecherita").style.visibility = "hidden"
                document.getElementById("enemigo4").style.top= -156 + "px";
                seleccionarPechera1()
                if (pecherasAbiertas===1) {
                    document.getElementById("pechera1").innerHTML = '<img src="img/pechera1s.jpg" width="100px">' ;
                    document.getElementById("pechera1vida").style.visibility = "visible";
                } else {document.getElementById("pechera1").innerHTML = '<img src="img/pechera1s.jpg" width="0px">' ;}
                document.getElementById("vida").innerText = "Vida: "+vida+"/145";
            } else if (izq===1000&pos===1) {
                restarVida(80)
            }
        }
        izq -= 75;
        document.getElementById("player").style.left = izq + "px";
        if (alt===446) {
            if (izq<=1600) {
                setTimeout(bajar, 305);
            }
        } else if (alt===316) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
        } 
        else if (alt===186) {
            if (izq===1600) {
                setTimeout(bajar, 305);
            } else if (izq<1600&&izq>925) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                caertranca()
            } else if (izq<=550) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                caertranca()
            }
        } 
        else if (alt===56) {
            if (izq<=1525&&izq>=700) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                caer()
            } else if (izq<=325) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                caer()
            }
        } else if(alt===-74) {
            if (izq===1600) {
                setTimeout(bajar, 305);
            } else if (izq<1600&&izq>=700) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                caer()
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
        if (izq!==1675&&izq!==25) {
            setTimeout(bajar, 305);
        }
    } else if (alt===316) {
        if (izq!==25) {
            setTimeout(bajar, 305);
        }
    } else if (alt===186) {
        if (izq!==25) {
            setTimeout(bajar, 305);
        }
    } else if(alt===56) {
        if (izq===1675||izq>=700) {
            setTimeout(bajar, 305);
        }
    } else if (alt===-74) {
        if (izq>325) {
            setTimeout(bajar, 305);
        }
    } else if (alt>=-204) {
        setTimeout(bajar, 305);
    }
}
function bajar() {
    alt += 130;
    document.getElementById("player").style.top = alt + "px";
}
function atacar() {
    document.getElementById("arma").style.left = 25+"px";
    setTimeout(volverArma, 305);
    if (izq===700&&alt===576&&pos===1){
        if (arma===2) {
            vidaene -= 80
        } else if (arma===1) {
            vidaene -= 60
        }
        document.getElementById("vidaene").innerText = "Vida: "+Math.max(vidaene, 0)+"/500";
        if (vidaene<=0) {
            if (vidaene<=0&&vidaene2<=0&&vidaene3<=0&&vidaene4<=0) {
                document.getElementById("puerta").style.backgroundColor = "green"
            }
            document.getElementById("enemigo").style.height = 10+"px";
            document.getElementById("enemigo").style.width = 70+"px";
            document.getElementById("enemigo").style.top = 232+"px";
            document.getElementById("vidaene").style.bottom = 0;
            document.getElementById("vidaene").style.top = 13+"px";
            document.getElementById("vidaene").style.right = 0;
            document.getElementById("enemigo3").style.bottom = -90 + "px";
            document.getElementById("decimopiso").style.top= -432 + "px";
            document.getElementById("onceavopiso").style.bottom= 576 + "px";
            document.getElementById("doceavopiso").style.bottom= 466 + "px";
            document.getElementById("enemigo2").style.bottom = 250 + "px";
        }
    } 
    else if (pas===1&&izq===775&&alt===186||pas===2&&izq===700&&alt===186||pas===3&&izq===625&&alt===186||pas===4&&izq===700&&alt===186||pas===5&&izq===775&&alt===186) {
        if (arma===2) {
            vidaene2 -= 80
        } else if (arma===1) {
            vidaene2 -= 60
        }
        document.getElementById("vidaene2").innerText = "Vida: "+Math.max(vidaene2, 0)+"/500";
        if (vidaene2<=0) {
            if (vidaene<=0&&vidaene2<=0&&vidaene3<=0&&vidaene4<=0) {
                document.getElementById("puerta").style.backgroundColor = "green"
            }
            document.getElementById("enemigo2").style.height = 10+"px";
            document.getElementById("enemigo2").style.width = 70+"px";
            document.getElementById("enemigo2").style.bottom = 185+"px";
            document.getElementById("vidaene2").style.top = 10+"px";
            document.getElementById("armaen").style.background = "";
            document.getElementById("armaen").style.border = 0;
            document.getElementById("armaen").style.height = 0;
            document.getElementById("armaen").style.width = 0;
            document.getElementById("decimopiso").style.top= -312 + "px";
            document.getElementById("onceavopiso").style.bottom= 456 + "px";
            document.getElementById("doceavopiso").style.bottom= 346 + "px";
            document.getElementById("enemigo4").style.top= -31 + "px";
            document.getElementById("enemigo3").style.bottom = -150 + "px";
        }
    } 
    else if (alt===576) {
        if (izq===925&&pos===1) {
            if (arma===1) {
                vidaene3 -= 60;
            } else if (arma===2){
                vidaene3 -= 80;
            }
            document.getElementById("vidaene3").innerText = "Vida: "+Math.max(vidaene3, 0)+"/500";
            if (vidaene3<=0) {
                if (vidaene<=0&&vidaene2<=0&&vidaene3<=0&&vidaene4<=0) {
                    document.getElementById("puerta").style.backgroundColor = "green"
                }
                document.getElementById("enemigo3").style.height = 10+"px";
                document.getElementById("enemigo3").style.width = 70+"px";
                document.getElementById("enemigo3").style.bottom = -29+"px";
                document.getElementById("vidaene3").style.top = 10+"px";
                document.getElementById("enemigo4").style.top= -96 + "px";
                document.getElementById("decimopiso").style.top= -492 + "px";
                document.getElementById("onceavopiso").style.bottom= 636 + "px";
                document.getElementById("doceavopiso").style.bottom= 526 + "px";

            }
        } else if (izq===475&&pos===1) {
            if (arma===1) {
                vidaene4 -= 60;
            } else if (arma===2){
                vidaene4 -= 80;
            }
            document.getElementById("vidaene4").innerText = "Vida: "+Math.max(vidaene4, 0)+"/500";
            if (vidaene4<=0) {
                if (vidaene<=0&&vidaene2<=0&&vidaene3<=0&&vidaene4<=0) {
                    document.getElementById("puerta").style.backgroundColor = "green"
                }
                document.getElementById("enemigo4").style.height = 10+"px";
                document.getElementById("enemigo4").style.width = 70+"px";
                document.getElementById("enemigo4").style.top = 29+"px";
                document.getElementById("vidaene4").style.top = 10+"px";
                document.getElementById("decimopiso").style.top= -372 + "px";
                document.getElementById("onceavopiso").style.bottom= 516 + "px";
                document.getElementById("doceavopiso").style.bottom= 406 + "px";
            }
        }
    }
}
function volverArma() {
    document.getElementById("arma").style.left = 0;
}
function ganar() {
    alert("Ganaste uraa")
}
function perder() {
    alert("Perdiste jajaja")
    window.location.href = "index.html"
}
function siguientePantalla() {
    window.location.href = "llevel5.html"
    // ganar()
}
function ataqueEnemigo() {
    ataque()
    setTimeout(volverArmaEn, 305)
}
function ataque() {
    document.getElementById("armaen").style.right = 45 + "px";
    if (pas===1&&izq===775&&alt===186||pas===2&&izq===700&&alt===186||pas===3&&izq===625&&alt===186||pas===4&&izq===700&&alt===186||pas===5&&izq===775&&alt===186) {
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
        if (pas===1&&izq===775&&alt===186&&vidaene2>0||pas===2&&izq===700&&alt===186&&vidaene2>0||pas===3&&izq===700&&alt===186&&vidaene2>0||pas===4&&izq===775&&alt===186&&vidaene2>0||pas===5&&izq===775&&alt===186&&vidaene2>0) {
            restarVida(60)
        }
        paso()
    }
}
function intervalo0() {
    if (vidaene3>0) {
        saltoEnemigo3()
    }
    if (vidaene>0) {
        saltoEnemigo()
    }
    if (vidaene4>0) {
        saltoEnemigo4()
    }
}

pas = 1

function paso(){
    if (pas<3) {
        eneizq -= 75
        document.getElementById("enemigo2").style.left = eneizq + "px";
        pas ++
    } else if (pas>=3&&pas<5) {
        eneizq += 75
        document.getElementById("enemigo2").style.left = eneizq + "px";
        pas ++
    } else if (pas===5) {
        eneizq -= 75
        document.getElementById("enemigo2").style.left = eneizq + "px";
        pas -= 3
    }
}

pos = 1

function saltoEnemigo3() {
    document.getElementById("enemigo3").style.bottom = 166 + "px"
    pos = 2
    setTimeout(caerEnemigo3, 1000)
}
function caerEnemigo3() {
    document.getElementById("enemigo3").style.bottom = 36 + "px"
    pos = 1
}
function saltoEnemigo4() {
    if (vidaene>0&&vidaene3>0) {
        document.getElementById("enemigo4").style.top= -286 + "px";
    } else if (vidaene>0&&vidaene3<=0) {
        document.getElementById("enemigo4").style.top= -226 + "px";
    } else if (vidaene<=0&&vidaene3<=0) {
        document.getElementById("enemigo4").style.top= -166 + "px";
    }
    pos = 2
    setTimeout(caerEnemigo4, 1000)
}
function caerEnemigo4() {
    if (vidaene>0&&vidaene3>0) {
        document.getElementById("enemigo4").style.top= -156 + "px";
    } else if (vidaene>0&&vidaene3<=0) {
        document.getElementById("enemigo4").style.top= -96 + "px";
    } else if (vidaene<=0&&vidaene3<=0) {
        document.getElementById("enemigo4").style.top= -36 + "px";
    }
    pos = 1
}
function saltoEnemigo() {
    document.getElementById("enemigo").style.top = 36 + "px"
    pos = 2
    setTimeout(caerEnemigo, 1000)
}
function caerEnemigo() {
    document.getElementById("enemigo").style.top = 166 + "px"
    pos = 1
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
    document.getElementById("pechera1vida").style.visibility = "hidden";
    document.getElementById("pechera1").innerHTML = '<img src="img/pechera1s.jpg" width="0px">' ;
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
        if (yapaso===1) {
            if (pechera===1) {
                document.getElementById("pechera1").innerHTML = '<img src="img/pechera1s.jpg" width="100px">' ;
            } else {
                document.getElementById("pechera1").innerHTML = '<img src="img/pechera1.jpg" width="100px">' ;
            }
            document.getElementById("pechera1vida").style.visibility = "visible";
        }
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
        document.getElementById("pechera1").innerHTML = '<img src="img/pechera1s.jpg" width="0px">' ;
        document.getElementById("pechera1vida").style.visibility = "hidden";
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

arma = 2

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
function seleccionarPechera1() {
    if (yapaso===1) {
        if (pechera===0) {
            if (vida===vidamax) {
                vida = vidax
            }
            vidamax +=45
            pechera = 1
            document.getElementById("pechera1").innerHTML = '<img src="img/pechera1s.jpg" width="100px">';
            document.getElementById("pechera").style.visibility = "visible";
            document.getElementById("vida").innerText = "Vida: "+vida+"/"+vidamax;
        } else {
            if (vida===vidamax) {
                vida = (vidamax-45)
                vidax = vidamax
            } else if (vida>vidamax-45) {
                vidax = vida
                vida = vidamax-45
            }
            vidamax -=45
            pechera = 0
            document.getElementById("pechera1").innerHTML = '<img src="img/pechera1.jpg" width="100px">';
            document.getElementById("pechera").style.visibility = "hidden";
            document.getElementById("vida").innerText = "Vida: "+vida+"/"+vidamax;
        }
    }
}