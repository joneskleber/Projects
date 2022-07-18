/**
 * File: FindUserMeControllers.ts
 * Author: Jones Kleber
 * Version: 0.0.1
 * Date: 04/07/2022
 * Description: É quem recebe as informações do users.controller para serem repassadas
 * para o FindUserMeUseCase
 *
 * O acesso ao banco de dados não é em nenhum momento exposto ao mundo externo. Sempre vai passar por esse controller. O controller é quem mantém o contrato com o mundo externo.
 *
 * Dessa forma qualquer mudança de banco de dados deve-se alterar somente o UseCase e manter o contrato inalterado.
 */

import { Request, Response } from "express";

export class FindUserMeController {
  async handle(request: Request, response: Response) {
    // const { name, userName, email, cellPhone, password } = request.body;

    // const createUsersUseCase = new CreateUsersUseCase();
    // const result = await createUsersUseCase.execute({
    //   name,
    //   userName,
    //   email,
    //   cellPhone,
    //   password,
    // });

    const result = {
      id: "05942d06-aad6-40d1-b452-32201dcf09a9",
      name: "Jones Kleber Moreira dos Santos",
      userName: "jksantos",
      cellPhone: "(24) 98823-5034",
      email: "jksantos@vows.com.br",
      avatar: "https://avatars.githubusercontent.com/u/27815136?v=4",
    };

    return response.json(result);
  }
}
