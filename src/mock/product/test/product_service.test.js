const ProductService = require("../product_service.js");
const StubProdcutClient = require("./stub_product_client.js");

describe("ProductService", () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProdcutClient());
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });
});
