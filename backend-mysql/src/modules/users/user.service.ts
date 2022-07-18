import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";

import { prisma } from "../../database/prismaClient";

import { UserSignInDTO } from "./dtos/user.signin.dtos";

export default class UserService {
  async signin({ userName, password }: UserSignInDTO) {
    //Identifica se foi usando o email ou userName

    //if (userName.indexOf("@") != -1) {
    // email
    //  console.log("email: " + userName + " password: " + password);
    //   const user = await prisma.users.findFirst({
    //     select: {
    //       id: true,
    //       name: true,
    //       userName: true,
    //       cellPhone: true,
    //       email: true,
    //       avatar: true,
    //       password: true,
    //     },
    //     where: {
    //       email: userName,
    //     },
    //   });
    // } else {
    console.log("username: " + userName + " password: " + password);
    const user = await prisma.users.findFirst({
      select: {
        id: true,
        name: true,
        userName: true,
        cellPhone: true,
        email: true,
        avatar: true,
        password: true,
      },
      where: {
        userName,
      },
    });
    //}

    if (!user!.id) {
      console.log("Error");
      throw new Error("Nome do usuário ou senha são inválidos!");
    }
    //Verificar se senha corresponde ao username
    const passwordMatch = await compare(password, user!.password);
    if (!passwordMatch) {
      throw new Error("Nome do usuário ou senha são inválidos!");
    }

    //apaga password do existUser para não retorna para o client
    delete user!.password;

    // Gerar token
    const token = sign({ user }, "019acc25a4e242bb55ad489832ada12d", {
      subject: user!.id,
      expiresIn: "1d",
    });

    const result = {
      token: token,
      user: user,
    };

    console.log(result);
    return result;
  }
}
function env(arg0: string) {
  throw new Error("Function not implemented.");
}
