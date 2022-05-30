import "express-async-errors";
import express, { NextFunction, Request, response, Response } from "express";
import { routes } from "./routes";

const app = express();
app.use(express.json());

// tratamento de erro
const errorHandling = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

app.use(routes);
app.use(errorHandling);

app.listen(9002, () => {
  console.log("Server is running on port 9002!");
});
