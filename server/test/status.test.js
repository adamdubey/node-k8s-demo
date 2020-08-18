const request = require("supertest");
const app = require("../index");

describe("Test /status", () => {
  it("should return OK", async () => {
    const response = await request(app).get("/status");
    expect(response.text).toBe("OK");
  });
});
