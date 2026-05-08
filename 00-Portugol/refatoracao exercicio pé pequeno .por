programa {
  funcao inicio() {
    real preco, valeTroca
    inteiro quantidade
    escreva("preço dos pares de calçados trocados: R$ ")
    leia(preco)
    escreva("quantidade de pares trocados: R$ ")
    leia(quantidade)

      se (quantidade > 100)
     {
      escreva("\nlimite de 100 pares excedidos\n")
      escreva("por favor, entrar em contato diretamente com a fábrica.")
     }
      senao se (preco <= 0 ou quantidade <=0)
     {
      escreva("\no preco e quantidade deve ser maior que zero\n")
     }
     
     senao
     valeTroca = preco * quantidade
     escreva("ganhou um vale troca")
     escreva("a loja vai receber no total: R$", valeTroca)
  }