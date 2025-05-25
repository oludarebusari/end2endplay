import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly searchBox: Locator;
  readonly feedbackLink: Locator;
  readonly accountSummary: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator("#signin_button");
    this.searchBox = page.locator("#searchTerm");
    this.feedbackLink = page.locator("#feedback");
    this.accountSummary = page.locator("#account_summary");
  }

  async visit() {
    await this.page.goto("/");
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async searchFor(query: string) {
    await this.searchBox.fill(query);
    await this.searchBox.press("Enter");
  }

  async clickFeedback() {
    await this.feedbackLink.click();
  }

  async assertAccountSummaryVisible() {
    await expect(this.accountSummary).toBeVisible();
  }
}
