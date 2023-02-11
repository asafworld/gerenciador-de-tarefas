# Gerenciador de Tarefas

##### Projeto desenvolvido por Gabriel Asaf. 
##### Com o Gerenciador de Tarefas você pode criar tarefas e suas subtarefas para cada projeto iniciado.

# ÍNDICE

<!--ts-->
   * [Organização do Repositório](#organização-do-repositório)
      * [Pastas](#pastas)
   * [Páginas e suas Funcionalidades](#páginas-e-suas-funcionalidades)
   * [Funções Helpers](#funções-helpers)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
<!--te-->

# ORGANIZAÇÃO DO REPOSITÓRIO: 

Todos os arquivos importantes para o desempenho da aplicação se encontram na pasta "src".

## PASTAS:

Context -> Pasta destinada aos arquivos de criação do Contexto da aplicação (ContextAPI), bem como seu componente Provider.

Entities -> Arquivo com as entidades que vão tipar os objetos veiculados na aplicação (via ContextAPI e LocalStorage)

Pages -> Pasta destinada a todas as três páginas renderizadas: Vizualização e criação de projetos (Pages/Projects); Vizualiação das informações do projeto selecionado, bem como criação e vizualização de tarefas (Pages/ProjectTasks); Vizualiação e criação de sub-tarefas (Pages/Task). 

Components -> Pasta destinada a todos os componentes renderizados nas páginas. Está dividida por funcionalidades: Criação e Exibição de Projetos, Tarefas e SubTarefas, bem como o Header. 

utils -> Pasta destinada as funções que atuam como helpers através do código. Captura e inserção de dados no LocalStorage. Captura da data atual e cáculo da porcentagem de conclusão de cada projeto.

# PÁGINAS E SUAS FUNCIONALIDADES

#### /  (Página Inicial)
Página que renderiza duas seções: Inserção de um novo projeto e a listagem daqueles já existentes.

Não será possível criar um novo projeto caso as informações não estejam preenchidas.

Uma vez que você cria um projeto, o aplicativo lhe redireciona automaticamente para a página do projeto, tornando aquele o projeto atual.

Para selecionar um projeto, basta apenas clicar no nome do card respectivo. Para excluir o projeto, basta apenas clicar em "Excluir".

#### /project/:id (Página do projeto atual)
Página que renderiza três seções: Informações do projeto, inserção de uma nova tarefa e a listagem daquelas já existentes.

Aqui também não será possível criar uma tarefa sem que os campos estejam devidamente preenchidos.

Para acessar o conteúdo da Tarefa, basta apenas clicar nas informações preenchidas em seu card. No caso do usuário desejar excluí-la, deve apenas clicar em "Excluir".

Uma vez que o usuário marque o projeto como concluído, não será possível criar novas tarefas.

#### /task/:id
Página que renderiza três seções: Informações da presente tarefa, inserção de subtarefas e a listagem daquelas já existentes.

Uma vez que o campo de identificação da nova subtarefa não está preenchido, não será possível criá-la. 

Na seção de listagem, temos duas listas: Uma lista para subtarefas pendentes e outra para concluídas. Em ambas é possível excluir subtarefas indesejadas. Para concluir uma subtarefa pendente o usuário deve clicar o íncone imediatamente a sua esquerda.

Dado que o usuário marque a tarefa como concluída, não será possível adicionar novas subtarefas.


# FUNÇÕES HELPERS

Funções que auxiliam a aplicação em diferentes componentes. Estão localizadas na pasta *./utils*.

#### Local Storage

Aqui temos uma divisão de dois arquivos e funções, uma para capturar as informações do LocalStorage (*getLocalStorage*) e outra para salvar (*saveLocalStorage*).

#### Data

A função *getTheDate()* tem a simples função de retornar a presente data. É utilizada para capturar a data de encerramento de tarefas e projetos.

# INSTALAÇÃO: 

Uma vez com o projeto em sua máquiva, realize o NPM INSTALL em seu terminal antes de utilizar a aplicação. 
O projeto irá falhar caso isso não seja feito.

```
npm install
```

# COMO USAR

Excute a aplicação via NPM START para ter acesso ao seu funcionamento em seu LocalHost.
____________________________________________________________________________

Project developed by Gabriel Asaf (asafworld)