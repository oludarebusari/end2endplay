import test from "@playwright/test";

test.describe("Tips & Tricks Page Tests", () => {
  test("TestInfo Object", async ({ page }) => {
    await page.goto("https://example.com");
    const testInfo = test.info();
    // console.log("Test Info:", testInfo);
  });
  test("Test Skip browser", async ({ page, browserName }) => {
    test.skip(
      browserName === "chromium",
      "Feature not implemented yet for Chromium"
    );
    await page.goto("https://example.com");
  });

  test("Test Fixme Annotation", async ({ page, browserName }) => {
    test.fixme(
      browserName === "chromium",
      "Test is not stable, needs to be fixed"
    );
    await page.goto("https://example.com");
  });

  const people = ["Mike", "Alice", "Bob", "Charlie", "Diana"];
  for (const person of people) {
    test(`Test for person: ${person}`, async ({ page }) => {
      await page.goto("http://zero.webappsecurity.com/index.html");
      await page.fill("#searchTerm", person);
      await page.waitForTimeout(3000); // Wait for 1 second to simulate some processing time
      // Perform actions specific to the person
      // console.log(`Testing for person: ${person}`);
    });
  }

  test("Multiple Browser Tabs in a Browser", async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    await page1.goto("https://example.com");
    await page2.goto("https://www.yahoo.com");
    await page1.waitForTimeout(5000);

  });
});
