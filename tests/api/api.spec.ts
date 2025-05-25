import { test, expect } from "@playwright/test";
import playapiConfig, { apiKey } from "../../playapi.config";

test.describe("API Testing", () => {
  const baseUrl = playapiConfig.use?.baseURL;
  const headers = {
    headers: { "x-api-key": apiKey },
  };

  test("Simple API Test - Assert Response Status", async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2`, headers);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.first_name).toBe("Janet");
    expect(responseBody.data.last_name).toBe("Weaver");
    expect(responseBody.data.email).toBeTruthy();
  });

  test("Simple API Test - Assert Invalid Endpoint", async ({ request }) => {
    const response = await request.get(
      `${baseUrl}/users/non-existing-endpoint`,
      headers
    );
    expect(response.status()).toBe(404);
  });

  test("GET Request - Get User Detail", async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/1`, headers);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.data.id).toBe(1);
    expect(responseBody.data.first_name).toBe("George");
    expect(responseBody.data.last_name).toBe("Bluth");
    expect(responseBody.data.email).toBeTruthy();
  });

  test("POST Request - Create New User", async ({ request }) => {
    const response = await request.post(`${baseUrl}/user`, {
      ...headers,
      data: {
        id: 1000,
      },
    });
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody.id).toBe(1000);
    expect(responseBody.createdAt).toBeTruthy();
  });

  test("POST Request - Login", async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      ...headers,
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    });
    const responseBody = await response.json(); 
    expect(response.status()).toBe(200);
    expect(responseBody.token).toBeTruthy();
  });

  test("POST Request - Login Fail", async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      ...headers,
      data: {
        email: "eve.holt@reqres.in",
      },
    });
    const responseBody = await response.json();
    expect(response.status()).toBe(400);
    expect(responseBody.error).toBe("Missing password");
  });

  test("PUT Request - Update User", async ({ request }) => {
    const response = await request.put(`${baseUrl}/users/2`, {
      ...headers,
      data: {
        name: "new name",
        job: "new job",
      },
    });
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe("new name");
    expect(responseBody.job).toBe("new job");
    expect(responseBody.updatedAt).toBeTruthy();
  });

  test("DELETE Request - Delete User", async ({ request }) => {
    const response = await request.delete(`${baseUrl}/users/2`, headers);
    expect(response.status()).toBe(204);
  });
});
