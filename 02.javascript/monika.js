let olhouOcelular, chance
olhouOcelular = Number(prompt("olhou o celular: "))
chance = (0.1 / (1 + 500 * olhouOcelular)) * 100
alert("cahnce de ser aprovado: " + chance.toFixed(2))
