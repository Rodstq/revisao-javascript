
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
    "autoria": "Grupo da família",
    "favorito": true,
    "data": "2026-01-12T14:32:00.000Z"
  },
  {
    "id": "4c7d",
    "conteudo": "Da vida reclama, mas sem ela não vive!",
    "autoria": "Mestre Yoda",
    "favorito": false,
    "data": "2026-02-05T09:15:00.000Z"
  },
  {
    "id": "5b8a",
    "conteudo": "Na minha máquina funciona!",
    "autoria": "Dev",
    "favorito": false,
    "data": "2026-02-21T18:45:00.000Z"
  },
  {
    "id": "68uy",
    "conteudo": "Esse é de laranja que parece de limão, mas tem gosto de tamarindo!",
    "autoria": "Chaves",
    "favorito": false,
    "data": "2026-03-10T11:20:00.000Z"
  },
  {
    "id": "b807",
    "conteudo": "Melhor professor, o fracasso é!",
    "autoria": "Mestre Yoda",
    "favorito": false,
    "data": "2026-04-03T16:05:00.000Z"
  },
  {
    "id": "9f3c",
    "conteudo": "Você não é todo mundo!",
    "autoria": "Mãe",
    "favorito": false,
    "data": "2026-04-28T08:40:00.000Z"
  },
  {
    "id": "6a2b",
    "conteudo": "Foi sem querer querendo!",
    "autoria": "Chaves",
    "favorito": false,
    "data": "2026-05-17T20:10:00.000Z"
  },
  {
    "id": "7e2a",
    "conteudo": "Que a força esteja com você!",
    "autoria": "Mestre Yoda",
    "favorito": false,
    "data": "2026-06-09T13:55:00.000Z"
  },
  {
    "id": "5c8f",
    "conteudo": "Resolver o bug não consegue? Esfriar a cabeça vc deve.",
    "autoria": "Mestre Yoda",
    "favorito": false,
    "data": "2026-07-14T17:25:00.000Z"
  },
  {
    "id": "2d6e",
    "conteudo": "Não faça drama, faça café! :)",
    "autoria": "Dev",
    "favorito": false,
    "data": "2026-08-02T10:30:00.000Z"
  },
  {
    "id": "3f1a",
    "conteudo": "Conserta minha impressora?",
    "autoria": "Grupo da família",
    "favorito": true,
    "data": "2026-08-26T15:50:00.000Z"
  },
  {
    "id": "8b4c",
    "conteudo": "A vingança nunca é plena... mata a alma e a envenena...",
    "autoria": "Seu Madruga",
    "favorito": false,
    "data": "2026-09-18T19:12:00.000Z"
  },
  {
    "id": "4d2e",
    "conteudo": "Se eu for aí e achar, eu esfrego na sua cara!",
    "autoria": "Mãe",
    "favorito": false,
    "data": "2026-10-25T12:38:00.000Z"
  }
];


// Único endpoint
app.get("/pensamentos", (req, res) => {
    res.json(pensamentos);
});

// Único endpoint
app.get("/pensamentos/:id", (req, res) => {

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
app.put("/pensamentos/:id", (req, res) => {
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


app.delete("/pensamentos/:id", (req, res) =>{
  const id = req.params.id

  const index = pensamentos.findIndex(p => p.id === id)

   if (index === -1) {
        return res.status(404).json({
            mensagem: "Pensamento não encontrado"
        });
    }

    pensamentos.splice(index, 1);

     // Retornar resposta de sucesso
    return res.status(200).json({
        mensagem: "Pensamento excluído com sucesso"
    });

});

app.patch("/pensamentos/:id", (req, res) =>{
  const { id } = req.params;
  const { favorito } = req.body;

    console.log("ID:", id);
    console.log("Body:", req.body);
    console.log("Favorito:", favorito);
    console.log("Tipo:", typeof favorito);

  const pensamento = pensamentos.find(p => p.id === id);

    if (!pensamento) {
        return res.status(404).json({
            mensagem: "Pensamento não encontrado"
        });
    }

    if (typeof favorito !== "boolean") {
        return res.status(400).json({
            mensagem: "O campo favorito deve ser um booleano"
        });
    }

    pensamento.favorito = favorito;

   return res.status(200).json({
        mensagem: "Favorito atualizado com sucesso",
        pensamento
    });

})


// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
