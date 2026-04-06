programa {
  funcao inicio() {
    real gasto = 8000
    inteiro ingressos = 7500
    inteiro itens = 5000
    real lucroR
    real lucroP
    lucroR = - gasto + ingressos + itens
    escreva ("\nO lucro obtido em reais é R$ " + lucroR)
    lucroP = (lucroR / gasto) * 100
    escreva ("\nO lucro percentual é de " + lucroP + " %")
  }
}
