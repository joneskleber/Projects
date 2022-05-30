/**
 * File: prisma.ts
 * Description: Este arquivo é o que vai fazer a conexão com o banco de dados
 * log: ['query'] é a opção para exibir no console o log de todas as queries realizadas no banco de dados
 */

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// export const prisma = new PrismaClient({
//   log: ["query"],
// });
