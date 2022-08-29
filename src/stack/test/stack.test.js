const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allows to push item", () => {
    stack.push("apple");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("throws an error if stack is empty", () => {
      expect(() => stack.pop()).toThrow("stack is empty");
    });

    it("returns the last pushed item and removes the stack", () => {
      stack.push("apple");
      stack.push("banana");
      expect(stack.pop()).toBe("banana");
      expect(stack.size()).toBe(1);
    });
  });

  describe("peek", () => {
    it("throws an error if stack is empty", () => {
      expect(() => stack.peek()).toThrow("stack is empty");
    });

    it("returns the last pushed item and keeps in the stack", () => {
      stack.push("apple");
      stack.push("banana");
      expect(stack.peek()).toBe("banana");
      expect(stack.size()).toBe(2);
    });
  });
});
