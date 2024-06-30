import { test, expect } from '@playwright/test';

test.describe('My First Test Suite', () => {

  // Setting previously saved storage state to open a page with already accepted cookies
  test.use({storageState: 'state.json'});

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.epam.com/');
  });

  test('should open https://www.epam.com/ page', async ({ page }) => {
    await expect(page).toHaveTitle('EPAM | Software Engineering & Product Development Services  ')
  });

  test('should hamburger menu', async ({ page }) => {
    await page.locator('button.hamburger-menu__button').click();
    await expect(page.locator('div.hamburger-menu__dropdown-section')).toBeVisible();
  });
  
})