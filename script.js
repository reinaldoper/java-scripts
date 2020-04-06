alert("Bem vindo")
function carregar(){
var msg = document.getElementById("msg")
var imgem = document.getElementById("img")
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
 if (hora >= 0 && hora < 12){
     //bom dia
     imgem.src = "manha.png"
     document.body.style.background = "#BDBDBD"
 }else if (hora >= 12 && hora < 18){
     //boa tarde
     imgem.src = "tarde.png"
     document.body.style.background = "#FACC2E"
 }else{
     //boa noite
     imgem.src = "noite.png"
     document.body.style.background = "#0B0B3B"
 }
}