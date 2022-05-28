const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Visão On-line API Gateway is running"));

app.listen(3000);


// executar o comando  para subir a aplicação
// sudo docker-compose -f docker-compose.yml -f docker-production.yml up --build -d
