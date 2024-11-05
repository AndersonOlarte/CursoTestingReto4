import { Page } from "@playwright/test";


export class Todo {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async createTask(taskName: string): Promise<void> {
        const createTaskBar = this.page.getByPlaceholder('What needs to be done?');
        await createTaskBar.click();
        await createTaskBar.pressSequentially(taskName, {delay: 150});
        await createTaskBar.press('Enter');
    }

    async completeTask(taskName: string) {
        await this.page.locator('span').filter({ hasText: ` ${taskName}` }).locator('i').click();
    }

    async cleanTask() {
        await this.page.getByText('clear_allClear').click();
    }

    async getNumberOfTask(): Promise<number | null> {
        try {
            const value = await this.page.locator('#all-count').textContent();
            return Number(value);
        } catch (error) {
            return null;
        }
    }
    async getNumberOfCompletedTask(): Promise <number | null> {
        try {
            const value = await this.page.locator('#completed-count').textContent();
            return Number(value);
        } catch (error) {
            return null;
        }
    }
}