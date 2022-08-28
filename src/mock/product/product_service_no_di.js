const ProductClient = require("./product_client.js");
class ProductService {
  constructor() {
    this.ProductClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.ProductClient.fetchItems().then((items) =>
      items.filter((item) => item.available)
    );
  }
}

module.exports = ProductService;
