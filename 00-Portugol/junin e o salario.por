programa {
  funcao inicio() {
    real salario
    inteiro semana
    inteiro dia
    real salarioSemanal
    real salarioDiario

    escreva ("digite seu salario: ")
    leia (salario)
    escreva ("Quantos dias trabalhou no mês: ")
    leia (dia)
    salarioDiario = salario / dia
    escreva ("Por dia você recebe R$" + salarioDiario)
    escreva ("\nQuantas semanas trabalhou no mês: ")
    leia (semana)
    salarioSemanal = salario / semana
    escreva ("Por semana você recebe R$" + salarioSemanal)
  }
}
