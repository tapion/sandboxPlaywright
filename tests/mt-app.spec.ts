import { expect } from "@playwright/test";
import { test } from "./fixtures";

test.beforeEach(async ({ page }) => {
  await page.goto("https://mytrips-qa.copa.s4n.co/");
});

test.describe("MT", () => {
  test("Find reservation page not found PNR", async ({ findReservation }) => {
    await findReservation.searchPrn("ADSDAD", "Pedro");
    const errContainer = await findReservation.getErrorContainer();
    await expect(errContainer).toHaveText("We're sorry! We couldn't find your reservation with the information provided. Please check your entries and try again.")
  });

  test("Login redirection", async ({ findReservation, page }) => {
    const btLogin = await findReservation.getLoginBtn();
    await btLogin.click();
    const url = page.url();
    expect(url).toContain('login-uat.copaair.com');
  });

  test("Show list of languages", async ({ findReservation, page}) => {
    const btnLanguage = await findReservation.getLanguageBtn();
    await btnLanguage.click();
    const languages = await page.$$(".header-navigation__language-selection-list .header-navigation__language");
    expect(languages.length).toBe(4)
    expect(languages[0].isVisible).toBeTruthy()
  })

});
