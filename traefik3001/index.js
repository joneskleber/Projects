const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send(`
      <h1>Plataforma Integrada Visão Empresarial</h1>
      <p style='color:blue; font-size:24px'>Todos os serviços estão ativos!</p>    
      <p style='color:red; font-size:24px'>Porta 3001</p>    
    `);
});

app.listen(3001);

// executar o comando  para subir a aplicação
// sudo docker-compose -f docker-compose.yml -f docker-production.yml up --build -d
