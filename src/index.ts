import sharp from "sharp";

class ImgValidation {
  static async base64(base64String: string) {
    try {
      const base64 = Buffer.from(base64String, "base64");
      const metadata = await sharp(base64).metadata();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.resolve(false);
    }
  }

  static async url(url: string) {
    try {
      const metadata = await sharp(url).metadata();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.resolve(false);
    }
  }

  static async file(file: any) {
    try {
      const metadata = await sharp(file).metadata();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.resolve(false);
    }
  }

  static async buffer(buffer: any) {
    try {
      const metadata = await sharp(buffer).metadata();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.resolve(false);
    }
  }

  static async stream(stream: any) {
    try {
      const metadata = await sharp(stream).metadata();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.resolve(false);
    }
  }

  static async path(path: any) {
    try {
      const metadata = await sharp(path).metadata();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.resolve(false);
    }
  }

  static async isValidImage(image: any) {
    try {
      const metadata = await sharp(image).metadata();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.resolve(false);
    }
  }

  static async isValidBase64(
    base64String:
      | WithImplicitCoercion<string>
      | { [Symbol.toPrimitive](hint: "string"): string }
  ) {
    try {
      const base64 = Buffer.from(base64String, "base64");
      const metadata = await sharp(base64).metadata();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.resolve(false);
    }
  }
}

export default ImgValidation;
