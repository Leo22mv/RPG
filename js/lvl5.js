izq = 25
alt = 576
vidax = 145
vida = localStorage.getItem("vida")
vidamax = 14500
vidaene = 50
vidaene2 = 0
vidaene3 = 0
vidaene4 = 0
eneizq = 824
yapaso = 0
yapaso1 = 0
yapaso2 = 0
pechera = 1
cayo = 0
casco = 0
botas = 0
aparecioene = 0
pincho1izq = 60
pincho2izq = 1710
atake = 0
pinchos1bot = 1199
pinchos2bot = 1224

setTimeout(actualizarVida,100)

function actualizarVida() {
    document.getElementById("vida").innerText = "Vida: "+Math.max(vida, 0)+"/"+vidamax;
}

function aparecerEnemigo() {
    document.getElementById("enemigo").style.top = 91 + "px" ;
    setTimeout(fsn1, 2000)
    setTimeout(fsn3, 1000)
}

function agarrarVidita() {
    vida = vidamax
    actualizarVida()
}

function fsn1() {
    setTimeout(ataqueEnemigo, 500)
}
function fsn2() {
    aparecioene = 1
}
function fsn3() {
    aparecioene = 1
}

function restarVida(cantidad) {
    vida -= cantidad
    document.getElementById("vida").innerText = "Vida: "+Math.max(vida, 0)+"/"+vidamax;
    if (vida<=0) {
        setTimeout(perder, 308);
    }
}
function hacerDanio() {
    if (arma===1) {
        vidaene -= 60
    } else {
        vidaene -= 80
    }
    document.getElementById("vidaene").innerText = "Vida: "+Math.max(vidaene, 0)+"/50"
    if (vidaene<=0) {
        caerPremio()
        document.getElementById("enemigo").style.top = -56 + "px";
        aparecioene = 0
        setTimeout(fsn2, 2000)
    }
}
function caertranca() {
    restarVida(20)
}
function caer() {
    restarVida(35)
}
function moverAdelante() {
    if (aparecioene===1){
        if (izq<1675) {
            if (izq===1300&&cayo===1) {
                document.getElementById("casquito").style.visibility = "hidden";
                seleccionarCasco1()
                yapaso = 1
            } else if (izq===1375&&cayo===1) {
                document.getElementById("botitas").style.visibility = "hidden";
                seleccionarBotas1()
                yapaso1 = 1
            } else if (izq===1450&&cayo===1) {
                document.getElementById("armita").style.visibility = "hidden";
                seleccionarArma3()
                yapaso2 = 1
            } else if (izq===1675&&vidaene<=0) {
                localStorage.setItem("vida", vida)
                setTimeout(siguientePantalla, 305);
            }
            izq += 75;
            document.getElementById("player").style.left = izq + "px";
            if (izq===925&&vidaene>0) {
                restarVida(200)
            }
        }
    } else if (aparecioene===0&&izq===25) {
        document.getElementById("vidita").style.visibility = "hidden";
        agarrarVidita()
        izq += 75;
        document.getElementById("player").style.left = izq + "px";
        setTimeout(aparecerEnemigo, 2000)
    }
}
function moverAtras() {
    if (aparecioene===1) {
        if (izq>25) {
            izq -= 75;
            document.getElementById("player").style.left = izq + "px";
        }
    }
}
function saltar() {
    if (aparecioene===1) {
        alt -= 130;
        document.getElementById("player").style.top = alt + "px";
        setTimeout(bajar, 305);
    }
}
function bajar() {
    setTimeout(actualizarAlt, 300)
    document.getElementById("player").style.top = (alt+130) + "px";
    // if (alt===316) {
    //     alt += 130;
    //     document.getElementById("player").style.top = (alt+130) + "px";
    // }
}
function actualizarAlt() {
    alt += 130;
}
function atacar() {
    if (aparecioene===1) {
        document.getElementById("arma").style.left = 25+"px";
        setTimeout(volverArma, 305);
        if (izq===850) {
            hacerDanio()
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
    // window.location.href = "index.html"
    location.reload()
}
function siguientePantalla() {
    window.location.href = "llevel5.html"
    // ganar()
}
function ataqueEnemigo() {
    ataque()
    setTimeout(volverArmaEn, 500)
}
function ataque() {
    document.getElementById("armaen").style.bottom = 173 + "px";
}
function volverArmaEn() {
    document.getElementById("armaen").style.bottom = 133 + "px";
    if (atake===0) {
        setTimeout(ataque1, 500)
    } else if (atake===1) {
        setTimeout(ataque2, 500)
    } else if (atake===3) {
        setTimeout(ataque1, 500)
    } else if (atake===4) {
        setTimeout(ataque4, 500)
    }
}
pas = 0
function ataque1() {
    if (atake===0) {
        atake = 1
    } else if (atake===3) {
        atake = 4
    }
    document.getElementById("pincho2").style.left = 1710 + "px";
    document.getElementById("pincho1").style.visibility = "visible";
    setTimeout(moverPincho1, 700)
    setTimeout(moverPincho1, 1400)
    setTimeout(moverPincho1, 2100)
    setTimeout(moverPincho1, 2800)
    setTimeout(moverPincho1, 3500)
    setTimeout(moverPincho1, 4200)
    setTimeout(moverPincho1, 4900)
    setTimeout(moverPincho1, 5600)
    setTimeout(moverPincho1, 6300)
    setTimeout(moverPincho1, 7000)
    setTimeout(moverPincho1, 7700)
    setTimeout(moverPincho1, 8400)
    setTimeout(moverPincho1, 9100)
    setTimeout(moverPincho1, 9800)
    setTimeout(moverPincho1, 10500)
    setTimeout(moverPincho1, 11200)
    setTimeout(moverPincho1, 11900)
    setTimeout(moverPincho1, 12600)
    setTimeout(moverPincho1, 13300)
    setTimeout(moverPincho1, 14000)
    setTimeout(moverPincho1, 14700)
    setTimeout(moverPincho1, 15400)
    setTimeout(cambiarPinchos, 16100)
}
function moverPincho1() {
    pincho1izq += 75
    document.getElementById("pincho1").style.left = pincho1izq + "px";
    pas++
    if (pas===1&&izq===100&&alt===576) {
        restarVida(30)
    } else if (pas===2&&izq===175&&alt===576) {
        restarVida(30) 
    } else if (pas===3&&izq===250&&alt===576) {
        restarVida(30) 
    } else if (pas===4&&izq===325&&alt===576) {
        restarVida(30) 
    } else if (pas===5&&izq===400&&alt===576) {
        restarVida(30) 
    } else if (pas===6&&izq===475&&alt===576) {
        restarVida(30) 
    } else if (pas===7&&izq===550&&alt===576) {
        restarVida(30) 
    } else if (pas===8&&izq===625&&alt===576) {
        restarVida(30) 
    } else if (pas===9&&izq===700&&alt===576) {
        restarVida(30) 
    } else if (pas===10&&izq===775&&alt===576) {
        restarVida(30) 
    } else if (pas===11&&izq===850&&alt===576) {
        restarVida(30) 
    } else if (pas===12&&izq===925&&alt===576) {
        restarVida(30) 
    } else if (pas===13&&izq===1000&&alt===576) {
        restarVida(30) 
    } else if (pas===14&&izq===1075&&alt===576) {
        restarVida(30) 
    } else if (pas===15&&izq===1150&&alt===576) {
        restarVida(30) 
    } else if (pas===16&&izq===1225&&alt===576) {
        restarVida(30) 
    } else if (pas===17&&izq===1300&&alt===576) {
        restarVida(30)
    } else if (pas===18&&izq===1375&&alt===576) {
        restarVida(30) 
    } else if (pas===19&&izq===1450&&alt===576) {
        restarVida(30) 
    } else if (pas===20&&izq===1525&&alt===576) {
        restarVida(30) 
    } else if (pas===21&&izq===1600&&alt===576) {
        restarVida(30) 
    } else if (pas===22&&izq===1675&&alt===576) {
        restarVida(30) 
    }
}
function cambiarPinchos() {
    document.getElementById("pincho1").style.visibility = "hidden";
    document.getElementById("pincho2").style.visibility = "visible";
    setTimeout(ataque1p2, 700)
}
function ataque1p2() {
    setTimeout(moverPincho2, 700)
    setTimeout(moverPincho2, 1400)
    setTimeout(moverPincho2, 2100)
    setTimeout(moverPincho2, 2800)
    setTimeout(moverPincho2, 3500)
    setTimeout(moverPincho2, 4200)
    setTimeout(moverPincho2, 4900)
    setTimeout(moverPincho2, 5600)
    setTimeout(moverPincho2, 6300)
    setTimeout(moverPincho2, 7000)
    setTimeout(moverPincho2, 7700)
    setTimeout(moverPincho2, 8400)
    setTimeout(moverPincho2, 9100)
    setTimeout(moverPincho2, 9800)
    setTimeout(moverPincho2, 10500)
    setTimeout(moverPincho2, 11200)
    setTimeout(moverPincho2, 11900)
    setTimeout(moverPincho2, 12600)
    setTimeout(moverPincho2, 13300)
    setTimeout(moverPincho2, 14000)
    setTimeout(moverPincho2, 14700)
    setTimeout(moverPincho2, 15400)
    setTimeout(terminarAtaque1, 16100)
}
function moverPincho2() {
    pas--
    pincho2izq -= 75
    document.getElementById("pincho2").style.left = pincho2izq + "px";
    if (pas===0&&izq===100&&alt===576) {
        restarVida(30)
    } else if (pas===1&&izq===175&&alt===576) {
        restarVida(30) 
    } else if (pas===2&&izq===250&&alt===576) {
        restarVida(30) 
    } else if (pas===3&&izq===325&&alt===576) {
        restarVida(30) 
    } else if (pas===4&&izq===400&&alt===576) {
        restarVida(30) 
    } else if (pas===5&&izq===475&&alt===576) {
        restarVida(30) 
    } else if (pas===6&&izq===550&&alt===576) {
        restarVida(30) 
    } else if (pas===7&&izq===625&&alt===576) {
        restarVida(30) 
    } else if (pas===8&&izq===700&&alt===576) {
        restarVida(30) 
    } else if (pas===9&&izq===775&&alt===576) {
        restarVida(30) 
    } else if (pas===10&&izq===850&&alt===576) {
        restarVida(30) 
    } else if (pas===11&&izq===925&&alt===576) {
        restarVida(30) 
    } else if (pas===12&&izq===1000&&alt===576) {
        restarVida(30) 
    } else if (pas===13&&izq===1075&&alt===576) {
        restarVida(30) 
    } else if (pas===14&&izq===1150&&alt===576) {
        restarVida(30) 
    } else if (pas===15&&izq===1225&&alt===576) {
        restarVida(30) 
    } else if (pas===16&&izq===1300&&alt===576) {
        restarVida(30)
    } else if (pas===17&&izq===1375&&alt===576) {
        restarVida(30) 
    } else if (pas===18&&izq===1450&&alt===576) {
        restarVida(30)
    } else if (pas===19&&izq===1525&&alt===576) {
        restarVida(30) 
    } else if (pas===20&&izq===1600&&alt===576) {
        restarVida(30) 
    } else if (pas===21&&izq===1675&&alt===576) {
        restarVida(30) 
    }
}
function terminarAtaque1() {
    document.getElementById("pincho2").style.visibility = "hidden";
    document.getElementById("pincho1").style.left = 60 + "px";
    setTimeout(fsn1, 500)
    pincho1izq = 60
    pincho2izq = 1710
}

function ataque2() {
    document.getElementById("pinchos1").style.visibility = "visible";
    atake = 2
    setTimeout(moverPinchos1, 700)
    setTimeout(moverPinchos1, 1400)
    setTimeout(moverPinchos1, 2100)
    setTimeout(moverPinchos1, 2800)
    setTimeout(moverPinchos1, 3500)
    setTimeout(moverPinchos1, 4200)
    setTimeout(terminarAtaque2, 4900)
}
function moverPinchos1() {
    pinchos1bot -= 130
    document.getElementById("pinchos1").style.bottom = pinchos1bot + "px" ;
    if (pinchos1bot===419&&izq!==250) {
        restarVida(65)
    }
}
function terminarAtaque2() {
    // document.getElementById("pinchos1").style.visibility = "hidden";
    setTimeout(ataque3, 3000)
}

function ataque3() {
    pinchos1bot = 1199
    document.getElementById("pinchos1").style.bottom = 1199 + "px";
    document.getElementById("enemigo").style.top = -61 + "px" ;
    document.getElementById("enemigo").style.left = 835 + "px" ;
    setTimeout(ataque3p2, 1500)
}
function ataque3p2() {
    atake = 3
    document.getElementById("enemigo").style.top = 91 + "px" ;
    if (izq===850) {
        restarVida(150)
    }
    setTimeout(ataqueEnemigo, 2000)
}

function ataque4() {
    document.getElementById("pinchos2").style.visibility = "visible";
    atake = 0
    setTimeout(moverPinchos2, 700)
    setTimeout(moverPinchos2, 1400)
    setTimeout(moverPinchos2, 2100)
    setTimeout(moverPinchos2, 2800)
    setTimeout(moverPinchos2, 3500)
    setTimeout(moverPinchos2, 4200)
    setTimeout(terminarAtaque4, 4900)
}
function moverPinchos2() {
    pinchos2bot -= 130
    document.getElementById("pinchos2").style.bottom = pinchos2bot + "px" ;
    if (pinchos2bot===444&&izq<550||izq>700&&pinchos2bot===444&&izq<1225||pinchos2bot===444&&izq>1225&&izq<1675) {
        restarVida(65)
    }
}
function terminarAtaque4() {
    document.getElementById("pinchos2").style.visibility = "hidden";
    setTimeout(ataque5, 3000)
}

function ataque5() {
    pinchos2bot = 1224
    document.getElementById("pinchos2").style.bottom = 1224 + "px";
    document.getElementById("enemigo").style.top = -61 + "px" ;
    document.getElementById("enemigo").style.left = 900 + "px" ;
    setTimeout(ataque5p2, 1500)
}
function ataque5p2() {
    atake = 0
    document.getElementById("enemigo").style.top = 91 + "px" ;
    if (izq===925) {
        restarVida(150)
    }
    setTimeout(ataqueEnemigo, 2000)
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

// setInterval(intervalo, 5500)
// setTimeout(x, 2500)
// setTimeout(x1, 4500)
// setInterval(intervalo0, 2000)

inventarioAbierto = 0

function abrirInventario() {
    if (aparecioene===1) {
        document.getElementById("arma1danio").style.visibility = "hidden";
        document.getElementById("arma2danio").style.visibility = "hidden";
        document.getElementById("pechera1vida").style.visibility = "hidden";
        document.getElementById("pechera1").innerHTML = '<img src="img/pechera1s.jpg" width="0px">' ;
        document.getElementById("casco1").innerHTML = '<img src="img/casco1s.jpg" width="0px">' ;
        document.getElementById("botas1").innerHTML = '<img src="img/botas1s.jpg" width="0px">' ;
        document.getElementById("arma3").innerHTML = '<img src="img/arma3s.jpg" width="0px">' ;
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
        if (yapaso2===0) {
            if (arma===2) {
                document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="100px">'
                document.getElementById("arma2").innerHTML = '<img src="img/arma2s.jpg" width="100px">'
            } else if (arma===1){
                document.getElementById("arma1").innerHTML = '<img src="img/arma1s.jpg" width="100px">'
                document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="100px">'
            }
        } else {
            if (arma===2) {
                document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="100px">'
                document.getElementById("arma2").innerHTML = '<img src="img/arma2s.jpg" width="100px">'
                document.getElementById("arma3").innerHTML = '<img src="img/arma3.jpg" width="100px">'
            } else if (arma===1){
                document.getElementById("arma1").innerHTML = '<img src="img/arma1s.jpg" width="100px">'
                document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="100px">'
                document.getElementById("arma3").innerHTML = '<img src="img/arma3.jpg" width="100px">'
            } else {
                document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="100px">'
                document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="100px">'
                document.getElementById("arma3").innerHTML = '<img src="img/arma3s.jpg" width="100px">'
            }
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
        document.getElementById("arma3").innerHTML = '<img src="img/arma3.jpg" width="0px">'
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
        if (yapaso===1) {
            document.getElementById("casco1vida").style.visibility = "visible";
            if (casco===0) {
                document.getElementById("casco1").innerHTML = '<img src="img/casco1.jpg" width="100px">';
            } else {
                document.getElementById("casco1").innerHTML = '<img src="img/casco1s.jpg" width="100px">';
            }
        }
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
        document.getElementById("pechera1vida").style.visibility = "visible";
        if (pechera===1) {
            document.getElementById("pechera1").innerHTML = '<img src="img/pechera1s.jpg" width="100px">' ;
        } else {
            document.getElementById("pechera1").innerHTML = '<img src="img/pechera1.jpg" width="100px">' ;
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
        if (yapaso1===1) {
            document.getElementById("botas1vida").style.visibility = "visible";
            if (botas===0) {
                document.getElementById("botas1").innerHTML = '<img src="img/botas1.jpg" width="100px">';
            } else {
                document.getElementById("botas1").innerHTML = '<img src="img/botas1s.jpg" width="100px">';
            }
        }
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
    document.getElementById("botas").style.bottom = 34+"px";
    document.getElementById("casco").style.bottom = 108+"px";
}
function seleccionarArma2() {
    arma = 2
    document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="100px">'
    document.getElementById("arma2").innerHTML = '<img src="img/arma2s.jpg" width="100px">'
    document.getElementById("arma").style.background = "darkblue";
    document.getElementById("arma").style.border = 2+"px solid white";
    document.getElementById("arma").style.height = 8+"px";
    document.getElementById("arma").style.width = 45+"px";
    document.getElementById("botas").style.bottom = 32+"px";
    document.getElementById("casco").style.bottom = 106+"px";
}
function seleccionarArma3() {
        if (armasAbiertas===1) {
            document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="100px">'
        document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="100px">'
        document.getElementById("arma3").innerHTML = '<img src="img/arma3s.jpg" width="100px">'
        }
        document.getElementById("arma").style.background = "white";
        document.getElementById("arma").style.border = 2+"px solid black";
        document.getElementById("arma").style.height = 8+"px";
        document.getElementById("arma").style.width = 40+"px";
        // document.getElementById("botas").style.bottom = 32+"px";
        // document.getElementById("casco").style.bottom = 106+"px";
}
function seleccionarPechera1() {
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
function seleccionarCasco1() {
    if (casco===0) {
        if (vida===vidamax) {
            vida = vidax
        }
        vidamax +=35
        casco = 1
        if (cascosAbiertas===1) {
            document.getElementById("casco1").innerHTML = '<img src="img/casco1s.jpg" width="100px">';
        }
        document.getElementById("casco").style.visibility = "visible";
        document.getElementById("vida").innerText = "Vida: "+vida+"/"+vidamax;
    } else {
        if (vida===vidamax) {
            vida = (vidamax-35)
            vidax = vidamax
        } else if (vida>vidamax-35) {
            vidax = vida
            vida = vidamax-35
        }
        vidamax -=35
        casco = 0
        if (cascosAbiertas===1) {
            document.getElementById("casco1").innerHTML = '<img src="img/casco1.jpg" width="100px">';
        }
        document.getElementById("casco").style.visibility = "hidden";
        document.getElementById("vida").innerText = "Vida: "+vida+"/"+vidamax;
    }
}
function seleccionarBotas1() {
    if (botas===0) {
        if (vida===vidamax) {
            vida = vidax
        }
        vidamax +=20
        botas = 1
        if (botasAbiertas===1) {
            document.getElementById("botas1").innerHTML = '<img src="img/botas1s.jpg" width="100px">';
        }
        document.getElementById("botas").style.visibility = "visible";
        document.getElementById("vida").innerText = "Vida: "+vida+"/"+vidamax;
    } else {
        if (vida===vidamax) {
            vida = (vidamax-20)
            vidax = vidamax
        } else if (vida>vidamax-20) {
            vidax = vida
            vida = vidamax-20
        }
        vidamax -=20
        botas = 0
        document.getElementById("botas1").innerHTML = '<img src="img/botas1.jpg" width="100px">';
        document.getElementById("botas").style.visibility = "hidden";
        document.getElementById("vida").innerText = "Vida: "+vida+"/"+vidamax;
    }
}

function caerPremio() {
    document.getElementById("casquito").style.bottom = 12 + "px" ;
    document.getElementById("botitas").style.bottom = 118 + "px" ;
    document.getElementById("armita").style.bottom = 310 + "px" ;
    cayo = 1
}