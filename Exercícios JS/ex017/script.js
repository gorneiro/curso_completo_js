var bt = document.querySelector('input#bt')
bt.addEventListener('click', tabuada)


function tabuada () {
    var i = document.querySelector('input#txtn')    
    var tab = document.querySelector('select#tab')
    var I = Number.parseInt(i.value)
        
    if (i.value.length == 0) {

        window.alert('[ERRO] Digite algum numero!')

    } else {
        tab.innerHTML = '' //para limpar a tabuada toda vez que é feita
        for (var m = 1; m<=10; m++){

            var item = document.createElement('option')         
            item.text = `${I} x ${m} = ${I*m}`
            //item.value = `tab${m}`
            tab.appendChild(item)

            //var rm = I * m
            //r.innerHTML += `${I} x ${m} = ${rm}`           
        }      
    }   
        
}
