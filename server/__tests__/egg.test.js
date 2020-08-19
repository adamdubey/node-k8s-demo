const request = require("supertest");
const app = require("../index");

describe("Test /api/thanks", () => {
  it("should return a message", async () => {
    const response = await request(app).get("/api/thanks");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      "Thank you for inviting me to take on this challenge!"
    );
  });
});
