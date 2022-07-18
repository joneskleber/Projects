/**
 * File: server.ts
 * Author: Jones Kleber
 * Version: 0.0.1
 * Date: 04/07/2022
 * Description: Para os arquivos do servidor usa-se a extensão do arquivo ts ao invés de tsx. Isso porque o servidor não irá expor informações no browser.
 *
 * Fluxo da aplicação:
 * 1. server.ts: arquivo principal onde expõe a porta em que o servidor ficar rodando.
 * 2. routes.ts: arquivo que gerencia as rotas do servidor.
 * 3. middleware.xx: Middleware que fica ouvindo as solicitações e valida o acesso à rota
 * 4.
 */

import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

// tratamento de erro
const errorHandling = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

app.use(routes);
app.use(errorHandling);

const port = process.env.PORT || 9001;
app.listen(port, () => {
  console.log(`⚡️ Server is running on port ${port}!`);
});
