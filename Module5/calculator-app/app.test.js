const request = require("supertest");
const app = require("./app");

describe("Calculator API", () => {
    test("GET /calculator/add => sum of two numbers", async () => {
        const res = await request(app).get("/calculator/add?num1=5&num2=3");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ result: 8 });
    });

    test("GET /calculator/subtract => difference of two numbers", async () => {
        const res = await request(app).get("/calculator/subtract?num1=10&num2=4");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ result: 6 });
    });

    test("GET /calculator/multiply => product of two numbers", async () => {
        const res = await request(app).get("/calculator/multiply?num1=3&num2=7");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ result: 21 });
    });

    test("GET /calculator/divide => quotient of two numbers", async () => {
        const res = await request(app).get("/calculator/divide?num1=8&num2=2");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ result: 4 });
    });

    test("GET /calculator/divide with zero divisor => error", async () => {
        const res = await request(app).get("/calculator/divide?num1=8&num2=0");
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: "Division by zero is not allowed" });
    });
});
