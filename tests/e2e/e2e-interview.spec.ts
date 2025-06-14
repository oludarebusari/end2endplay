import { expect, test, type Page } from '@playwright/test';

async function getAllLinksFromPage(page: Page): Promise<string[]> {
  const link = page.locator('a');
  const links = await link.evaluateAll(anchors => anchors.map(a => (a as HTMLAnchorElement).href));
  // Example: filter out mailto links and convert relative links to absolute
  /**
   * Filter out mailto links and convert relative links to absolute URLs.
   * - Removes any link that starts with 'mailto:'.
   * - Converts links that do not start with 'http' to absolute URLs using the current page URL as the base.
   */
  const absoluteLinks = links
    .filter(link => !link.startsWith('mailto:'))
    .map(link => link.startsWith('http') ? link : new URL(link, page.url()).href);
  expect.soft(absoluteLinks).toBeTruthy();
  return absoluteLinks;
}

test.describe('E2E Interview', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.checklyhq.com/docs/'); // Replace with the actual URL
  });

  test('Verify all links on the page', async ({ page }) => {

    test.setTimeout(120000); // Set timeout to 2 minutes (120000 ms)

    const links = await getAllLinksFromPage(page);
    console.log('Links found:', links);
    console.log('Number of links:', links.length);
    expect(links.length).toBeGreaterThan(0); // Ensure there are links on the page

    for (let link of links) {
      const response = await page.request.get(link);
      expect(response.ok()).toBeTruthy(); // Check that the link does not return an error status
    }
  });
});

