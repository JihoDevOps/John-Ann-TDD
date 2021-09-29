const httpMocks = require("node-mocks-http");
const newProduct = require("../data/new-product.json");

const productController = require("../../controller/products");
const productModel = require("../../models/Product");

productModel.create = jest.fn();

// node-mocks-http variables
let request = httpMocks.createRequest();
let response = httpMocks.createResponse();
let next = jest.fn();

beforeEach(() => {
  request = httpMocks.createRequest();
  response = httpMocks.createResponse();
  next = jest.fn();
});

describe("Product Controller Create", () => {

  beforeEach(() => {
    request.body = newProduct;
  });

  test("should have a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });

  test("should call Product.create", async () => {
    await productController.createProduct(request, response, next);
    expect(productModel.create).toBeCalledWith(newProduct);
  });
  
  test("should return 201 response code", async () => {
    await productController.createProduct(request, response, next);
    expect(response.statusCode).toBe(201);
    expect(response._isEndCalled()).toBeTruthy();
  });

  test("should return json body in response", async () => {
    productModel.create.mockReturnValue(newProduct);
    await productController.createProduct(request, response, next);
    expect(response._getJSONData()).toStrictEqual(newProduct);
  });

  test("should handle errors", async () => {
    const errorMessage = { message: "description property missing." };
    const rejectedPromise = Promise.reject(errorMessage);
    productModel.create.mockReturnValue(rejectedPromise);
    await productController.createProduct(request, response, next);
    expect(next).toBeCalledWith(errorMessage);
  });

});
