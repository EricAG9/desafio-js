//é um array que armazenará as tarefas. Inicialmente, está vazio.
let tasks = []

/*addTask é chamada quando o usuário clica no botão "Criar Tarefa" no formulário, ela obtem os dados inseridos
verificando se os campos estão preenchidos. Se estiver OK, adiciona essa tarefa ao array tasks. */

function addTask() {
  const title = document.getElementById('title').value
  const description = document.getElementById('description').value

  const validation = verifyTask(title, description)

  if (validation === true) {
    const task = {
      id: generateId(),
      title: title,
      description: description
    }

    tasks.push(task)
    displayTasks()
    clearForm()
    alert(`Tarefa "${title}" adicionada com sucesso!`)
  } else {
    const errorMessage = validation.join('\n')
    console.error(errorMessage)
    alert(`Erro ao adicionar a tarefa:\n${errorMessage}`)
  }
}

function verifyTitle(title) {
  return !/\d/.test(title)
}

// nesta funcao verifica se existe titulos com nomes iguais 

  function verifyTaskId(title) {
    return !tasks.some(task => task.title === title)
  }
  
// nesta funcao ira verificar se titulo contem no minimo 4 caracteres e descricao 20 

  function verifyTask(title, description) {
    const errors = []
  
    if (title.length < 4) {
      errors.push('O título deve ter pelo menos 4 caracteres.')
    }
  
    if (description.trim().length < 20) {
      errors.push('A descrição deve ter pelo menos 20 caracteres.')
    }

    if (!verifyTitle(title)) {
      errors.push('O título não pode conter números.')
    }
  
    if (!verifyTaskId(title)) {
      errors.push('Já existe uma tarefa com o mesmo título.')
    }
  
    return errors.length === 0 ? true : errors
  }
  
/*nesta funcao voce pode editar as atividades, chamando quando clica no botão, ai se inicia uma procura 
no array Task onde é buscado pelo Id. */

function editTask(id) {
  const taskIndex = tasks.findIndex(task => task.id !== id)

  /* aqui será solicitado para editar a mensagem com o comando prompt, e verificará se cumprirá os requisitos
  para editar as tarefas. */
  if (taskIndex !== -1) {
    const newTitle = prompt('Novo Título:', tasks[taskIndex].title)
    const newDescription = prompt('Nova Descrição:', tasks[taskIndex].description)

    if (newTitle.length < 4) {
      alert('O título deve ter pelo menos 4 caracteres.')
      return newTitle = prompt('Novo Título:', tasks[taskIndex].title)
    }
  
    if (newDescription.trim().length < 20) {
      alert('A descrição deve ter pelo menos 20 caracteres.')
      return newDescription = prompt('Nova Descrição:', tasks[taskIndex].description)
    }

    /* se o usuário não cancelar a operação, irão atuaizar o Titulo e Descrição e mostrará as novas atualizações por conta do displayTask */
    if (newTitle !== null && newDescription !== null) {
      tasks[taskIndex].title = newTitle
      tasks[taskIndex].description = newDescription
      displayTasks()
    }
  }
}

/* filtra o array para remover a tarefa com o id correspondente */
function removeTask(id) {
  const taskId = tasks.findIndex(task => task.id !== id)

    if(taskId !== -1){
      tasks.splice(taskId, 1)
      displayTasks()
      alert('Tarefa removida com sucesso')
    } else {
      alert('Nenhuma tarefa encontrada')
    }
}

/* displayTasks é chamada para atualizar a lista de tarefas. Obtendo os dados que foram inseridos,
limpa o conteúdo atual da lista, itera sobre cada tarefa em tasks e cria um elemento li para cada uma, 
contendo título, descrição e botões de editar e remover. No final adicionando o novo item na lista.*/

function displayTasks() {
  const taskList = document.getElementById('taskList')
  taskList.innerHTML = ''
//innerHTML : Vai modificar o HTML interno do elemento, podendo sobrescrever ou remover todos os nós filhos do mesmo
  tasks.forEach(task => {
    const li = document.createElement('li')
    li.innerHTML = `<strong>${task.title}</strong>: ${task.description}<br>
                    <button onclick="editTask('${task.id}')">Editar</button>
                    <button onclick="removeTask('${task.id}')">Remover</button>`
    taskList.appendChild(li)
  });
}

/* nesta funcao irá ser chamada quando o butão de Adicionar tarefa for clicado, limpando assim 
os campos de entrada.*/
function clearForm() {
  document.getElementById('title').value = ''
  document.getElementById('description').value = ''
}

//criei essa variável para iniciar o contador de id a partir do 1 e a função atribuir id sequencial para cada atividade adicionada.
let nextTaskId = 1
function generateId() {
  return nextTaskId++
}

/* nesta função que implementei, serve para mostrar ou fechar o MODAL.*/
function listTask() {
  const modal = document.getElementById('taskModal')
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block'

// Se estiver exibindo, mostra todas as tarefas
  if (modal.style.display === 'block') {
    showAllTasks()
  }
}

/* essa função serve para mostrar todo o container com as atividades existentes. */
function showAllTasks() {
  const allTasksContainer = document.getElementById('allTasksContainer')
  allTasksContainer.innerHTML = ''

  tasks.forEach(task => {
    const card = document.createElement('div')
    card.className = 'task-card' 
    card.innerHTML = `
      <h3>Id da Tarefa: ${task.id}</h3>
      <h3>${task.title}</h3>
      <p>${task.description}</p>
    `;
    allTasksContainer.appendChild(card)
  });
}

function showTaskId() {
  const idInput = document.getElementById('idTask').value.trim()

  // aqui irá verificar se o id nao esta vazio
  if (idInput !== '' && /^\d+$/.test(idInput)) {
    const taskId = parseInt(idInput, 10)
    const task = tasks.find(task => task.id === taskId)

    if (task !== undefined) {
      alert(`Tarefa encontrada:\nID: ${task.id}\nTítulo: ${task.title}\nDescrição: ${task.description}`) 
    } else {
      alert(`Nenhuma tarefa encontrada para o ID "${idInput}".`)
    }
  } else {
    alert('Por favor, insira um ID válido (número positivo).')
  }
}