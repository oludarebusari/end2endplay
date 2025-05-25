import { expect, Locator, Page } from "@playwright/test";

export class FeedBackPage {
  readonly page: Page;
  readonly feedbackTitle: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly commentInput: Locator;
  readonly clearButton: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.feedbackTitle = page.locator("#feedback-title");
    this.nameInput = page.locator("#name");
    this.emailInput = page.locator("#email");
    this.subjectInput = page.locator("#subject");
    this.commentInput = page.locator("#comment");
    this.clearButton = page.locator("input[name='clear']");
    this.submitButton = page.locator("input[type='submit']"); 
  }

  async clickFeedback() {
    await this.page.click("text=Feedback");
  }

  async fillFeedbackForm(
    name: string,
    email: string,
    subject: string,
    comment: string
  ) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.commentInput.fill(comment);
  }

  async assertFeedbackTitle(expectedTitle: string) {
    await expect(this.feedbackTitle).toBeVisible();
    await expect(this.feedbackTitle).toHaveText(expectedTitle);
  }

  async resetForm() {
    await this.clearButton.click();
  }
  async SubmitForm() {
    await this.submitButton.click();
    await expect(this.successMessage).toBeVisible();
  }

  async assertReset() {
    await expect(this.nameInput).toHaveValue("");
    await expect(this.emailInput).toHaveValue("");  
    await expect(this.subjectInput).toHaveValue("");
    await expect(this.commentInput).toHaveValue("");
  }

  async feedbackFormSent() {
    await expect(this.feedbackTitle).toBeVisible();
  }
}
