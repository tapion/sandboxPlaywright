import { expect } from '@playwright/test';
import { test } from "./fixtures";

test.describe('My First Test Suite', () => {

  test('should close cookie overlay', async ({ page, findReservation }) => {
    await findReservation.goBaseUrl();
    await expect(page.locator('#gdpr-banner')).toBeVisible();

    await page.locator('#gdpr-banner .button-container button').click();
    await expect(page.locator('#gdpr-banner')).toBeHidden();

    await page.context().storageState({path: 'state.json'});
  });

})
