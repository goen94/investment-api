import { ApiError } from "@point-hub/express-error-handler";
import Validatorjs from "validatorjs";

export const validate = (body: any) => {
  const validation = new Validatorjs(body, {
    cashbacks: "required|array",
    "cashbacks.*.payments": "required",
    "cashbacks.*.payments.*.remaining": "required",
    "cashbacks.*.payments.*.date": "required",
    "cashbacks.*.payments.*.amount": "required",
  });

  if (validation.fails()) {
    throw new ApiError(422, validation.errors.errors);
  }
};
