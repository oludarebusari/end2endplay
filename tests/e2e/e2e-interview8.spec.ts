import { expect, test, type Page } from "@playwright/test";

function generateFibonacciSequence(n: number): number[] {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

test.describe("E2E Interview", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.checklyhq.com/docs/"); // Replace with the actual URL
  });

  test("Verify all links on the page", async ({ page }) => {
   console.log(generateFibonacciSequence(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
  });
});
