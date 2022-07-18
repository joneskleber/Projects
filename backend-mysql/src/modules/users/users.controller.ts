/**
 * File: users.ts
 * Author: Jones Kleber
 * Version: 0.0.1
 * Date: 18/06/2022
 * Description: Routes.Users
 *
 */

import { Request, Response } from "express";
import UserService from "./user.service";

// // entregas do cliente
// const findAllDeliveriesController = new FindAllDeliveriesController();
// routes.get(
//   "/client/deliveries",
//   ensureAuthenticateClient,
//   findAllDeliveriesController.handle
// );

export default class FindUserMeController {
  async signin(req: Request, res: Response) {
    const { userName, password } = req.body;

    const userService = new UserService();

    const user = await userService.signin({ userName, password });

    return res.status(200).send(user);
  }

  async signup(req: Request, res: Response) {
    const user = {
      id: "05942d06-aad6-40d1-b452-32201dcf09a9",
      name: "Jones Kleber M. dos Santos",
      userName: "jksantos",
      cellPhone: "(24) 98823-5033",
      email: "jksantos@vows.com.br",
      avatar: "https://avatars.githubusercontent.com/u/27815136?v=4",
    };
    return res.status(200).send(user);
  }

  async me(req: Request, res: Response) {
    // repassa para o service FindUserMeUseCase a execução da solicitação

    const user = {
      id: "05942d06-aad6-40d1-b452-32201dcf09a9",
      name: "Jones Kleber M. dos Santos",
      userName: "jksantos",
      cellPhone: "(24) 98823-5033",
      email: "jksantos@vows.com.br",
      avatar: "https://avatars.githubusercontent.com/u/27815136?v=4",
    };
    return res.status(200).send(user);
  }
}

// import { CreateUsersController } from "./maintenance/CreateUsersController";
// import { AuthUsersController } from "./auth/AuthUsersController";

// export function Users(request: Request, response: Response) {
//   const user = {
//     id: "05942d06-aad6-40d1-b452-32201dcf09a9",
//     name: "Jones Kleber Moreira dos Santos",
//     userName: "jksantos",
//     cellPhone: "(24) 98823-5034",
//     email: "jksantos@vows.com.br",
//     password: "$2b$10$ECOfMl9XnPeTAfhox9.CgO5j2g0XXHy9kNquBfxHG5XUFjQ7c3.FW",
//   };

//   return response.json(user);
// }

// export function CreateUser(request: Request, response: Response) {
//   const createUsersController = new CreateUsersController();
//   createUsersController.handle(request, response);
// }

// export function AuthUser(request: Request, response: Response) {
//   const authUsersController = new AuthUsersController();
//   authUsersController.handle(request, response);
// }
