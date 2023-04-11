declare module "img-validation" {
  export default class ImgValidation {
    static base64(base64String: string): Promise<boolean>;
    static url(url: string): Promise<boolean>;
    static file(file: any): Promise<boolean>;
    static buffer(buffer: any): Promise<boolean>;
    static stream(stream: any): Promise<boolean>;
    static path(path: any): Promise<boolean>;
    static isValidImage(image: any): Promise<boolean>;
    static isValidBase64(
      base64String:
        | WithImplicitCoercion<string>
        | { [Symbol.toPrimitive](hint: "string"): string }
    ): Promise<boolean>;
  }
}
