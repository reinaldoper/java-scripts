function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || fano.value > ano){
       window.alert("Erro") 
    }else {
        var fxex = document.getElementsByName("radios")
        var idade = ano -(fano.value)
        var genero = ""
        if (fxex[0].checked) {
            genero = "Homem"
        }else if (fxex[1].checked){
            genero = "Mulher"
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}