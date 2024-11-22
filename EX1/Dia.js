function carregar(){
    var msg = document.getElementById(`msj`)
    var imag = document.getElementById(`jjj`)
//espaco//
    var data = new Date()
    var hora = data.getHours()
    var hora2 = data.getMinutes()
    var hora3 = data.getSeconds()
    msg.innerHTML = `Agora São ${hora}:${hora2}:${hora3}`
//espaco//
    if(hora >= 0 && hora < 12){
        imag.src = "Imagens/manha.jpg"
        document.body.style.background = `#4192C1`
    }
    else if(hora >= 12 && hora < 18){
        imag.src = "Imagens/tarde.jpg"
        document.body.style.background = `#ECB23F`
    }
    else if(hora >= 18 && hora < 22){
        imag.src = "Imagens/noiteM.jpg"
        document.body.style.background = `#0D141C`
        document.body.style.color = `#ffffff`
    }
}