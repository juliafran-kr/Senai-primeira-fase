programa {
  funcao inicio() {
    real vitorias
    real empates
    real pontosV
    real pontosP
    escreva ("Qual a sua quantidade de vitórias? ")
    leia (vitorias)
    pontosV = vitorias * 3
    escreva ("Então sua pontuação é: " + pontosV)
    escreva ("\nQual a sua quantidade de empates? ")
    leia (empates)
    pontosP = empates * 1
    escreva ("Então sua pontuação é: " + pontosP)
  }
}
