# Image Validate

Image Validate a package to validate image

## Getting Started

Install package with npm

```bash
npm install image-validate
```

or with yarn

```bash
yarn add image-validate
```

## Usage

```jsx | pure
import ImgValidation from "img-validation";

// validate a base64 string
const isValidBase64 = await ImgValidation.isValidBase64(base64String);

// validate a URL
const isValidUrl = await ImgValidation.url(url);

// validate a file
const isValidFile = await ImgValidation.file(file);

// validate a buffer
const isValidBuffer = await ImgValidation.buffer(buffer);

// validate a stream
const isValidStream = await ImgValidation.stream(stream);

// validate a file path
const isValidPath = await ImgValidation.path(path);

// validate any image input
const isValidImage = await ImgValidation.isValidImage(image);

```
