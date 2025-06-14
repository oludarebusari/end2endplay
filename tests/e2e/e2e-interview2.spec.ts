import { expect, test, type Page } from "@playwright/test";

/**
 * Finds the index of the first occurrence of the largest number in an array.
 *
 * @param arr The array of numbers to search.
 * @returns The index of the first largest number, or -1 if the array is empty.
 */
function findIndexOfFirstLargest(arr: number[]): number {
  // If the array is empty, there's no largest number, so return -1.
  if (arr.length === 0) {
    return -1;
  }

  let maxNumber = arr[0]; // Assume the first element is initially the largest
  let maxIndex = 0; // Assume its index is 0

  // Iterate through the array starting from the second element
  // (since the first element is already considered).
  for (let i = 1; i < arr.length; i++) {
    // If the current element is greater than the current maximum,
    // update the maximum number and its index.
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
      maxIndex = i;
    }
    // If arr[i] is equal to maxNumber, we do nothing because we want the *first* occurrence.
    // If we wanted the *last* occurrence, we would use: if (arr[i] >= maxNumber)
  }

  return maxIndex;
}

test.describe("E2E Interview", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.checklyhq.com/docs/"); // Replace with the actual URL
  });

  test("Verify all links on the page", async ({ page }) => {
    const numbers1: number[] = [1, 2, 5, 7, 3, 7, 5];
    const index1 = findIndexOfFirstLargest(numbers1);
    console.log(`Array: [${numbers1}]`);
    console.log(`Index of the first largest number: ${index1}`); // Expected: 3 (for the first '7')

    // const numbers2: number[] = [10, 2, 5, 10, 3, 7, 5];
    // const index2 = findIndexOfFirstLargest(numbers2);
    // console.log(`\nArray: [${numbers2}]`);
    // console.log(`Index of the first largest number: ${index2}`); // Expected: 0 (for the first '10')

    // const numbers3: number[] = [3, 2, 1];
    // const index3 = findIndexOfFirstLargest(numbers3);
    // console.log(`\nArray: [${numbers3}]`);
    // console.log(`Index of the first largest number: ${index3}`); // Expected: 0 (for '3')

    // const numbers4: number[] = [5];
    // const index4 = findIndexOfFirstLargest(numbers4);
    // console.log(`\nArray: [${numbers4}]`);
    // console.log(`Index of the first largest number: ${index4}`); // Expected: 0 (for '5')

    // const emptyArray: number[] = [];
    // const indexEmpty = findIndexOfFirstLargest(emptyArray);
    // console.log(`\nArray: [${emptyArray}]`);
    // console.log(`Index of the first largest number: ${indexEmpty}`);
  });
});
