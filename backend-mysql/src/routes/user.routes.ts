/**
 * File: route.ts
 * Author: Jones Kleber
 * Version: 0.0.1
 * Date: 04/07/2022
 * Description: Gerencia as rotas da aplicação e gera o arquivo de log.
 * Para organização do projeto o arquivo router está com a função de identificar o a entidade de rota e transferir o fluxo da solicitação para essa entidade. Exemplo: User / Client / Etc.
 */

import { Router } from "express";
import UserController from "../modules/users/users.controller";
import { CreateUsersController } from "../modules/users/maintenances/CreateUsersController";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/signin", userController.signin);

// const authenticateClientController = new AuthenticateClientController();
// routes.post("/authenticate-client", authenticateClientController.handle);

const createUsersController = new CreateUsersController();
userRouter.post("/signup", createUsersController.handle);

userRouter.get("/me", userController.me);

export default userRouter;

// import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
// import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
// import { AuthenticateClientController } from "../../old/modules/account/AuthenticateClient/AuthenticateClientController";
// import { AuthenticateDeliverymanController } from "../../old/modules/account/AuthenticateDeliveryman/AuthenticateDeliverymanController";
// import { CreateClientController } from "../../old/modules/clients/useCases/CreateClientController";
// import { FindAllDeliveriesController } from "../../old/modules/clients/useCases/FindAllDeliveriesController";
// import { CreateDeliveriesController } from "../../old/modules/deliveries/useCases/createDelivery/CreateDeliveriesController";
// import { FindAllAvailableController } from "../../old/modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
// import { FindAllDeliveriesDeliverymanController } from "../../old/modules/deliveries/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";
// import { UpdateDeliverymanController } from "../../old/modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
// import { UpdateEndDateController } from "../../old/modules/deliveries/useCases/updateEndDate/UpdateEndDateController";

// import { CreateDeliverymanController } from "../../old/modules/deliveryman/useCases/CreateDeliverymanController";

// // Users
// userRouter.get("/me", (req, res) => {
//   return Users(req, res);
// });
// userRouter.post("/signup", (req, res) => {
//   return CreateUser(req, res);
// });

// userRouter.post("/signin", (req, res) => {
//   return AuthUser(req, res);
// });

// // Rota de Autenticação
// const authenticateClientController = new AuthenticateClientController();
// routes.post("/authenticate-client", authenticateClientController.handle);

// const authenticateDeliverymanController =
//   new AuthenticateDeliverymanController();
// routes.post(
//   "/authenticate-deliveryman",
//   authenticateDeliverymanController.handle
// );

// // Rota de Criação
// const createClientController = new CreateClientController();
// routes.post("/client", createClientController.handle);

// const createDeliverymanController = new CreateDeliverymanController();
// routes.post("/deliveryman", createDeliverymanController.handle);

// // entregas do cliente
// const findAllDeliveriesController = new FindAllDeliveriesController();
// routes.get(
//   "/client/deliveries",
//   ensureAuthenticateClient,
//   findAllDeliveriesController.handle
// );

// // entregas do deliveryman
// const findAllDeliveriesDeliverymanController =
//   new FindAllDeliveriesDeliverymanController();
// routes.get(
//   "/deliveryman/deliveries",
//   ensureAuthenticateDeliveryman,
//   findAllDeliveriesDeliverymanController.handle
// );

// // Rotas de Deliveries
// const createDeliveriesController = new CreateDeliveriesController();
// routes.post(
//   "/delivery",
//   ensureAuthenticateClient,
//   createDeliveriesController.handle
// );

// const findAllAvailableController = new FindAllAvailableController();
// routes.get(
//   "/delivery/available",
//   ensureAuthenticateDeliveryman,
//   findAllAvailableController.handle
// );

// const updateDeliverymanController = new UpdateDeliverymanController();
// routes.put(
//   "/delivery/updateDeliveryman/:id",
//   ensureAuthenticateDeliveryman,
//   updateDeliverymanController.handle
// );

// const updateEndDateController = new UpdateEndDateController();
// routes.put(
//   "/delivery/updateEndDate/:id",
//   ensureAuthenticateDeliveryman,
//   updateEndDateController.handle
// );
