import { TestService } from "../../services/v1/test.service";
import { BaseResponse } from "../../utils/base-response";
import AutoBindMethod from "../../utils/auto-bind-method";

export class TestController {
  private service: TestService;
  constructor() {
    this.service = new TestService();
  }

  @AutoBindMethod
  async getAll(req, res) {
    try {
      let data = await this.service.getAll();
      return BaseResponse.susRes(res, data, "test all data.");
    } catch (error) {
      const err = error as Error;
      return BaseResponse.errRes(res, err.message);
    }
  }
}
