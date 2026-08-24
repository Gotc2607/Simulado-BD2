export const exams = [
  {
    id: "av1",
    title: "Avaliação 1 (Av1)",
    description: "Banco completo com as 26 questões",
    questions: [
      {
        id: 1,
        text: "O banco de dados orientado a grafos Neo4j baseia-se num modelo de grafos de Propriedades. A estrutura fundamental desse modelo é composta por três componentes principais: \n_________, Relacionamentos e _________.",
        options: ["Graus", "Conjuntos", "Arestas", "Nós"],
        correctAnswer: 3
      },
      {
        id: 2,
        text: "Na sintaxe do Cypher mostrada abaixo, que seria usada para a criação de um nó e um relacionamento no Neo4j: \nCREATE (p1:Person)-[r:KNOWS]->(p2:Person)\nQuais são os tipos/labels dos nós e o tipo do relacionamento criados?",
        options: ["CREATE, KNOWS, Person", "Person, KNOWS", "(p1:Person), [r:KNOWS], (p2:Person)", "p1, p2, r"],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "Num banco de dados de Grafos os relacionamentos não são representados por:",
        options: ["Matriz de Adjacência", "Grafos", "Lista de Adjacência", "Matriz de Incidência"],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "Grafos (ou redes) são estruturas de dados compostas de duas partes básicas: _______ (ou vértices) e _______ (ou arestas, ou arcos). Qual alternativa tem nomes alternativos para essas partes?",
        options: ["Nós e Relacionamentos", "Entidades e Relacionamentos", "Nós e Links", "Objetos e Ligações"],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "O relacionamento abaixo foi criado com qual instrução/código:\n(Keanu Reeves)-[ACTED_IN]->(The Matrix)",
        options: [
          "CREATE (p:Person {name: 'Keanu Reeves'})-[ACTED_IN {roles:['Neo']}]->(m:Movie {title:'The Matrix'})",
          "CREATE (p:Person {name: 'Keanu Reeves'})-[r:ACTED_IN {roles:['Neo']}]-(m:Movie {title:'The Matrix'})",
          "CREATE (p:Person {name: 'Keanu Reeves'})<-[r:ACTED_IN {roles:['Neo']}]-(m:Movie {title:'The Matrix'})",
          "CREATE (p:Person {name: 'Keanu Reeves'})-[r:ACTED_IN {roles:['Neo']}]->(m:Movie {title:'The Matrix'})"
        ],
        correctAnswer: 3
      },
      {
        id: 6,
        text: "Em um grafo de rede social, com 6 vértices representando pessoas (A, B, C, D, E, F) e arestas representando 'amizades', qual a distância (em saltos/arestas) entre a pessoa 'A' e a pessoa 'F'?",
        options: ["5", "4", "3", "2"],
        correctAnswer: 3
      },

      // --- Prova 2 ---
      {
        id: 7,
        text: "Na estrutura de dados em árvore (uma especialização de um grafo), a principal característica é:",
        options: [
          "Pode conter ciclos.",
          "Cada nó pode ter múltiplos pais.",
          "Não possui um nó raiz.",
          "As folhas não podem ter filhos, ou seja, grau zero de saída."
        ],
        correctAnswer: 3
      },
      {
        id: 8,
        text: "No Neo4j o uso dos colchetes [] representa:",
        options: ["Labels", "Nós", "Relacionamentos", "Propriedades"],
        correctAnswer: 2
      },
      {
        id: 9,
        text: "Um banco de dados NoSQL do tipo 'Chave-Valor' armazena dados onde cada valor é acessado através de uma chave única. No Redis, quais comandos são usados para salvar e recuperar campos de um hash?",
        options: ["SADD e SMEMBERS", "LPUSH e LPOP", "SET e GET", "HSET e HGET"],
        correctAnswer: 3
      },
      {
        id: 10,
        text: "Em JSON a estrutura que representa uma coleção ordenada de valores é:",
        options: ["Array", "String", "Number", "Objeto"],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "Qual formato de dados do MongoDB?",
        options: ["CSV", "XML", "JSON", "BSON"],
        correctAnswer: 3
      },

      // --- Av3 ---
      {
        id: 12,
        text: "As propriedades de uma transação, geralmente chamadas de propriedades ACID, determinam que uma transação é indivisível, ou seja, todas as suas operações devem ser executadas com sucesso ou nenhuma delas deve ser executada. A qual propriedade essa descrição se refere?",
        options: ["Consistência", "Isolamento", "Durabilidade", "Atomicidade"],
        correctAnswer: 3
      },
      {
        id: 13,
        text: "Uma transação que foi concluída com sucesso e teve todas as suas alterações gravadas de forma permanente no banco de dados está em qual estado?",
        options: ["Ativa", "Falha", "Abortada", "Efetivada (Committed)"],
        correctAnswer: 3
      },
      {
        id: 14,
        text: "O problema do 'Deadlock' (Impasse) em controle de concorrência ocorre quando:",
        options: [
          "O banco de dados falha e perde os dados antes do commit.",
          "Duas transações atualizam o mesmo dado simultaneamente sem bloqueio.",
          "Duas ou mais transações ficam esperando indefinidamente pelo bloqueio de recursos uns dos outros.",
          "Uma transação lê um dado que está sendo modificado por outra transação não efetivada."
        ],
        correctAnswer: 2
      },
      {
        id: 15,
        text: "Em controle de concorrência, o protocolo de bloqueio em duas fases (2PL) garante:",
        options: ["Recuperabilidade", "Ausência de deadlocks", "Que transações nunca sejam abortadas", "Seriabilidade (Serializability)"],
        correctAnswer: 3
      },
      {
        id: 16,
        text: "A propriedade de Isolamento das transações (ACID) tem como objetivo principal:",
        options: [
          "Assegurar que as restrições de integridade não sejam violadas.",
          "Fazer com que as transações concorrentes não interfiram umas nas outras, aparentando execução sequencial.",
          "Garantir que as falhas de hardware não afetem o banco de dados.",
          "Permitir que uma transação seja dividida em subtarefas."
        ],
        correctAnswer: 1
      },

      // --- Simulado P3 ---
      {
        id: 17,
        text: "Um escalonamento (schedule) de transações é dito serial se:",
        options: [
          "Ele permite maior concorrência do que outros tipos de escalonamentos.",
          "Ele garante a ausência de anomalias como leitura suja.",
          "As operações de diferentes transações se intercalam de forma otimizada.",
          "As transações são executadas uma após a outra, sem intercalação de suas operações."
        ],
        correctAnswer: 3
      },
      {
        id: 18,
        text: "Considere o problema da Leitura Suja (Dirty Read). Ele ocorre quando:",
        options: [
          "Uma transação lê um conjunto de registros e depois descobre novos registros inseridos por outra transação.",
          "Uma transação lê duas vezes o mesmo dado e obtém valores diferentes porque outra o alterou.",
          "Duas transações gravam no mesmo item de dado simultaneamente.",
          "Uma transação lê um valor modificado por outra transação que ainda não foi efetivada (committed)."
        ],
        correctAnswer: 3
      },
      {
        id: 19,
        text: "Qual dos seguintes níveis de isolamento é o mais restritivo no SQL, prevenindo Leituras Sujas, Leituras Não-Repetíveis e Leituras Fantasmas?",
        options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
        correctAnswer: 3
      },
      {
        id: 20,
        text: "Ao utilizar Bloqueios Compartilhados (Shared Locks) e Bloqueios Exclusivos (Exclusive Locks), qual é a regra básica?",
        options: [
          "Múltiplas transações podem obter Bloqueios Compartilhados no mesmo item para leitura simultânea.",
          "Nenhuma outra transação pode obter bloqueios se uma transação tiver um Bloqueio Compartilhado.",
          "Um Bloqueio Exclusivo pode ser compartilhado com uma única outra transação.",
          "Um Bloqueio Compartilhado permite tanto leitura quanto escrita por outras transações."
        ],
        correctAnswer: 0
      },
      {
        id: 21,
        text: "O grafo de precedência (ou grafo de serialização) é usado para:",
        options: [
          "Garantir a propriedade de Durabilidade.",
          "Detectar deadlocks entre transações.",
          "Definir a ordem em que as transações chegaram ao sistema.",
          "Determinar se um escalonamento é serializável quanto ao conflito (conflict serializable)."
        ],
        correctAnswer: 3
      },

      // --- Simulado ---
      {
        id: 22,
        text: "O SGBD deve garantir que, se uma transação executar algumas atualizações e depois falhar, essas atualizações sejam desfeitas da base de dados. Essa propriedade é a:",
        options: ["Durabilidade", "Isolamento", "Atomicidade", "Consistência"],
        correctAnswer: 2
      },
      {
        id: 23,
        text: "Um escalonamento é dito recuperável se...",
        options: [
          "Ele não contém ciclos no grafo de precedência.",
          "Nenhuma transação no escalonamento for efetivada (committed) até que todas as transações que gravaram itens lidos por ela sejam efetivadas.",
          "Ele for equivalente a um escalonamento serial.",
          "Nenhuma transação lê dados que foram gravados por transações não efetivadas."
        ],
        correctAnswer: 1
      },
      {
        id: 24,
        text: "Qual anomalia ocorre quando uma transação T1 lê um item modificado por T2, e T2 depois é abortada?",
        options: ["Atualização Perdida", "Leitura não-repetível", "Leitura Suja", "Leitura fantasma"],
        correctAnswer: 2
      },
      {
        id: 25,
        text: "No Redis, qual estrutura de dados usaríamos para modelar um conjunto de tags únicas associadas a um artigo?",
        options: ["List", "Hash", "String", "Set"],
        correctAnswer: 3
      },
      {
        id: 26,
        text: "Em MongoDB, o equivalente a uma 'Tabela' em bancos relacionais é chamado de:",
        options: ["Documento", "Banco de dados", "Chave", "Coleção"],
        correctAnswer: 3
      }
    ]
  },
  {
    id: "av2",
    title: "Avaliação 2 (Av2)",
    description: "Banco com as 20 questões da Avaliação 2",
    questions: [
      {
        id: 1,
        text: "O banco de dados NoSQL tem sido adotado largamente no mercado porque resolve o principal problema dos bancos de dados relacionais que era a dificuldade de escalar horizontalmente (scale-out) para atender altas cargas de trabalho.",
        options: ["Falso", "Verdadeiro"],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "A estrutura de lista do Redis permite que se implemente filas e pilhas. O comando usado para inserir elementos no fim da lista (fila) e o comando usado para retirar elementos do início da lista são respectivamente:",
        options: ["rpush e lpop", "lpush e rpop", "lpush e lpop", "rpush e rpop"],
        correctAnswer: 0
      },
      {
        id: 3,
        text: "No Redis qual tipo de estrutura de dados é mais adequado para armazenar e realizar operações sobre conjuntos (ex: união, interseção) de elementos únicos onde a ordem não é importante?",
        options: ["Set", "Sorted Set", "Hash", "List"],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "Qual o comando REDIS utilizado para obter o valor de uma chave chamada 'aluno'?",
        options: ["get aluno", "select aluno", "find aluno", "fetch aluno"],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "O JSON (JavaScript Object Notation) é constituído de duas estruturas principais. Uma delas é uma coleção de pares nome/valor. Essa estrutura é também conhecida como:",
        options: ["objeto, dicionário ou hash (delimitado por {})", "array, vetor ou lista (delimitado por [])", "string, delimitado por aspas duplas", "número, sem delimitador"],
        correctAnswer: 0
      },
      {
        id: 6,
        text: "Na estrutura de dados JSON existe o conceito de array, o qual é uma lista ordenada de valores. O array no JSON é delimitado por:",
        options: ["Chaves { }", "Parênteses ( )", "Colchetes [ ]", "Aspas duplas \" \""],
        correctAnswer: 2
      },
      {
        id: 7,
        text: "Um banco de dados MongoDB armazena dados em documentos BSON. O valor de um campo de um documento pode ser:",
        options: ["Apenas tipos primitivos", "Apenas outros documentos ou arrays", "Qualquer tipo de dado BSON (incluindo arrays e sub-documentos)", "Apenas strings"],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "Para retornar todos os documentos de uma coleção chamada 'funcionarios' no MongoDB, o comando correto é:",
        options: ["db.funcionarios.select()", "db.funcionarios.find()", "db.funcionarios.get()", "db.funcionarios.fetchAll()"],
        correctAnswer: 1
      },
      {
        id: 9,
        text: "Para retornar todos os documentos da coleção 'produtos', mas mostrando apenas o campo 'nome' (e omitindo o '_id'), o comando correto no MongoDB é:",
        options: ["db.produtos.find({}, {nome: 1, _id: 0})", "db.produtos.find({nome: 1, _id: 0})", "db.produtos.select(nome)", "db.produtos.find({}, {nome: true, _id: false})"],
        correctAnswer: 0
      },
      {
        id: 10,
        text: "Deseja-se retornar todos os documentos da coleção 'alunos' onde a idade seja maior ou igual a 18. O comando correto no MongoDB é:",
        options: ["db.alunos.find({idade: {$gte: 18}})", "db.alunos.find({idade: {>= 18}})", "db.alunos.find({idade: {$gt: 18}})", "db.alunos.find({idade: '>= 18'})"],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "Os bancos de dados NoSQL podem ser classificados em quatro categorias principais. Qual das alternativas abaixo NÃO representa uma dessas categorias?",
        options: ["Chave-Valor", "Orientado a Documentos", "Orientado a Grafos", "Orientado a Relacionamentos (Tabelas)"],
        correctAnswer: 3
      },
      {
        id: 12,
        text: "O Redis é um banco in-memory. Quais são as principais formas de persistência que o Redis oferece para não perder os dados em caso de reinicialização?",
        options: ["RDB (Redis Database Snapshot) e AOF (Append Only File)", "Apenas AOF", "O Redis não suporta persistência", "SQL Dump e CSV"],
        correctAnswer: 0
      },
      {
        id: 13,
        text: "Em bancos de dados relacionais, os dados são organizados em Tabelas. No MongoDB (orientado a documentos), o equivalente a uma Tabela é chamado de:",
        options: ["Documento", "Coleção (Collection)", "Array", "Database"],
        correctAnswer: 1
      },
      {
        id: 14,
        text: "No MongoDB, todo documento armazenado em uma coleção deve possuir um campo que atua como chave primária única. Qual é o nome padrão desse campo?",
        options: ["id", "_id", "pk", "objectId"],
        correctAnswer: 1
      },
      {
        id: 15,
        text: "O comando usado para atualizar o primeiro documento que corresponde a um filtro de pesquisa no MongoDB é o:",
        options: ["db.collection.update()", "db.collection.updateOne()", "db.collection.modify()", "db.collection.change()"],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "No MongoDB, qual operador é usado no comando update para adicionar um elemento a um array existente dentro de um documento?",
        options: ["$add", "$push", "$insert", "$append"],
        correctAnswer: 1
      },
      {
        id: 17,
        text: "Para excluir todos os documentos de uma coleção 'logs' que foram criados antes do ano de 2020 (campo 'ano' menor que 2020), o comando é:",
        options: ["db.logs.deleteMany({ano: {$lt: 2020}})", "db.logs.remove({ano: < 2020})", "db.logs.drop({ano: {$lt: 2020}})", "db.logs.deleteAll({ano: {$lt: 2020}})"],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "Uma diferença fundamental na modelagem de dados entre bancos relacionais e NoSQL (como MongoDB) é:",
        options: ["NoSQL exige um esquema (schema) rígido antes de inserir os dados.", "Bancos relacionais favorecem a desnormalização de dados.", "MongoDB permite flexibilidade de esquema (schema-less), onde documentos na mesma coleção podem ter estruturas diferentes.", "Bancos relacionais não suportam chaves estrangeiras."],
        correctAnswer: 2
      },
      {
        id: 19,
        text: "No Redis, se você quiser adicionar um elemento 'tarefa1' ao início de uma lista chamada 'fila_de_tarefas', você usaria o comando:",
        options: ["LPUSH fila_de_tarefas tarefa1", "RPUSH fila_de_tarefas tarefa1", "LADD fila_de_tarefas tarefa1", "PUSH fila_de_tarefas tarefa1"],
        correctAnswer: 0
      },
      {
        id: 20,
        text: "No Redis, para armazenar múltiplos campos e valores em uma chave de Hash (por exemplo, guardar nome, idade e email de um usuário), qual comando é o mais apropriado?",
        options: ["HMSET (ou HSET)", "HGETALL", "MSET", "SETMULTI"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "av3",
    title: "Avaliação 3 (Av3)",
    description: "Banco com as 21 questões da Avaliação 3 (Transações, Controle de Concorrência e Índices)",
    questions: [
      {
        id: 1,
        text: "[1] As propriedades de uma transação, geralmente chamadas de propriedades ACID, determinam que uma transação é indivisível, ou seja, todas as suas operações devem ser executadas com sucesso ou nenhuma delas deve ser executada. A qual propriedade essa descrição se refere?",
        options: ["Atomicidade", "Isolamento", "Durabilidade", "Consistência"],
        correctAnswer: 0
      },
      {
        id: 2,
        text: "[2] Uma transação que foi concluída com sucesso e teve todas as suas alterações gravadas de forma permanente no banco de dados está em qual estado?",
        options: ["Ativa", "Efetivada (Committed)", "Falha", "Abortada"],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "[3] O problema do 'Deadlock' (Impasse) em controle de concorrência ocorre quando:",
        options: ["Uma transação lê um dado que está sendo modificado por outra transação não efetivada.", "Duas ou mais transações ficam esperando indefinidamente pelo bloqueio de recursos uns dos outros.", "O banco de dados falha e perde os dados antes do commit.", "Duas transações atualizam o mesmo dado simultaneamente sem bloqueio."],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "[4] Em controle de concorrência, o protocolo de bloqueio em duas fases (2PL) garante:",
        options: ["Seriabilidade (Serializability)", "Recuperabilidade", "Que transações nunca sejam abortadas", "Ausência de deadlocks"],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "[5] Qual a finalidade de um Sistema Gerenciador de Banco de Dados (SGBD) em um ambiente computacional moderno?",
        options: ["a) É um software destinado a melhorar a comunicação entre a rede de computadores e a internet.", "b) É uma coleção de dados que são gerados a partir do Windows, que formam a base para criação de planilhas.", "c) É um software criado com a finalidade de facilitar o acesso a todos os aplicativos de um sistema operacional.", "d) É um software que fornece uma interface entre os dados e os programas de aplicativos, permitindo criar, manipular e gerenciar os dados."],
        correctAnswer: 3
      },
      {
        id: 6,
        text: "[6] A propriedade de Isolamento das transações (ACID) tem como objetivo principal:",
        options: ["a) Fazer com que as transações concorrentes não interfiram umas nas outras, aparentando execução sequencial.", "b) Permitir que uma transação seja dividida em subtarefas.", "c) Garantir que as falhas de hardware não afetem o banco de dados.", "d) Assegurar que as restrições de integridade não sejam violadas."],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "[7] O problema do 'Deadlock' (Impasse) em controle de concorrência ocorre quando:",
        options: ["a) Uma transação lê um dado que está sendo modificado por outra transação não efetivada.", "b) Duas transações atualizam o mesmo dado simultaneamente sem bloqueio.", "c) Duas ou mais transações ficam esperando indefinidamente pelo bloqueio de recursos uns dos outros.", "d) O banco de dados falha e perde os dados antes do commit."],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "[8] Ao utilizar Bloqueios Compartilhados (Shared Locks) e Bloqueios Exclusivos (Exclusive Locks), qual é a regra básica?",
        options: ["a) Múltiplas transações podem obter Bloqueios Compartilhados no mesmo item para leitura simultânea.", "b) Nenhuma outra transação pode obter bloqueios se uma transação tiver um Bloqueio Compartilhado.", "c) Um Bloqueio Compartilhado permite tanto leitura quanto escrita por outras transações.", "d) Um Bloqueio Exclusivo pode ser compartilhado com uma única outra transação."],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "[9] Considere o problema da Leitura Suja (Dirty Read). Ele ocorre quando:",
        options: ["a) Uma transação lê um conjunto de registros e depois descobre novos registros inseridos por outra transação.", "b) Duas transações gravam no mesmo item de dado simultaneamente.", "c) Uma transação lê duas vezes o mesmo dado e obtém valores diferentes porque outra o alterou.", "d) Uma transação lê um valor modificado por outra transação que ainda não foi efetivada (committed)."],
        correctAnswer: 3
      },
      {
        id: 10,
        text: "[10] Qual dos seguintes níveis de isolamento é o mais restritivo no SQL, prevenindo Leituras Sujas, Leituras Não-Repetíveis e Leituras Fantasmas?",
        options: ["a) READ UNCOMMITTED", "b) READ COMMITTED", "c) SERIALIZABLE", "d) REPEATABLE READ"],
        correctAnswer: 2
      },
      {
        id: 11,
        text: "[11] Em um banco de dados orientado a grafos (como o Neo4j), o que é uma transação?",
        options: ["a) Uma consulta que apenas lê dados, sem modificá-los.", "b) Um backup automático do banco de dados.", "c) Uma unidade lógica de trabalho que executa uma ou mais operações como um único bloco indivisível.", "d) Uma conexão entre dois nós (vértices)."],
        correctAnswer: 2
      },
      {
        id: 12,
        text: "[12] No Neo4j (via interface ou driver), qual comando é tipicamente usado para confirmar permanentemente as alterações feitas em uma transação?",
        options: ["a) COMMIT", "b) SAVE", "c) CONFIRM", "d) END"],
        correctAnswer: 0
      },
      {
        id: 13,
        text: "[13] Se ocorrer um erro durante uma transação no Neo4j e você desejar desfazer todas as alterações feitas, qual comando é usado?",
        options: ["a) CANCEL", "b) UNDO", "c) ROLLBACK", "d) ABORT"],
        correctAnswer: 2
      },
      {
        id: 14,
        text: "[14] No Neo4j (Browser ou driver), como você normalmente inicia uma nova transação explícita?",
        options: ["a) START TRANSACTION", "b) BEGIN", "c) NEW TRANSACTION", "d) INIT"],
        correctAnswer: 1
      },
      {
        id: 15,
        text: "[15] A criação de uma restrição de unicidade (UNIQUE constraint) no Neo4j ajuda a garantir qual propriedade ACID, evitando que transações concorrentes criem nós duplicados?",
        options: ["a) Durabilidade", "b) Atomicidade", "c) Consistência", "d) Isolamento"],
        correctAnswer: 2
      },
      {
        id: 16,
        text: "[16] O Neo4j suporta controle de concorrência. Qual é o comportamento padrão quando duas transações tentam modificar o mesmo nó simultaneamente no Neo4j?",
        options: ["a) A segunda transação abortará imediatamente (Erro).", "b) A segunda transação aguardará até que a primeira seja concluída (bloqueio/lock).", "c) Ambas as transações modificarão o nó criando uma versão paralela.", "d) A primeira transação é abortada e a segunda assume."],
        correctAnswer: 1
      },
      {
        id: 17,
        text: "[17] O índice no Neo4j é uma estrutura de dados que melhora a velocidade das operações de busca. Qual comando Cypher é usado para criar um índice em uma propriedade específica de um nó?",
        options: ["a) MAKE INDEX ON (n:Pessoa.nome)", "b) CREATE INDEX FOR (n:Pessoa) ON (n.nome)", "c) ADD INDEX (n:Pessoa) -> (nome)", "d) BUILD INDEX Pessoa.nome"],
        correctAnswer: 1
      },
      {
        id: 18,
        text: "[18] O principal benefício de criar um índice em um banco de dados (como Neo4j) é:",
        options: ["a) Reduzir o tamanho do banco de dados no disco.", "b) Melhorar a velocidade de gravação (CREATE).", "c) Aumentar a velocidade das consultas de leitura (MATCH).", "d) Garantir a integridade dos relacionamentos."],
        correctAnswer: 2
      },
      {
        id: 19,
        text: "[19] Embora os índices acelerem a leitura, qual é a principal desvantagem de criar muitos índices em um banco de dados?",
        options: ["a) Eles impedem a criação de novos relacionamentos.", "b) Eles ocupam espaço de armazenamento adicional e podem lentificar as operações de gravação (CREATE, UPDATE, DELETE).", "c) Eles tornam as consultas MATCH mais lentas.", "d) Eles limitam o número de nós que podem ser criados."],
        correctAnswer: 1
      },
      {
        id: 20,
        text: "[20] Como você remove um índice existente no Neo4j?",
        options: ["a) DROP INDEX nome_do_indice", "b) REMOVE INDEX nome_do_indice", "c) DELETE INDEX nome_do_indice", "d) CLEAR INDEX nome_do_indice"],
        correctAnswer: 0
      },
      {
        id: 21,
        text: "[21] No Neo4j, toda vez que você cria uma restrição de unicidade (UNIQUE constraint) em uma propriedade, o banco de dados automaticamente:",
        options: ["a) Cria um backup daquele nó.", "b) Cria um índice nessa propriedade para garantir a eficiência da validação de unicidade.", "c) Bloqueia o nó para futuras atualizações.", "d) Exclui propriedades duplicadas existentes."],
        correctAnswer: 1
      }
    ]
  }
];
