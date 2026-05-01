programa {
  funcao inicio() {
    real totalBruto
    real velorPrem
    real presentes
    real comissoes 
    real lucroFinal,lucroMeta 
    escreva("faturamento do valor bruto: R$ ")
    leia(totalBruto)
    escreva("faturamento do valor pago nas premiações: R$")
    leia(velorPrem)
    escreva("valor gasto com presentes: R$")
    leia(presentes)
    escreva("valor das comissões: R$ ")
    leia(comissoes)
    escreva("qual é a meta do lucro? ")
    leia(lucroMeta)
    lucroFinal = totalBruto - velorPrem - presentes - comissoes
    escreva("\n--- resultado do dia ---\n")
    escreva("lucro liquido da dona bete foi de: R$ ", lucroFinal)
      se (lucroFinal >= lucroMeta)
      {
         escreva("parabens a meta foi batida")
      }
  
      senao{
        escreva("a meta nao foi batida infelizmente")
      }
  }
}
