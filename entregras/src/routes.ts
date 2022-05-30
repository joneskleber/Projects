import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/AuthenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/AuthenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/CreateClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/FindAllDeliveriesController";
import { CreateDeliveriesController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveriesController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveries/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";

import { CreateDeliverymanController } from "./modules/deliveryman/useCases/CreateDeliverymanController";

const routes = Router();

// app.get("/", (req, res) => {
//   return res.json({ message: "API Deliveries is running!" });
// });

// Rota de Autenticação
const authenticateClientController = new AuthenticateClientController();
routes.post("/authenticate-client", authenticateClientController.handle);

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
routes.post(
  "/authenticate-deliveryman",
  authenticateDeliverymanController.handle
);

// Rota de Criação
const createClientController = new CreateClientController();
routes.post("/client", createClientController.handle);

const createDeliverymanController = new CreateDeliverymanController();
routes.post("/deliveryman", createDeliverymanController.handle);

// entregas do cliente
const findAllDeliveriesController = new FindAllDeliveriesController();
routes.get(
  "/client/deliveries",
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);

// entregas do deliveryman
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();
routes.get(
  "/deliveryman/deliveries",
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);

// Rotas de Deliveries
const createDeliveriesController = new CreateDeliveriesController();
routes.post(
  "/delivery",
  ensureAuthenticateClient,
  createDeliveriesController.handle
);

const findAllAvailableController = new FindAllAvailableController();
routes.get(
  "/delivery/available",
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
);

const updateDeliverymanController = new UpdateDeliverymanController();
routes.put(
  "/delivery/updateDeliveryman/:id",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

const updateEndDateController = new UpdateEndDateController();
routes.put(
  "/delivery/updateEndDate/:id",
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle
);

export { routes };
