
const express = require("express");
const cors = require("cors"); 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Lista de pensamentos
const pensamentos = [
      {
        "id": "2a56",
        "conteudo": "Vc faz TI? Conserta meu celular!",
        "autoria": "Grupo da família"
      },
      {
        "id": "4c7d",
        "conteudo": "Da vida reclama, mas sem ela não vive!",
        "autoria": "Mestre Yoda"
      },
      {
        "id": "5b8a",
        "conteudo": "Na minha máquina funciona!",
        "autoria": "Dev"
      },
      {
        "id": "68uy",
        "conteudo": "Esse é de laranja que parece de limão, mas tem gosto de tamarindo!",
        "autoria": "Chaves"
      },
      {
        "id": "b807",
        "conteudo": "Melhor professor, o fracasso é!",
        "autoria": "Mestre Yoda"
      },
      {
        "id": "9f3c",
        "conteudo": "Você não é todo mundo!",
        "autoria": "Mãe"
      },
      {
        "id": "6a2b",
        "conteudo": "Foi sem querer querendo!",
        "autoria": "Chaves"
      },
      {
        "id": "7e2a",
        "conteudo": "Que a força esteja com você!",
        "autoria": "Mestre Yoda"
      },
      {
        "id": "5c8f",
        "conteudo": "Resolver o bug não consegue? Esfriar a cabeça vc deve.",
        "autoria": "Mestre Yoda"
      },
      {
        "id": "2d6e",
        "conteudo": "Não faça drama, faça café! :)",
        "autoria": "Dev"
      },
      {
        "id": "3f1a",
        "conteudo": "Conserta minha impressora?",
        "autoria": "Grupo da família"
      },
      {
        "id": "8b4c",
        "conteudo": "A vingança nunca é plena... mata a alma e a envenena...",
        "autoria": "Seu Madruga"
      },
      {
        "id": "4d2e",
        "conteudo": "Se eu for aí e achar, eu esfrego na sua cara!",
        "autoria": "Mãe"
      }
];

// Único endpoint
app.get("/pensamentos", (req, res) => {
    res.json(pensamentos);
});

// Único endpoint
app.get("/pensamento/:id", (req, res) => {

  const id = req.params.id;

  const pensamento = pensamentos.find(p => p.id === id)

  if(!pensamento){
    throw console.error('Pensamento nao encontrado');
  }
    res.json(pensamento);
});

// POST - Cadastrar novo pensamento
app.post("/pensamentos", (req, res) => {

    const { conteudo, autoria } = req.body;

    // Validar os dados recebidos
    if (!conteudo || !autoria) {
        return res.status(400).json({
            mensagem: "Conteúdo e autoria são obrigatórios."
        });
    }

    // Criar novo pensamento
    const novoPensamento = {
        id: crypto.randomUUID(),
        conteudo,
        autoria
    };

    // Adicionar ao array
    pensamentos.push(novoPensamento);

    // Retornar o pensamento cadastrado
    res.status(201).json(novoPensamento);
});


// PUT - Editar um pensamento existente
app.put("/pensamento/:id", (req, res) => {
    const id = req.params.id;
    const { conteudo, autoria } = req.body;

    // Buscar o pensamento pelo ID
    const pensamento = pensamentos.find(p => p.id === id);

    if (!pensamento) {
        return res.status(404).json({
            mensagem: "Pensamento não encontrado"
        });
    }

    // Validar os dados recebidos
    if (!conteudo || !autoria) {
        return res.status(400).json({
            mensagem: "Conteúdo e autoria são obrigatórios"
        });
    }

    // Atualizar o pensamento existente
    pensamento.conteudo = conteudo;
    pensamento.autoria = autoria;

    // Retornar o pensamento atualizado
    return res.status(200).json(pensamento);
});


// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
