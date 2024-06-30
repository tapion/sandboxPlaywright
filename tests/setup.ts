import { test as setup, expect } from '@playwright/test';

setup.describe('My First Test Suite', () => {

  setup('should close cookie overlay', async ({ page }) => {
    await page.goto('https://www.epam.com/');
    await expect(page.locator('#onetrust-banner-sdk')).toBeVisible();

    await page.locator('#onetrust-banner-sdk #onetrust-accept-btn-handler').click();
    await expect(page.locator('#onetrust-banner-sdk')).toBeHidden();

    await page.context().storageState({path: 'state.json'});
  });

})
