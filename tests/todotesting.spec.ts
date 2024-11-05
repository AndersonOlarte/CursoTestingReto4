import test, { expect } from "@playwright/test";
import { HomePage } from "../Pages/Home.page";
import { Login } from "../Pages/Login.page";
import { Todo } from "../Pages/Todo.page";
import dataTest from '../data/testingData.json';


test.beforeEach(async ({page})=> {
    test.slow();
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.gotoLoginPage();
    const loginPage = new Login(page);
    await loginPage.getTestAccount();
    await page.waitForTimeout(1000);
    await loginPage.login();
    await page.waitForTimeout(2000);
})

test.describe('Cheking task activities', async () => {

    test('creating tasks', async ({page}) => {
        const todoPage = new Todo(page);
        const initialNumberOfTask = await todoPage.getNumberOfTask();
        if (initialNumberOfTask) {
            await todoPage.createTask(dataTest.taskName);
            await page.waitForTimeout(2000);
            const finalNumberOfTask = await todoPage.getNumberOfTask() || 0;
            expect(finalNumberOfTask).toBeGreaterThan(initialNumberOfTask);
        }
        else test.fail();
    })

    test('completing tasks', async ({page})=> {
        const todoPage = new Todo(page);
        const initialNumberOfCompletedTask = await todoPage.getNumberOfCompletedTask();
        if (initialNumberOfCompletedTask) {
            await todoPage.completeTask(dataTest.taskName);
            await page.waitForTimeout(1000);
            const finalNumberOfCompletedTask = await todoPage.getNumberOfCompletedTask();
            expect(finalNumberOfCompletedTask).toBeGreaterThan(initialNumberOfCompletedTask);
        }
        else test.fail();
    })

    test('Cleaning up Tasks', async ({page}) => {
        const todoPage = new Todo(page);
        const initialNumberOfTask = await todoPage.getNumberOfTask();
        if (initialNumberOfTask) {
            await todoPage.cleanTask();
            await page.waitForTimeout(1000);
            const finalNumberOfTask = await todoPage.getNumberOfTask();
            expect(finalNumberOfTask).toBeLessThan(initialNumberOfTask);
        }
        else test.fail();
    })
}
)



