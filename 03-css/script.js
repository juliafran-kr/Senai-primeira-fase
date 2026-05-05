function verificarProvisoes(){
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
   document.getElementById("resultado").innerHTML = "fim do mês do juca: " + saldo.toFixed(2)
   }

   function mediaDasNotas(){
    let notaA, notaB
   let media
   notaA = Number(prompt("nota do primeiro semestre: "))
   notaB = Number(prompt("nota do segundo semestre : "))
   
   media = (notaA * 3.5 + notaB * 7.5) / 11
   alert("a média final foi: " + media)  
    document.getElementById("resultado").innerHTML = "média final: " + media.toFixed(2)
   }
   function mediaDasTresNotas(){
      let notaA, notaB, notaC 
      let media 
      notaA = Number(prompt("nota do primeiro trimestre: "))
      notaB = Number(prompt("nota do segundo trimestre: "))
      notaC = Number(prompt("nota do terceiro trimestre: "))
      media =(notaA * 2.00 + notaB * 3.00 +  notaC * 5.00) / 10
      alert("a média final foi: " + media)
      document.getElementById("resultado").innerHTML = "média final:" + media.toFixed(2)
   }
   

   function SalarioHoras(){
      let id, horasTrabalhadas
      let valorHora, salario
      id = Number(prompt("id do funcionário: "))
      horasTrabalhadas = Number(prompt("horas que trabalhadas: "))
      valorHora = Number(prompt("valor hora:"))
      salario = horasTrabalhadas * valorHora
      console.log("NUMBER =" + id.toFixed(2))
      console.log("SALARY = U$ " + salario.toFixed(2))
      document.getElementById("resultado").innerHTML = "<br>salario em horas: " + salario.toFixed(2) + "<br>ID: " + id.toFixed()
      }
      function SalarioComBonus(){
       let salarioFixo, totalVendas, comissao, totalMes
       comissao = 15/100
       salarioFixo = Number(prompt("qual o salario: "))
       totalVendas = Number(prompt("total de vendas: "))
       totalMes = totalVendas * comissao + salarioFixo
       console.log("TOTAL: R$" + totalMes.toFixed(2))
       document.getElementById("resultado").innerHTML = "total:" + totalMes.toFixed(2)
      }
   
    let resposta = document.getElementById("resultado")
   function verificarIdade(){
      let idade 
      idade = Number(prompt("digite sua idade: "))
      if(idade >= 18){
         resposta.innerHTML = "você é maior de idade"
      }else{
         resposta.innerHTML = "você é menor de idade"
      }
   }

   function adivinharNumero(){
    let numero = Math.ceil(Math.random()* 3) // 1..10
   //  console.log(numero) 
   //  numero = numero * 10
   // console.log(numero)
   //  numero = Math.ceil(numero)
   //  console.log(numero)
   let chute = Number(prompt("fala um número: "))
    if(chute == numero){
      resposta.innerHTML = "ACERTOU MISERÁVEL!"
    }else{
      resposta.innerHTML = "ERROU!!"
   }

   }