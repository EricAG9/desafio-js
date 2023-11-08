const nome = [
    'Fernanda Santos', 
    'Rafael Souza', 
    'Maria Silva', 
    'Maria Souza', 
    'Ana Costa', 
    'Maria Ferreira', 
    'Sofia Costa', 
    'Lucas Silva', 
    'Rafael Souza', 
    'Carlos Oliveira'
]

const parceirosId = [
    19660156627897, 
    23998058019370, 
    92291338611, 
    55443795656, 
    77743761456, 
    47202302326, 
    58017232567, 
    16733009491247, 
    63351859919, 
    84297701780
]

// criei arrays vazios para armazenar os dados verificados
const cpf = []
const cnpj = []
const parceirosAgrupados = []

parceirosId.forEach((element, index) => {
    // converti os numeros em strings para fazer a contagem dos digitos
    const elementStg = element.toString()
    if (elementStg.length === 11) {
        // essa função une o nome com os dados
        cpf.push({ parceirosId: elementStg, nome: nome[index] })
      } else if (elementStg.length === 14) {
        cnpj.push({ parceirosId: elementStg, nome: nome[index] })
      }
})

console.log("PF" + cpf)