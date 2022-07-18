/**
 * File: AuthUsersUseCase.ts
 * Author: Jones Kleber
 * Version: 0.0.1
 * Date: 18/06/2022
 * Description: AuthUsersUseCase é o responsável por autenticar um usuário no banco de dados.
 *
 * O usuário poderá se autenticar com o username ou o email.
 *
 */

import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Users } from "../users.controller";

interface IAuthUsersUseCase {
  userName: string;
  password: string;
}

export class AuthUsersUseCase {
  async execute({ userName, password }: IAuthUsersUseCase) {
    // Verificar se é username é um email que está sendo recebido como parâmetro

    // receber username e password
    const user = await prisma.users.findFirst({
      where: {
        userName,
      },
    });

    if (!user) {
      throw new Error("Nome do usuário ou senha são inválidos!");
    }

    // Verificar se senha corresponde ao username
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Nome do usuário ou senha são inválidos!");
    }

    // Gerar token
    const token = sign({ userName }, "019acc25a4e242bb55ad489832ada12d", {
      subject: user.id,
      expiresIn: "1d",
    });
    return token;
  }
}
