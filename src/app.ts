import express from "express";
import routes from "./routes";

const app = express();
const router = express.Router();

routes(app);
app.get("/", (req, res) => {
  return res.json("hi");
});

export default app;
