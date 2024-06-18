const { Builder, By, Key } = require("selenium-webdriver")
const lambdaTestCapabilities = require("../capabilities")
// require('geckodriver'); // Ensure geckodriver is in your PATH or installed
const assert = require("assert")

// describe block
describe("add another todo test", function () {
  let driver;

  // username
  const USERNAME = lambdaTestCapabilities.capabilities["LT:Options"].username
  // const USERNAME ="csiremate"

  // key
  const KEY = lambdaTestCapabilities.capabilities["LT:Options"].accessKey
  // const KEY ="nxi9hznWsgkbEVTVelSz7L13kFO5B9eZrevvG3XUKpxyKlK4pk"

  // host
  const GRID_HOST = "hub.lambdatest.com/wd/hub"

  const gridURL = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST


  beforeEach(function() {
    lambdaTestCapabilities.capabilities["LT:Options"].name = this.currentTest.title
    driver = new Builder().usingServer(gridURL).withCapabilities(lambdaTestCapabilities.capabilities).build()
  })

  afterEach(async function() {
    await driver.quit();
  })

  // it block
  it("Successfully adds another todo to application", async function () {

    // Dinamikusan importáljuk a Chai modult
    const chai = await import("chai")
    const should = chai.should()

    // const driver = await new Builder().forBrowser("firefox").build()

    await driver.get("https://lambdatest.github.io/sample-todo-app/")

    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Selenium", Key.RETURN);

    const todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    todoText.should.equal("Learn Selenium")

    // await driver.quit();
    console.log(new Date().toLocaleString("hu-HU"))

  });
  it("Adding a new test for reporting", async function () {

    // Dinamikusan importáljuk a Chai modult
    const chai = await import("chai")
    const should = chai.should()

    //const driver = await new Builder().forBrowser("firefox").build()

    await driver.get("https://lambdatest.github.io/sample-todo-app/")

    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn JavaScript", Key.RETURN);

    const todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    todoText.should.equal("Learn JavaScript")

    // await driver.quit();
    console.log(new Date().toLocaleString("hu-HU"))

  });
});

async function example() {
  // Dinamikusan importáljuk a Chai modult
  const chai = await import("chai");
  const should = chai.should();

  // launch the browser
  const driver = await new Builder().forBrowser("firefox").build();

  // try {
  // navigate to our application
  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  // Add your further actions here, like adding a todo
  // Example: await driver.findElement(By.id('element_id')).click();
  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Learn Selenium", Key.RETURN);

  const todoText = await driver
    .findElement(By.xpath("//li[last()]"))
    .getText()
    .then(function (value) {
      return value;
    });

  // assert using node assertion
  assert.strictEqual(todoText, "Learn Selenium"); // actual value vs expected value

  // assert using chai should
  todoText.should.equal("Learn Selenium");

  // }
  // close the browser
  await driver.quit();
}

// example()
