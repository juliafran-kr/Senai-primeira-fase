
function calcularPrecoBrique(){
   let precoCompra, precoVenda
   precoCompra = Number(prompt("preço de compra: "))
   precoVenda = precoCompra * 3 
   console.log("preço para venda: R$ " + precoVenda.toFixed(2))
   alert("preço para venda: R$" + precoVenda.toFixed(2))
   
   document.getElementById("resultado").innerHTML = "preço para venda: R$" + precoVenda.toFixed(2)
}