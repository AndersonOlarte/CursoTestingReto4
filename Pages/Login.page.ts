import { Page } from "@playwright/test";


export class Login {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getTestAccount() {
        await this.page.getByText('Get a test account').click();
    }

    async login() {
        await this.page.locator('#login-btn').click();
    }
}