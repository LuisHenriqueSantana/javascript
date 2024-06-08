function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')


    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'homem' 
            if (idade >= 0 && idade < 13){
                img.setAttribute('src','homem-c.jpg')
            } else if (idade >= 13 && idade < 40){
                img.setAttribute('src','homem-j.jpg')
            } else {
                img.setAttribute('src','homem-v.jpg')
            } 
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 13){
                img.setAttribute('src','mulher-c.jpg')
            } else if (idade >= 13 && idade < 40){
                img.setAttribute('src','mulher-j.jpg')
            } else {
                img.setAttribute('src','mulher-v.jpg')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}