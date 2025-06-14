import { expect, test, type Page } from "@playwright/test";

function removeDuplicateCharactersFilter(
  str: string,
  caseSensitive: boolean = false
): string {
  if (str === null || str === undefined || str.length === 0) {
    return "";
  }

  const chars = str.split(""); // Convert string to array of characters

  // Filter the array
  const uniqueChars = chars.filter((char, index, self) => {
    // If case-insensitive, convert the array to lowercase for the check
    const arrayToSearch = caseSensitive ? self : self.map((c) => c.toLowerCase());
    const charToCompare = caseSensitive ? char : char.toLowerCase();

    // Check if the current character's first occurrence is at the current index.
    // This ensures only the first instance of a character is kept.
    return arrayToSearch.indexOf(charToCompare) === index;
  });

  return uniqueChars.join(""); // Join the unique characters back into a string
}

test.describe("E2E Interview", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.checklyhq.com/docs/"); // Replace with the actual URL
  });

  test("Verify all links on the page", async ({ page }) => {
    // / --- Example Usage ---
    console.log("\n--- Using filter and indexOf ---");

    // Case-sensitive example
    const testString7 = "Programming";
    const cleaned7 = removeDuplicateCharactersFilter(testString7, true);
    console.log(`Original (case-sensitive): "${testString7}"`);
    console.log(`Cleaned (case-sensitive): "${cleaned7}"`); // Output: "Progaming"
  });
});
