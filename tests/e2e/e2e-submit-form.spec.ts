import { test, expect } from "@playwright/test";
import { FeedBackPage } from "../../page-objects/FeedbackPage";
import { HomePage } from "../../page-objects/HomePage";

test.describe("Feedback Page Tests", () => {
  let feedbackPage: FeedBackPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    feedbackPage = new FeedBackPage(page);
    homePage = new HomePage(page);
    await homePage.visit();
    await homePage.clickFeedback();
  });

  test("should display feedback form", async ({ page }) => {
    await expect(feedbackPage.feedbackTitle).toBeVisible();
  });

  test("should reset feedback form", async ({ page }) => {
    await feedbackPage.fillFeedbackForm(
      "John Doe",
      "test@test.com",
      "Test Subject",
      "This is a test comment."
    );
    await feedbackPage.resetForm();
    await feedbackPage.assertReset();
  });

  test("should submit feedback form successfully", async ({ page }) => {
    await feedbackPage.fillFeedbackForm(
      "John Doe",
      "test@test.com",
      "Test Subject",
      "This is a test comment."
    );
    await feedbackPage.submitButton.click();
    await feedbackPage.feedbackFormSent();
  });
});
