import { TestModel } from "../../models/test.model";

export class TestService {
  private model: TestModel;
  constructor() {
    this.model = new TestModel();
  }

  async getAll() {
    try {
      return await this.model.getAllTest();
    } catch (error) {
      let err = error as Error;
      throw new Error(error.message);
    }
  }
}
