class ProductClient {
  fetchItems() {
    return fetch("http://example.com/login").then((response) =>
      response.json()
    );
  }
}

module.exports = ProductClient;
