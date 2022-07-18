import { Router } from "express";
import userRouter from "./user.routes";

const routes = Router();

// Check status of the server
routes.get("/status", (req, res) => {
  return res.send(`<h1>Visão On-line Web Services</h1>
         <p style='color:blue; font-size:24px'>Todos os serviços estão ativos!</p>`);
});

routes.use("/user", userRouter);

export default routes;
