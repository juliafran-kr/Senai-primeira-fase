let preco, quantidade
let valortotal
quantidade = Number(prompt("quantidade:"))
preco = Number(prompt("Preço:"))
valortotal = quantidade * preco
console.log("valor a receber: R$ " + valortotal.toFixed(2))