import { expect, test, type Page } from "@playwright/test";

function removeDuplicateChars(str: string): string {
  return [...new Set(str)].join('');
}

// function removeDuplicateChars(str: string): string {
//   return Array.from(new Set(str)).join("");
// }

test.describe("E2E Interview", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.checklyhq.com/docs/"); // Replace with the actual URL
  });

  test("Verify all links on the page", async ({ page }) => {
    const originalString = "hello world";
    const uniqueString = removeDuplicateChars(originalString);
    console.log(uniqueString); // "helo wrd"
  });
});
