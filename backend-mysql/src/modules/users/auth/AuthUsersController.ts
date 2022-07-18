/**
 * File: AuthUsersController.ts
 * Author: Jones Kleber
 * Version: 0.0.1
 * Date: 18/06/2022
 * Description: AuthUsersController é quem recebe as informações para serem repassadas
 *
 */

import { Request, Response } from "express";

import { AuthUsersUseCase } from "./AuthUsersUseCase";

export class AuthUsersController {
  async handle(request: Request, response: Response) {
    const { userName, password } = request.body;

    const authUsersUseCase = new AuthUsersUseCase();
    const result = await authUsersUseCase.execute({
      userName,
      password,
    });
    console.log(result);
    response.json(result);
  }
}
