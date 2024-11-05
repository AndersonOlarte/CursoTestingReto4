import { Page } from '@playwright/test';

export class HomePage {
    readonly url: string;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.url = "http://127.0.0.1:5000/"
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async gotoLoginPage() {
        await this.page.getByRole('navigation').getByRole('link', { name: 'Login' }).click();
    }
}