let luz, agua, moradia, internet, gasolina, series, telefone, outros
let salario
let saldo 
luz = Number(prompt("conta de luz:"))
agua = Number(prompt("conta de agua:"))
moradia = Number(prompt("aluguel:"))
internet = Number(prompt("conta da internet:"))
gasolina = Number(prompt("gastou em gasolina no mês:"))
series = Number(prompt("gastou em streamers:"))
telefone = Number(prompt("conta da TIM:"))
salario = Number(prompt("salario:"))
outros = Number(prompt("reserva pra corrida de monâco: "))
saldo = Number(prompt)
saldo = salario - luz - moradia - internet - gasolina - series - telefone - outros
alert("sobrou para o juca ser feliz: " + saldo)
