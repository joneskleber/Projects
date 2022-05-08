import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());

// em produção colocar o endereço da aplicação
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("Server is running!");
});
