izq = 100
alt = 576
vida = 100
vidaene = 100
vidaene2 = 250
vidaene3 = 100
arma = 1

function hacerDanio() {
    if (arma===1) {
        vidaene -= 60
    } else if (arma===2) {
        vidaene -= 80
    }
}
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
    if (izq<1200) {
        if (alt===576&&izq===325&&vidaene>0) {
            restarVida(40);
            if (vida<=0) {
                setTimeout(perder, 308);
            }
        } else if (alt===56&&izq===1150&&vidaene2>0) {
            restarVida(60);
            if (vida<=0) {
                setTimeout(perder, 308);
            }
        }
        izq += 75;
        document.getElementById("player").style.left = izq + "px";
        if (alt===446) {
            if (izq>=925) {
                setTimeout(bajar, 305);
            }
        } else if (alt===316) {
            if (izq>700) {
                setTimeout(bajar, 305);
            }
        } else if (alt===186) {
            if (izq>=625) {
                setTimeout(bajar, 305);
            }
        } else if (alt===56) {
            if (izq>=400&&izq<700) {
                setTimeout(bajar, 305);
            } else if (izq===1225){
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            }
        } else if(alt===-74) {
            if (izq===550) {
                document.getElementById("arma").style.background = "darkblue";
                document.getElementById("arma").style.border = 2+"px solid white";
                document.getElementById("arma").style.height = 8+"px";
                document.getElementById("arma").style.width = 45+"px";
                document.getElementById("armita").style.background = "";
                document.getElementById("armita").style.border = 0;
                document.getElementById("armita").style.height = 0;
                document.getElementById("armita").style.width = 0;
                document.getElementById("enemigo3").style.bottom = 556+"px";
                arma = 2
                
            } else if (izq===850) {
                setTimeout(bajar, 305);
            }
        }
    } else if (izq===1225&&alt===316&&vidaene<=0&&vidaene2<=0) {
        izq += 75;
        document.getElementById("player").style.left = izq + "px";
        setTimeout(siguientePantalla, 300)
    }
}
function moverAtras() {
    if (izq>25) {
        if (alt===576&&izq===400&&vidaene>0) {  // ataques enemigos
            restarVida(40);
            if (vida<=0) {
                setTimeout(perder, 308);
            }
        } else if (alt===56&&izq===1225) {      // ataques enemigos
            restarVida(60);
            if (vida<=0) {
                setTimeout(perder, 308);
            }
        }
        izq -= 75;
        document.getElementById("player").style.left = izq + "px";
        if (alt===446) {
            if (izq<=625) {
                setTimeout(bajar, 305);
            }
        } else if (alt===316) {
            if (izq<=475||izq===1150) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            } 
        } 
        else if (alt===186) {
            if (izq<=250) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(caertranca, 915);
                if (vida<=0) {
                    setTimeout(perder, 915);
                }
            }
        } 
        else if (alt===56) {
            if (izq===25) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            } else if (izq===775) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            }
        } else if(alt===-74) {
            if (izq<=175) {
                setTimeout(bajar, 305);
            }
        }
    }
}
function saltar() {
    alt -= 130;
    document.getElementById("player").style.top = alt + "px";
    if (alt===446) {
        if (izq>=925||izq<=625) {
            setTimeout(bajar, 305);
        }
    } else if (alt===316) {
        if (izq!==700) {
            setTimeout(bajar, 305);
        }
    } 
    else if (alt===186) {
        if (izq>=625) {
            setTimeout(bajar, 305);
        }
    }
     else if (alt===56) {
        if (izq>=400) {
            setTimeout(bajar, 305);
        }
    } else if(alt===-74) {
        if (izq<=175||izq>=850) {
            setTimeout(bajar, 305);
        }
    } else {
        setTimeout(bajar, 305);
    }
}
function bajar() {
    if (alt<576){
        // if (alt===56&&izq>=1075) {
        //     setTimeout(caer, 915);
        // }
        
        alt += 130;
        document.getElementById("player").style.top = alt + "px";
        // if (alt===446) {
        //     if (izq>=700||izq===25) {
        //         setTimeout(bajar, 305);
        //     }
        // } 
        // else 
        if (alt===446) {
            if (izq<=625) {
                bajar();
            }}
         else if (alt===316) {
            if (izq<=475) {
                bajar();
            }
        }
        //  else if (alt===56) {
        //     if (izq<=550) {
        //         setTimeout(bajar, 305);
        //     }
        // }
    }
}
function atacar() {
    document.getElementById("arma").style.left = 25+"px";
    setTimeout(volverArma, 305);
    if (izq===325&&alt===576){
        hacerDanio()
        document.getElementById("vidaene").innerText = "Vida: "+Math.max(vidaene, 0)+"/100";
        if (vidaene<=0) {
            document.getElementById("enemigo").style.height = 10+"px";
            document.getElementById("enemigo").style.width = 70+"px";
            document.getElementById("enemigo").style.top = 272+"px";
            document.getElementById("vidaene").style.bottom = 0;
            document.getElementById("vidaene").style.top = 13+"px";
            document.getElementById("vidaene").style.right = 0;
            document.getElementById("enemigo2").style.bottom = 340+"px";
            document.getElementById("armita").style.bottom = 519+"px";
            document.getElementById("enemigo3").style.bottom = 605+"px";
        }
    } else if (izq===1150&&alt===56){
        if (document.getElementById("arma").style.width===30+"px") {
            vidaene2 -= 60;
        } else if (document.getElementById("arma").style.width===45+"px"){
            vidaene2 -= 80;
        }
        document.getElementById("vidaene2").innerText = "Vida: "+Math.max(vidaene2, 0)+"/250";
        if (vidaene2<=0) {
            document.getElementById("enemigo2").style.height = 10+"px";
            document.getElementById("enemigo2").style.width = 70+"px";
            document.getElementById("enemigo2").style.bottom = 275+"px";
            document.getElementById("vidaene2").style.top = 10+"px";
            document.getElementById("enemigo3").style.bottom = 431+"px";
            document.getElementById("armaen").style.background = "";
            document.getElementById("armaen").style.border = 0;
            document.getElementById("armaen").style.height = 0;
            document.getElementById("armaen").style.width = 0;
        }
    } else if (alt===-74&&izq===625) {
        if (document.getElementById("arma").style.width===30+"px") {
            vidaene3 -= 60;
        } else if (document.getElementById("arma").style.width===45+"px"){
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
    // window.location.href = "file:///D:/Programacion/RPG/level2.html"
    ganar()
}
function ataqueEnemigo() {
    ataque()
    setTimeout(volverArmaEn, 305)
}
function ataque() {
    document.getElementById("armaen").style.right = 45 + "px";
    if (izq===1150&&alt===56) {
        restarVida(60)
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
setInterval(intervalo, 2500)