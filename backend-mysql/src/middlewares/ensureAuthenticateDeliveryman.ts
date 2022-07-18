import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: "Token missing" });
  }

  // Bearer + token
  // Bearer 929121921l13213
  //[0] - Bearer
  //[1] - 929121921l13213
  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "019acc25a4e2427755ad489832ada12d"
    ) as IPayload;

    request.id_deliveryman = sub;

    // é preciso criar esse tipo dentro do request. Ver a pasta @types

    return next();
  } catch (err) {
    return response.status(401).json({ message: "Invalid token!" });
  }
}
