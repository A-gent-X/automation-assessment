// Check that clicking the Draw button displays the div with id = “choices”

// Check that clicking an “Add to Duo” button displays the div with id = “player-duo”

// Check that when a bot is “Removed from Duo”, that it goes back to “choices”

const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);

    const drawResult = await driver.findElement(By.id('#choices')).sendKeys('Draw button')
    expect(drawResult).toBe('div')
    
    const addResult = await driver.findElement(By.id("#duel")).sendKeys('Add to Duo')
    expect(addResult).toBe('div')
    
    const removeResult = await driver.findElement(By.id("#duel")).sendKeys('Removed from Duo')
    expect(removeResult).toBe('div')
  });
});

