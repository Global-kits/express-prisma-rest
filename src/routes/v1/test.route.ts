import express, { Express } from "express";
import { TestController } from "../../controllers";

const controller = new TestController();
const routeName = "/test";

export default (router: Express, prefix: string) => {
  router.get(prefix + routeName, controller.getAll);
  router.get("/abc", (req, res) => {
    return res.json("hello testing auth route");
  });
  return;
};
