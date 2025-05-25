import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { HomePage } from '../../page-objects/HomePage';

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await homePage.visit();
  });

  test('should display error message for invalid credentials', async ({ page }) => {
    await homePage.clickSignIn();
    await loginPage.login('invalid_user', 'invalid_password');
    await loginPage.assertErrorMessage('Login and/or password are wrong.');
  });

  test('should allow valid user to log in', async ({ page }) => {
    await homePage.clickSignIn();
    await loginPage.login('username', 'password');

    // Add assertions to verify successful login
    const accountSummary = page.locator('#account_summary');
    await expect(accountSummary).toBeVisible();
  });
});