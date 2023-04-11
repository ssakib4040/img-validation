import ImgValidation from "../src/index";
import validBase64String from "./base64string";

const invalidBase64String = `a random invalid string`;

ImgValidation.base64(invalidBase64String).then((isValid) => {
  console.log(isValid);
});
