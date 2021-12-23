
var r = document.querySelector('div#res')
var b = document.querySelector('input#cont')
b.addEventListener('click', contar)

function contar (){ 
    var txn1 = document.querySelector('input#n1')
    var txn2 = document.querySelector('input#n2')
    var txn3 = document.querySelector('input#n3')
    var i = Number.parseInt(txn1.value)
    var f = Number.parseInt(txn2.value)
    var p = Number.parseInt(txn3.value) 

    if (i < f) {
        for (var c = i; c <= f; c += p){
              
            r.innerHTML += ` ${c} \u{1F449}` 
            
        } r.innerHTML+= `\u{1F47D}` 
    } else {
        for (var c = i; c >= f; c -= p){
              
            r.innerHTML += ` ${c} \u{1F449}` 
            
        } r.innerHTML+= `\u{1F47D}`
        
    }

    
}


/*
var i = 1
var f = 12
var p = 2

for (; i < f; i += p){
    console.log (i)
}
*/