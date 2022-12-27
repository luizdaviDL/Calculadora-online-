/*
var a = window.document.getElementById('car')
a.addEventListener('click', opera)
a.addEventListener('mouseenter', enter)
a.addEventListener('mouseout', sair)

function opera(){
    a.innerText = 'clicou'
}

function enter(){
    a.innerText = 'entrou'
}

function sair(){
    a.innerText = 'saiu'
}*/



function somar(){
    var n1 = Number(document.getElementById("primeiro").value)
    var n2 = Number(document.getElementById("segundo").value)
    var so = n1+n2
    var resul = document.getElementById('resultado')
    resul.innerText = `A soma vale ${so}`

}

function subtrair(){
    var n1 = Number(document.getElementById("primeiro").value)
    var n2 = Number(document.getElementById("segundo").value)
    var so = n1-n2
    var resul = document.getElementById('resultado')
    resul.innerText = `A subtração vale ${so}`

}

function dividir(){
    var n1 = Number(document.getElementById("primeiro").value)
    var n2 = Number(document.getElementById("segundo").value)
    var so = n1/n2
    var resul = document.getElementById('resultado')
    resul.innerText = `A divisão vale ${so}`

}

function multi(){
    var n1 = Number(document.getElementById("primeiro").value)
    var n2 = Number(document.getElementById("segundo").value)
    var so = n1*n2
    var resul = document.getElementById('resultado')
    resul.innerText = `A multiplicação vale ${so}`

}

