const express = require("express");
const app = express();
app.use(express.json());
const fs = require('fs')



let usuarios = [
  { nome: "João", idade: 19 },
  { nome: "Lucas", idade: 21 }
];


// Carrega usuários do arquivo ao iniciar
function carregarUsuarios() {
  try {
    const dados = fs.readFileSync('usuarios.json')
    usuarios = JSON.parse(dados)
  } catch (erro) {
    console.log("Arquivo não encontrado, iniciando lista vazia.")
    usuarios = []
  }
}

// Salva usuários no arquivo
function salvarUsuarios() {
  fs.writeFileSync('usuarios.json', JSON.stringify(usuarios, null, 2))
}

// Chama o carregamento ao iniciar
carregarUsuarios()


app.post('/usuario', (req, res) => {
  const usuario = req.body

  usuarios.push(usuario)
  salvarUsuarios() // salva no arquivo

  res.json({ mensagem: "Usuário criado com sucesso!", usuario })
})


app.get("/usuario", (req, res) => {
    res.json(usuarios);
});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

app.get('/usuarios', (req, res) => {
  res.json(usuarios)
})

app.get('/usuario/:nome', (req, res) => {
  const nome = req.params.nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  const usuarioEncontrado = usuarios.find(u => {
    if (!u.nome) return false

    const nomeUsuarioNormalizado = u.nome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

    return nomeUsuarioNormalizado === nome
  })

  if (!usuarioEncontrado) {
    return res.status(404).json({ erro: "Usuário não encontrado" })
  }

  res.json(usuarioEncontrado)
})

app.put('/usuario/:nome', (req, res) => {
  const nome = req.params.nome
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  const usuarioIndex = usuarios.findIndex(u => {
    const normalizado = u.nome
      ?.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return normalizado === nome
  })

  if (usuarioIndex === -1) {
    return res.status(404).json({ erro: "Usuário não encontrado" })
  }

  const dadosNovos = req.body

  usuarios[usuarioIndex] = {
    ...usuarios[usuarioIndex],
    ...dadosNovos // atualiza somente o que for enviado
  }

  salvarUsuarios()

  res.json({
    mensagem: "Usuário atualizado com sucesso",
    usuario: usuarios[usuarioIndex]
  })
})

app.delete('/usuario/:nome', (req, res) => {
  const nome = req.params.nome
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  const usuarioIndex = usuarios.findIndex(u => {
    const normalizado = u.nome
      ?.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return normalizado === nome
  })

  if (usuarioIndex === -1) {
    return res.status(404).json({ erro: "Usuário não encontrado" })
  }

  const removido = usuarios.splice(usuarioIndex, 1)[0]

  salvarUsuarios()

  res.json({
    mensagem: "Usuário removido com sucesso",
    removido
  })
})



