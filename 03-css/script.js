function verificarProvisões(){
let marujos, comida
let comidaPorMarujo
marujos = Number(prompt("quantidade de marujos:"))
comida = Number(prompt("quilos de comida:"))
comidaPorMarujo = comida / marujos
if(marujos >= 10 && comidaPorMarujo >= 1.5){ // ||
      alert("Provisões suficientes. Rumo ao horizonte!")
       document.getElementById('resultado').innerHTML = "Provisões suficientes. Rumo ao horizonte!"
}else{
      alert("Algo está errado. Posseidom não quer ninguém no mar hoje.")
      document.getElementById('resultado').innerHTML = "Algo está errado. Posseidom não quer ninguém no mar hoje."
}


}

function calcularPrecoBrique(){
   let precoCompra, precoVenda
   precoCompra = Number(prompt("preço de compra: "))
   precoVenda = precoCompra * 3 
   console.log("preço para venda: R$ " + precoVenda.toFixed(2))
   alert("preço para venda: R$" + precoVenda.toFixed(2))
   
   document.getElementById("resultado").innerHTML = "preço para venda: R$" + precoVenda.toFixed(2)
}

function celularChances(){
let olhouOcelular, chance
olhouOcelular = Number(prompt("olhou o celular: "))
chance = (0.1 / (1 + 500 * olhouOcelular)) * 100
alert("chance de ser aprovado: " + chance.toFixed(2))

document.getElementById("resultado").innerHTML = "chance de ser aprovado: " + chance.toFixed(2)
}
   function salarioManoJuca(){
      let luz, agua, moradia, internet, gasolina, series, telefone, outros
let salario
let saldo 
salario = Number(prompt("salario:"))
luz = Number(prompt("conta de luz:"))
agua = Number(prompt("conta de agua:"))
moradia = Number(prompt("aluguel:"))
internet = Number(prompt("conta da internet:"))
gasolina = Number(prompt("gastou em gasolina no mês:"))
series = Number(prompt("gastou em streamers:"))
telefone = Number(prompt("conta da TIM:"))
outros = Number(prompt("reserva pra corrida de monâco: "))
saldo = Number(prompt)
saldo = salario - luz - moradia - internet - gasolina - series - telefone - outros
alert("sobrou para o juca ser feliz: " + saldo)
   document.getElementById("resultado:").innerHTML = "fim do mês do juca: " + saldo.toFixed(2)
   }