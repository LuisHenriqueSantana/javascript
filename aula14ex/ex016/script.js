function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passos = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = 'DADOS INSUFICIENTES'
        //window.alert('[ERRO] faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        if(p <= 0) {
            window.alert('Passo Inválido')
            p = 1
        }

        if(i < f) {
            //CONTAGEM CRESCENTE
             for(let c = i; c <= f;c +=p) {
            res.innerHTML += `\u{1F449} ${c}`
         }
        } else {
            //CONTAGEM REGRESSIVA
          for (let c = i; c >= f; c-=p) {
            res.innerHTML += `${c} \u{1F449}`
          }
        }
       res.innerHTML += `\u{1F3C1}`
    }
}