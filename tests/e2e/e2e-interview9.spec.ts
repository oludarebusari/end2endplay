import { expect, test, type Page } from "@playwright/test";

function findDuplicateCharacters(str: string): Map<string, number> {
  const charCounts = new Map<string, number>();

  // Iterate over each character in the string
  for (const char of str) {
    // Convert the character to lowercase to treat 'A' and 'a' as the same.
    // Remove .toLowerCase() if you want case-sensitive duplicate detection.
    const lowerChar = char.toLowerCase();

    // If the character is already in the map, increment its count
    if (charCounts.has(lowerChar)) {
      charCounts.set(lowerChar, charCounts.get(lowerChar)! + 1);
    } else {
      // If it's the first time seeing the character, set its count to 1
      charCounts.set(lowerChar, 1);
    }
  }

  // Filter the map to get only characters with a count greater than 1
  const duplicates = new Map<string, number>();
  for (const [char, count] of charCounts.entries()) {
    if (count > 1) {
      duplicates.set(char, count);
    }
  }

  return duplicates;
}

test.describe("E2E Interview", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.checklyhq.com/docs/"); // Replace with the actual URL
  });

  test("Verify all links on the page", async ({ page }) => {
    const testString1 = "Programming";
    const duplicates1 = findDuplicateCharacters(testString1);
    console.log(duplicates1)
    console.log(`Original: "${testString1}"`);
    if (duplicates1.size > 0) {
      console.log("Duplicate characters (case-insensitive) and their counts:");
      duplicates1.forEach((count, char) => {
        console.log(`- '${char}': ${count} times`);
      });
    } else {
      console.log("No duplicate characters found.");
    }
    console.log("---");
  });
});
