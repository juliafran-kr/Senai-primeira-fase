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
    let numero = Math.ceil(Math.random()* 10) // 1..10
    //console.log(numero) 
   //numero = numero * 10
   // console.log(numero)
     //numero = Math.ceil(numero)
    // console.log(numero)
   let chute = Number(prompt("fala um número: "))
    if(chute == numero){
      resposta.innerHTML = "ACERTOU MISERÁVEL!"
    }else{
      resposta.innerHTML = "ERROU!!"
   }

   }

   function mostrarDiaDaSemana(){
      let numero, dia 
      numero = Number(prompt("digite o numero: "))
      if(numero == 1){
           dia = "domingo"
      }else if(numero == 2){
         dia = "segunda"      
      }else if(numero == 3){
         dia = "terça"

      }else if(numero == 4){
         dia = "quarta"

      }else if(numero == 5){
         dia = "quinta"
      }else if(numero == 6){
         dia = "sexta"
      }else if(numero == 7){
         dia = "sabado"
      }else{
         dia = "erro "
      }
      document.getElementById("resultado").innerHTML = dia 
   }
   function calcularParImpar(){
      numero = Number(prompt("digite o numero: "))
      if(numero%2 == 0){
         alert(" é par")
      }else{
         alert("é impar")
      }
       
   }

   function calculoDasPecas(){
      let codigo1,numero1,codigo2,numero2,valorunitario1, valorunitario2, valortotal1,valortotal2,valortotal
     codigo1 = Number(prompt("qual o codigo da peça 1:"))
    numero1 = Number(prompt("quantas peças pegou 1:"))
    valorunitario1= Number(prompt("valor unitario 1:"))
      valortotal1 = numero1 * valorunitario1
    codigo2 = Number(prompt("qual o codigo da peça 2:"))
    numero2 = Number(prompt("quantas peças pegou 2:"))
    valorunitario2 = Number(prompt("valor unitario 2:"))
    valortotal2= numero2 * valorunitario2
    valortotal = valortotal1 + valortotal2
    console.log("TOTAL: R$" + valortotal.toFixed(2))
       document.getElementById("resultado").innerHTML = "total:" + valortotal.toFixed(2)
   }

   function revelarRecreio(){
      document.getElementById("resultado").innerHTML = "<br>inicicio: 20:30" + "<br>fim: 20:45" + "<br>chamada: 20:50"
      
   }
   function consumoCarro(){
      let distanciaPercorrida, totalCombustivel, consumoMedio
      distanciaPercorrida = Number(prompt("qual foi a distancia percorrida: "))
      totalCombustivel = Number(prompt("quanto de combustivel gastou: "))
      consumoMedio = distanciaPercorrida / totalCombustivel 
      console.log("consumo médio: " + consumoMedio.toFixed(3))
      document.getElementById("resultado").innerHTML = "consumo médio total: " + consumoMedio.toFixed(3)
       
   }

   function idadeCachorro(){
      let idade, idadeHumana
      idade = Number(prompt("qual a idade do bidu: "))
      idadeHumana = idade * 7
      if(idadeHumana > 60){
         alert("Bidu precisa se aposentar")

      }else{
         alert("Bidu pode descansar")
      }

   }
   function IMCPESOeALTURA(){
      let peso, altura, imc 
      peso = Number(prompt("qual o seu peso: "))
      altura = Number(prompt("qual a sua altura: "))
      imc = peso / (altura * altura)
      if(imc < 25){
         alert("seu indice esta abaixo de 25")
      }else{
         alert("seu indice esta acima de 25   ")
      }
   }

 function refatoracaoDonaBete(){
   let totalBruto, valorPrem, presentes, comissao, lucroFinal, lucroMeta
   totalBruto = Number(prompt("faturamento do valor bruto: R$ "))
   valorPrem = Number(prompt("faturamento do valor pago nas premiações: R$"))
   presentes = Number(prompt("valor gasto com presentes: R$"))
   comissao = Number(prompt("valor das comissões: R$"))
   lucroMeta = Number(prompt("qual é a meta do lucro?"))
   lucroFinal = totalBruto - valorPrem - presentes - comissao
   console.log("lucro liquido da dona bete foi de: R$ " + lucroFinal.toFixed(2))
   if(lucroFinal >= lucroMeta){
        alert("parabens a meta foi batida")
   }else{
      alert("a meta nao foi batida infelizmente")
   }
 }

 function valeTroca(){
   let preco, valeTroca, quantidade
   preco = Number(prompt("preço dos pares de calçados trocados: R$ "))
   quantidade = Number(prompt("quantidade de pares trocados: R$ "))
   if(quantidade > 100){
      alert("limite de 100 pares excedidos")
      alert("por favor, entrar em contato diretamente com a fábrica.")
   }else if(preco <= 0 && quantidade <= 0){
      alert("o preco e quantidade deve ser maior que zero")
   }else{
      valeTroca = preco * quantidade
      alert("ganhou um vale troca")
      alert("a loja vai receber no total: R$" + valeTroca.toFixed(2))
   }
 }

 function trajetoPomar(){
   let quantidadeInicial, quantidadeFinal, totalVendas
   quantidadeInicial = Number(prompt("Quantidade inicial de laranjas: "))
   quantidadeFinal = Number(prompt("quantidade final de laranjas: ")) 
   totalVendas = quantidadeInicial - quantidadeFinal
   if(totalVendas <= 0){
      alert("estoque deve ser maior no próximo dia.")
}else if(totalVendas >= 0){
   alert("vendas ok")
}
 }

 function capitaoGansoRefatoracao(){
   let gastoSuprimento, gastoMercadoria, faturamentoIngresso, faturamentoVendaItens, lucroReais, lucroPorcentual 
   gastoSuprimento = Number(prompt("gasto em suprimento: "))
   gastoMercadoria = Number(prompt("gasto com mercadoria: "))
   let gastos = gastoMercadoria + gastoSuprimento
   faturamentoIngresso = Number(prompt("faturou com ingressos: "))
   faturamentoVendaItens = Number(prompt("faturou com os itens: "))
   lucroReais = faturamentoIngresso + faturamentoVendaItens - gastos
   lucroPorcentual = lucroReais * 100 / gastos
   
resposta.innerHTML = "lucro: R$" + lucroReais.toFixed(2) + " | " + lucroPorcentual + '%'

 }