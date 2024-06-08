function carregar(){

var msg = document.getElementById
('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()



msg.innerHTML = `agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //bom dia
    img.src = 'pexels-edwardeyer-2228889.jpg'
    document.body.style.background = '#772906'
} else if (hora >= 12 && hora <= 18) {
    //boa tarde
    img.src = 'pexels-nihat-12231-69224.jpg'
    document.body.style.background = '#9E7260'
} else {
    //boa noite
    img.src = 'pexels-rbrigant44-771883.jpg'
    document.body.style.background = '#8A5877'
}

} 