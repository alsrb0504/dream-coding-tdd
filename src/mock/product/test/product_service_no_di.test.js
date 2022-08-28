const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

// jest에게 "../product_client"로부터 가져온 ProductClient가 가짜 객체로 처리
jest.mock("../product_client");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "Milk", available: true },
    { item: "Banana", available: false },
  ]);
  // 가짜 객체 처리했던 ProductClient를 mock 객체로 구현
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });
});
