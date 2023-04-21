function validar(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value


if(usuario =="" && senha == ""){
    alert("PREENCHA TODOS OS CAMPOS")
} else {
    alert("ACESSO PERMITIDO")
    window.open('menu.html')
}
}

function calc(){
    let num1 = Number(prompt('Digite o primeiro numero'))
    let num2 = Number(prompt('Digite o segundo numero'))

    let op = Number(prompt(`Escolha uma opção: ${num1} e ${num2}. \n{1}Somar \n{2}Sub \n{3}MUlt \n{4}Div `))

    let msg= document.getElementById('msg')
}