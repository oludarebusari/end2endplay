import { expect, test, type Page } from "@playwright/test";

/**
 * Filters an array of numbers, returning only the odd numbers.
 *
 * @param numbers An array of numbers to filter.
 * @returns An array containing only the odd numbers from the input array.
 */
function filterOddNumbers(numbers: number[]): number[] {
  const oddNumbers: number[] = []; // Initialize an empty array to store odd numbers

  // Iterate over each number in the input array
  for (const num of numbers) {
    // An odd number is an integer that is not divisible by 2.
    // This means the remainder when divided by 2 is not 0.
    // For positive numbers: num % 2 !== 0
    // For negative numbers: num % 2 !== 0 still works (e.g., -3 % 2 is -1)
    if (num % 2 !== 0) {
      oddNumbers.push(num); // Add the number to our list if it's odd
    }
  }

  return oddNumbers; // Return the array of odd numbers
}

test.describe("E2E Interview", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.checklyhq.com/docs/"); // Replace with the actual URL
  });

  test("filtering of Odd numbers", async ({ page }) => {
    // Example 1: Basic array with mixed numbers
    const numbers1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const odd1 = filterOddNumbers(numbers1);
    console.log("Original array 1:", numbers1);
    console.log("Odd numbers from array 1:", odd1);
    // Expected Output: Odd numbers from array 1: [1, 3, 5, 7, 9]

    // Example 2: Array with negative numbers and zero
    const numbers2: number[] = [-5, -4, 0, 1, 2, 3, 10, 11];
    const odd2 = filterOddNumbers(numbers2);
    console.log("\nOriginal array 2:", numbers2);
    console.log("Odd numbers from array 2:", odd2);
    // Expected Output: Odd numbers from array 2: [-5, 1, 3, 11]

    // Example 3: Array with no odd numbers
    const numbers3: number[] = [2, 4, 6, 8, 10];
    const odd3 = filterOddNumbers(numbers3);
    console.log("\nOriginal array 3:", numbers3);
    console.log("Odd numbers from array 3:", odd3);
    // Expected Output: Odd numbers from array 3: []

    // Example 4: Array with only odd numbers
    const numbers4: number[] = [1, 3, 5, 7, 9];
    const odd4 = filterOddNumbers(numbers4);
    console.log("\nOriginal array 4:", numbers4);
    console.log("Odd numbers from array 4:", odd4);
    // Expected Output: Odd numbers from array 4: [1, 3, 5, 7, 9]

    // Example 5: Empty array
    const emptyArray: number[] = [];
    const oddEmpty = filterOddNumbers(emptyArray);
    console.log("\nOriginal array (empty):", emptyArray);
    console.log("Odd numbers from empty array:", oddEmpty);
    // Expected Output: Odd numbers from empty array: []
  });
});
