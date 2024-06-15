import { PrismaClient } from "@prisma/client";
import prisma from "../config/prisma";
import { CreateTest } from "../types";

export class TestModel {
  protected prisma: PrismaClient;
  constructor() {
    this.prisma = prisma;
  }

  async createTest(data: CreateTest) {
    try {
      let result = await this.prisma.test.create({ data });
      return result;
    } catch (error) {
      let err = error as Error;
      throw new Error(error.message);
    }
  }

  async updateTest(data: any) {
    try {
    } catch (error) {
      let err = error as Error;
      throw new Error(error.message);
    }
  }

  async getOneTest(data: any) {
    try {
    } catch (error) {
      let err = error as Error;
      throw new Error(error.message);
    }
  }

  async getAllTest() {
    try {
      let result = await this.prisma.test.findMany();
      return result;
    } catch (error) {
      let err = error as Error;
      throw new Error(error.message);
    }
  }
}
