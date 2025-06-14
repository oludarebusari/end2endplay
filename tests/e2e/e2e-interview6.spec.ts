import { expect, test, type Page } from "@playwright/test";

/**
 * Filters an array of numbers, returning only the even numbers.
 * @param numbers The input array of numbers.
 * @returns A new array containing only the even numbers.
 */
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

test.describe("E2E Interview", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.checklyhq.com/docs/"); // Replace with the actual URL
  });

  test("Verify all links on the page", async ({ page }) => {
    // --- Example Usage ---
    const myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers: number[] = filterEvenNumbers(myNumbers);

    console.log("Original numbers:", myNumbers);
    console.log("Even numbers (using filter):", evenNumbers); // Output: [2, 4, 6, 8, 10]

    // Example with an empty array
    const emptyArray: number[] = [];
    const evenFromEmpty: number[] = filterEvenNumbers(emptyArray);
    console.log("Even numbers from empty array:", evenFromEmpty); // Output: []

    // Example with no even numbers
    const oddNumbersOnly: number[] = [1, 3, 5, 7, 9];
    const evenFromOdd: number[] = filterEvenNumbers(oddNumbersOnly);
    console.log("Even numbers from odd-only array:", evenFromOdd); // Output: []
  });
});
