programa {
  funcao inicio() {
    real precoItem, saldo 
     escreva("qual o preco do item? ")
     leia(precoItem)
     escreva("qual o seu saldo? ")
     leia(saldo)
     se(saldo < precoItem){
      escreva("voce esta pobre!")
     }senao{
      escreva("VOCE PODE COMPRAR!!!!")
     }
  }
}
