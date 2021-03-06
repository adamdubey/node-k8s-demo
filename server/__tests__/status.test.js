const request = require("supertest");
const app = require("../index");

describe("Test /api/status", () => {
  it("should return OK", async () => {
    const response = await request(app).get("/api/status");

    expect(response.status).toBe(200);
    expect(response.text).toBe("OK");
  });
});
