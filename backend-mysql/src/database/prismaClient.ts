/**
 * File: prisma.ts
 * Author: Jones Kleber
 * Version: 0.0.1
 * Date: 04/07/2022
 * Description: Faz a conexão com o banco de dados. As strings de conexão vem do arquivo do prisma
 *
 * log: ['query'] é a opção para exibir no console o log de todas as queries realizadas no banco de dados
 */

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// export const prisma = new PrismaClient({
//   log: ["query"],
// });
