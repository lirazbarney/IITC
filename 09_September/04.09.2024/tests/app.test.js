const request = require("supertest");
const app = require("../server.js"); // Adjust this path to point to your Express app

describe("GET /data", () => {
  it("should respond with JSON data", async () => {
    const response = await request(app).get("/data");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();

    // expect(response.body.token).toBeDefined();
  });

  it("should respond with status code 200", async () => {
    const response = await request(app).get("/data");
    expect(response.statusCode).toBe(200);
  });
});

describe("add", () => {
  test("return success", () => {
    expect(app.add()).toBe("success");
  });
});

describe("sum", () => {
  test("sum two positive numbers", () => {
    expect(app.sum(1, 3)).toBe(4);
  });
});

describe(`my tests`, () => {
  it(`1: should checks concat length`, async () => {
    const str1 = `hello, `,
      str2 = `world!`;
    const str3 = str1 + str2;
    expect(str3.length).toBe(str1.length + str2.length);
  });

  it(`2: should checks split`, async () => {
    const str1 = `hello`;
    const arr = str1.split(``);
    expect(arr.length).toBe(str1.length);
  });

  it(`3: should checks join`, async () => {
    const arr = ["h", "e", "l", "l", "o"];
    const str1 = arr.join(` `);
    expect(str1.length).toBe(arr.length * 2 - 1);
  });

  it(`4: should checks repeat`, async () => {
    const str1 = `hello`;
    const str2 = str1.repeat(3);
    expect(str2.length).toBe(str1.length * 3);
  });

  it(`5: should checks trim`, async () => {
    const str1 = ` he ll    o`;
    const str2 = str1.trim(` `);
    expect(str2.length).toBeLessThan(str1.length);
  });

  it(`6: should checks shift`, async () => {
    const arr = [1, 2, 3];
    arr.shift();
    expect(arr[0]).not.toBe(1);
  });

  it(`7: should checks concat`, async () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5];
    const arr3 = arr1.concat(arr2);
    expect(arr3).toContain(1);
    expect(arr3).toContain(2);
    expect(arr3).toContain(3);
    expect(arr3).toContain(4);
    expect(arr3).toContain(5);
  });

  it(`8: should checks `, async () => {});
});

// // describe('POST /data', () => {
// //     it('should respond with a successful message', async () => {
// //         const mockData = { key: 'value' };
// //         const response = await request(app)
// //             .post('/data')
// //             .send(mockData);
// //         expect(response.statusCode).toBe(200);
// //         expect(response.body.message).toBe('Data successfully sent via Axios, and Selenium task completed');
//     });
// });
