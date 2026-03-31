programa {
  funcao inicio() {
    real peso = 60
    real distancia = 1000
    real volume = 0.5
    real frete 
    frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)
    escreva ("valor do frete é R$: " + frete )
  }
}
