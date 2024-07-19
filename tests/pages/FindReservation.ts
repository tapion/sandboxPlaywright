import { Locator, Page } from "@playwright/test";

export default class FindReservation {

    private pnrCode: Locator;
    private pnrLastName: Locator;
    private searchBTN: Locator;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.pnrCode = page.locator('#number');
        this.pnrLastName = page.locator('#lastName');
        this.searchBTN = page.locator('#findResButton');
    }

    async searchPrn(code: string, lastName: string) {
        await this.pnrCode.fill(code);
        await this.pnrLastName.fill(lastName);
        await this.searchBTN.click();
    }

    async getErrorContainer() {
        return this.page.locator("#find-reservation-alert-error-content");
    }

    async getLoginBtn() {
        return this.page.locator("#header-btn-login");
    }

    async getLanguageBtn() {
        return this.page.locator("#languageSelection");
    }

    async goBaseUrl() {
        await this.page.goto("https://mytrips-qa.copa.s4n.co/");
    }

}
