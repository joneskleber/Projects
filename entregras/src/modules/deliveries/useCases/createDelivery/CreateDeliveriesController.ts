import { Request, Response } from "express";
import { CreateDeliveriesUseCase } from "./CreateDeliveriesUseCase";

export class CreateDeliveriesController {
  async handle(request: Request, response: Response) {
    const { item_name } = request.body;
    const { id_client } = request;

    const createDeliveriesUseCase = new CreateDeliveriesUseCase();
    const result = await createDeliveriesUseCase.execute({
      item_name,
      id_client,
    });

    return response.json(result);
  }
}
