import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-adapter";

import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar/listar uma informação
// POST = Criar uma informação
// PUT = Atualizar uma informação
// PATCH = Atualizar uma informação parcial
//  DELETE = Deletar uma informação
routes.get("/", (req, res) => {
  return res.send("Server is running!");
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  //   return res.status(201).json({ data: feedback });
  return res.status(201).json();
});
