izq = 100
alt = 576
vida = 100
vidaene = 100
vidaene2 = 100

function restarVida(cantidad) {
    vida -= cantidad
    document.getElementById("vida").innerText = "Vida: "+Math.max(vida, 0)+"/100";
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
    if (izq<1200) {
        if (alt===576&&izq===925&&vidaene>0) {
            restarVida(40);
            if (vida<=0) {
                setTimeout(perder, 308);
            }
        } else if (alt===56&&izq===1150&&vidaene2>0) {
            restarVida(40);
            if (vida<=0) {
                setTimeout(perder, 308);
            }
        }
        izq += 75;
        document.getElementById("player").style.left = izq + "px";
        if (alt===446) {
            if (izq===700) {
                setTimeout(bajar, 305);
            }
        } else if (alt===316) {
            if (izq===1075) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            }
        } else if (alt===186) {
            if (izq>=700) {
                setTimeout(bajar, 305);
            }
        }
    } else if (izq===1225&&alt===56&&vidaene<=0&&vidaene2<=0) {
        izq += 75;
        document.getElementById("player").style.left = izq + "px";
        setTimeout(siguientePantalla, 300)
    }
}
function moverAtras() {
    if (izq>25) {
        if (alt===576&&izq===1000&&vidaene>0) {  // ataques enemigos
            restarVida(40);
            if (vida<=0) {
                setTimeout(perder, 308);
            }
        } else if (alt===56&&izq===1225) {      // ataques enemigos
            restarVida(40);
            if (vida<=0) {
                setTimeout(perder, 308);
            }
        }
        izq -= 75;
        document.getElementById("player").style.left = izq + "px";
        if (alt===446) {
            if (izq===25) {
                setTimeout(bajar, 305);
            }
        } else if (alt===316) {
            if (izq<475) {
                setTimeout(bajar, 305);
            } 
        } else if (alt===186) {
            if (izq===25) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(caertranca, 915);
                if (vida<=0) {
                    setTimeout(perder, 915);
                }
            }
        } else if (alt===56) {
            if (izq<=550) {
                setTimeout(bajar, 305);
            }
        }
    }
}
function saltar() {
    alt -= 130;
    document.getElementById("player").style.top = alt + "px";
    if (alt===446) {
        if (izq>=700||izq===25) {
            setTimeout(bajar, 305);
        }
    } else if (alt===316) {
        if (izq<475||izq>1000) {
            setTimeout(bajar, 305);
        }
    } else if (alt===186) {
        if (izq>=700) {
            setTimeout(bajar, 305);
        }
    } else if (alt===56) {
        if (izq<=550) {
            setTimeout(bajar, 305);
        }
    } else {
        setTimeout(bajar, 305);
    }
}
function bajar() {
    if (alt<576){
        if (alt===56&&izq>=1075) {
            setTimeout(caer, 915);
        }
        alt += 130;
        document.getElementById("player").style.top = alt + "px";
        if (alt===446) {
            if (izq>=700||izq===25) {
                setTimeout(bajar, 305);
            }
        } else if (alt===316) {
            if (izq<475||izq>1000) {
                setTimeout(bajar, 305);
            }
        } else if (alt===186) {
            if (izq>=700) {
                setTimeout(bajar, 305);
            }
        } else if (alt===56) {
            if (izq<=550) {
                setTimeout(bajar, 305);
            }
        }
    }
}
function atacar() {
    document.getElementById("arma").style.left = 25+"px";
    setTimeout(volverArma, 305);
    if (izq===925&&alt===576){
        vidaene -= 60;
        document.getElementById("vidaene").innerText = "Vida: "+Math.max(vidaene, 0)+"/100";
        if (vidaene<=0) {
            document.getElementById("enemigo").style.height = 10+"px";
            document.getElementById("enemigo").style.width = 70+"px";
            document.getElementById("enemigo").style.top = 332+"px";
            document.getElementById("vidaene").style.bottom = 0;
            document.getElementById("vidaene").style.top = 13+"px";
            document.getElementById("vidaene").style.right = 0;
            document.getElementById("enemigo2").style.bottom = 280+"px";
        }
    }
    if (izq===1150&&alt===56){
        vidaene2 -= 60;
        document.getElementById("vidaene2").innerText = "Vida: "+Math.max(vidaene2, 0)+"/100";
        if (vidaene2<=0) {
            document.getElementById("enemigo2").style.height = 10+"px";
            document.getElementById("enemigo2").style.width = 70+"px";
            document.getElementById("enemigo2").style.bottom = 215+"px";
            document.getElementById("vidaene2").style.top = 10+"px";
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
    vida = 100
    document.getElementById("vida").innerText = "Vida: "+Math.max(vidaene, 0)+"/100";
    document.getElementById("player").style.top = 576+"px";
    document.getElementById("player").style.left = 100+"px";
}
function siguientePantalla() {
    window.location.href = "level2.html"
}