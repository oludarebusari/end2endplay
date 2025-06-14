import { expect, test, type Page } from "@playwright/test";

function isPrime(num: number): boolean {
  // Prime numbers are greater than 1
  if (num <= 1) {
    return false;
  }
  // 2 is the only even prime number
  if (num === 2) {
    return true;
  }
  // All other even numbers are not prime
  if (num % 2 === 0) {
    return false;
  }
  // Check for divisibility from 3 up to the square root of the number,
  // only checking odd numbers
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

test.describe("E2E Interview", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.checklyhq.com/docs/"); // Replace with the actual URL
  });

  test("Verify all links on the page", async ({ page }) => {
    // async function getPrimesInRange(start: number, end: number): Promise<number[]> {
    //   const primeNumbers: number[] = [];
    //   // Ensure start is at least 1, as primes are greater than 1
    //   const actualStart = Math.max(1, start);

    //   for (let i = actualStart; i <= end; i++) {
    //     if (await isPrime(i)) {
    //       primeNumbers.push(i);
    //     }
    //   }
    //   return primeNumbers;
    // }

    // // --- Example Usage ---

    // const lowerBound = 1;
    // const upperBound = 20;

    // const primesBetween1And20 = await getPrimesInRange(lowerBound, upperBound);

    // console.log(
    //   `Prime numbers between ${lowerBound} and ${upperBound}:`,
    //   primesBetween1And20
    // );

    function filterPrimesFromArray(numbers: number[]): number[] {
      const primeNumbers: number[] = [];
      for (const num of numbers) {
        // Iterate through each number in the input array
        if (isPrime(num)) {
          // Check if the current number is prime
          primeNumbers.push(num); // If it is, add it to our list of primes
        }
      }
      return primeNumbers;
    }

    const numberArray1: number[] = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0,
      -5, 23, 29,
    ];
    const primes1 = filterPrimesFromArray(numberArray1);

    // console.log("Original array 1:", numberArray1);
    console.log("Prime numbers from array 1:", primes1);

    console.log();

    const numberArray2: number[] = [
      4, 6, 8, 9, 10, 12, 14, 15, 16, 25, 37, 41, 50, 53,
    ];
    const primes2 = filterPrimesFromArray(numberArray2);
    // console.log("\nOriginal array 2:", numberArray2);
    console.log("Prime numbers from array 2:", primes2);
  });
});
