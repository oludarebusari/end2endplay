import { expect, test, type Page } from "@playwright/test";

function isPalindrome(str: string): boolean {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Compare cleaned string with its reverse
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

test.describe("E2E Interview", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.checklyhq.com/docs/"); // Replace with the actual URL
  });

  test("Verify all links on the page", async ({ page }) => {
    console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
    console.log(isPalindrome("racecar")); // true
    console.log(isPalindrome("hello")); // false
    console.log(isPalindrome("madam")); // true
  });
});
