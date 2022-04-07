function showTime(){
    let date = new Date();
    let hora = date.getHours(); //0-23
    let minutos = date.getMinutes();//0-59
    let segundos = date.getSeconds();//0-59

    let fundo = background(hora);

// ajustar para os zero a esquerda aparecer
        if(hora < 10){
            hora = "0" + hora;
    }
        else if(minutos < 10){
            minutos = "0" + minutos;
    }
        else if(segundos < 10){
            segundos = "0" + segundos;
    }
        document.getElementById('relogio').innerHTML = `${hora} : ${minutos} : ${segundos}`
    }
setInterval(showTime,1000);

function background(time){
     if(time >= 0 && time < 12){
        document.body.style.background = "url(manha.jpg) no-repeat center/100% 100% ";
 } else if (time >= 12 && time < 18){
    document.body.style.background = "url(tarde.jpg) no-repeat center/100% 100% ";
 }else{
    document.body.style.background = "url(noite.jpg) no-repeat center/100% 100% ";
 }
}

  

    
