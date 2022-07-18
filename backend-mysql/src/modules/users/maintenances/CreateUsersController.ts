/**
 * File: CreateUsersController.ts
 * Author: Jones Kleber
 * Version: 0.0.1
 * Date: 18/06/2022
 * Description: CreateUsersController é quem recebe as informações para serem repassadas
 * para o CreateUsersUseCase.
 *
 * Quem está exporto para iterar com o usuário é o Controller.
 *
 */

import { Request, Response } from "express";
import { CreateUsersUseCase } from "./CreateUsersUseCase";

export class CreateUsersController {
  async handle(request: Request, response: Response) {
    const { name, userName, email, cellPhone, password, avatar } = request.body;

    const createUsersUseCase = new CreateUsersUseCase();
    const result = await createUsersUseCase.execute({
      name,
      userName,
      email,
      cellPhone,
      password,
      avatar,
    });

    return response.json(result);
  }
}

// export class CreateUsersController {
//   async handle(req: Request, res: Response) {
//     const user = {
//       id: "05942d06-aad6-40d1-b452-32201dcf09a9",
//       name: "Jones Kleber M. dos Santos",
//       userName: "jksantos",
//       cellPhone: "(24) 98823-5033",
//       email: "jksantos@vows.com.br",
//       avatar: "https://avatars.githubusercontent.com/u/27815136?v=4",
//     };
//     return res.status(200).send(user);
//   }
// }
