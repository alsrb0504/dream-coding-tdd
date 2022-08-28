const UserService = require("../user_service.js");
const UserClient = require("../user_client.js");

jest.mock("../user_client");

describe("UserService", () => {
  let service;

  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  beforeEach(() => {
    service = new UserService(new UserClient());
  });

  it("return true when login success", async () => {
    const result = await service.login("test", "1234");
    expect(result).toBe(true);
  });

  it("should not call login() on UserClient again if already logged in", async () => {
    await service.login("test", "1234");
    await service.login("test", "1234");

    expect(login.mock.calls.length).toBe(1);
    expect(login).toHaveBeenCalledTimes(1);
  });
});
