class StubProdcutClient {
  async fetchItems() {
    return [
      { item: "Milk", available: true },
      { item: "Banana", available: false },
    ];
  }
}

module.exports = StubProdcutClient;
