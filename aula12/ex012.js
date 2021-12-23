var agora = new Date () // Declarei a variavel agora, para conseguir pegar informações de data e hora do computador
var hora = agora.getHours() //Declarei hora para usar o valor convertido do equipamento.
console.log(`Agora são exatamente ${hora} horas.`) 
if(hora<12) {
    console.log('Bom dia!')

} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}