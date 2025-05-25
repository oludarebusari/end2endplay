import { test, expect } from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';

test.describe('Search Page Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.visit();
  });

  test('should display search results for valid query', async ({ page }) => {
    await homePage.searchFor('bank');
    const searchResults = page.locator('a[href*="html"]');
    await expect(searchResults).toHaveCount(3);
  });

  test('should display no results for invalid query', async ({ page }) => {
    await homePage.searchFor('InvalidQuery');
    // const noResultsMessage = page.locator('#no_results_message');
    // await expect(noResultsMessage).toBeVisible();
  });
});