    var bt1 = document.querySelector('input#add')
    bt1.addEventListener('click', adicionar)
    var bt2 = document.querySelector('input#end')
    bt2.addEventListener('click', finalizar)
    const n = document.querySelector('input#numero')
    const TAB = document.querySelector('select#saida')
    const res = document.querySelector('div#res')
    const NR = [ ]

    function isNumero(n) {
        if (Number(n)>= 1 && Number(n) <=100 ) {
            return true
        } else {
            return false
        }
    }

    function inLista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }

    function adicionar () {
        if (isNumero(n.value) && !inLista(n.value, NR)){
            NR.push(Number(n.value))
            var item = document.createElement('option')
            item.text = `O valor é ${n.value}`
            TAB.appendChild(item)
            res.innerHTML = ''
            //window.alert('tudo ok!')            
        } else {
            window.alert('Valor invalido!')
        }
        n.value = ''
        n.focus()
    }
     
function finalizar (){  
        if (NR.length == 0) {
            window.alert('Adicionar valores antes de finalizar')
        } else {
            let total = NR.length
            let maior = NR [0]
            let menor = NR [0]
            let soma  = 0 
            let media = 0
            for (let pos in NR){
                soma += NR[pos]
                if (NR[pos] > maior)
                maior = NR [pos]
                if (NR[pos] < menor)
                menor = NR [pos]
            }
            media = soma / total
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
            res.innerHTML += `<p>O maior numero informado foi ${maior}</p>`
            res.innerHTML += `<p>O menor numero informado foi ${menor}</p>` 
            res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
            res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
        }
}