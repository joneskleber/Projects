/**
 * File: CreateUsersUseCase.ts
 * Author: Jones Kleber
 * Version: 0.0.1
 * Date: 18/06/2022
 * Description: CreateUsersUseCase é o responsável por criar um novo usuário no banco de dados.
 * Ele recebe um objeto com os dados do usuário e o retorna com o id do usuário.
 *
 * Esse arquivo só é acesso pelo servidor, ou seja, a chama do serviço é atendida pelo
 * Controller.
 *
 */

import { prisma } from "../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateUser {
  name: string;
  userName: string;
  email: string;
  cellPhone?: string;
  password: string;
  avatar: string;
}

export class CreateUsersUseCase {
  async execute({
    name,
    userName,
    email,
    cellPhone,
    password,
    avatar,
  }: ICreateUser) {
    // Validar se o usuário já existe com o username
    const userExistUserName = await prisma.users.findFirst({
      where: {
        userName: {
          equals: userName,
          mode: "insensitive",
        },
      },
    });

    if (userExistUserName) {
      throw new Error("Username já existe no banco de dados.");
    }

    // Validar se o usuário existe com o email
    const userExistEmail = await prisma.users.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });

    if (userExistEmail) {
      throw new Error("E-mail já existe no banco de dados.");
    }

    // Criptografar a senha
    const hashPassword = await hash(password, 10);

    // Salvar o usuário
    const user = await prisma.users.create({
      data: {
        name,
        userName,
        cellPhone,
        email,
        password: hashPassword,
        avatar: avatar,
      },
    });

    // Retornar o usuário
    return user;
  }
}
