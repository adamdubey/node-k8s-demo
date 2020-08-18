const request = require("supertest");
const app = require("../index");

describe("Test /api/automate", () => {
  it("should return a message", async () => {
    const response = await request(app).get("/api/automate");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Automate all the things");
  });
});
