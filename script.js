function geracao(idade){
    if(idade > 0 && idade < 10 ){
        return "crianca"
    }else if(idade < 21){
        return "jovem"
    }else if(idade <= 60){
        return "adulto"
    }else if(idade > 60){
        return "idoso"
    }
}

function verificar(){
    var data = new Date();
    var ano = data.getFullYear();

    var fano = document.getElementById("txtano");
    var res = window.document.getElementById("res");
    var fsex = document.getElementsByName('radsex')
    var genero = ""

    console.log(fsex)
    if(fsex[0].checked){
        genero = "Masculino"
    }else if(fsex[1].checked){
        genero = "Feminino"
    }


    if(fano.value.length == 0 || fano.value > ano){
        window.alert("verfique os dados e tente novamente!")
    } else{
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.setAttribute('src',`${genero}-${geracao(idade)}.jpg`)
        res.innerHTML = `Detectamos: ${genero} com  ${idade} anos`;
        res.appendChild(img)
    }

   
}

