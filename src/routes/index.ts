import { Express } from "express";
import testRoute from "./v1/test.route";

const PREFIX = "/api/v1";
export default (router: Express) => {
  testRoute(router, PREFIX);
  return;
};
