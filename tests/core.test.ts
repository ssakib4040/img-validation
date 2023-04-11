import { expect } from "chai";
import ImgValidation from "../src/index";
import validBase64String from "./base64string";

describe("ImgValidation application", () => {
  describe("base64 image checking", () => {
    it("should return true for a valid base64 string", async () => {
      const isValid = await ImgValidation.base64(validBase64String);
      expect(isValid).to.be.true;
    });

    it("should return false for an invalid base64 string", async () => {
      const base64String = "invalid base64 string";
      const isValid = await ImgValidation.base64(base64String);
      expect(isValid).to.be.false;
    });
  });

  // describe("url", () => {
  //   it("should return true for a valid image URL", async () => {
  //     const url = "https://example.com/image.png";
  //     const isValid = await ImgValidation.url(url);
  //     expect(isValid).to.be.true;
  //   });

  //   it("should return false for an invalid image URL", async () => {
  //     const url = "https://example.com/invalid.png";
  //     const isValid = await ImgValidation.url(url);
  //     expect(isValid).to.be.true;
  //   });
  // });

  // add similar tests for other methods
});
