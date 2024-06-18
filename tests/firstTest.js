const { Builder, By, Key } = require("selenium-webdriver")
// require('geckodriver'); // Ensure geckodriver is in your PATH or installed
const assert = require("assert")

// describe block
describe("add todo test", function () {
  // it block
  it("successfully adds a todo to application", async function () {

    // Dinamikusan importáljuk a Chai modult
    const chai = await import("chai")
    const should = chai.should()

    const driver = await new Builder().forBrowser("firefox").build()

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

    await driver.quit();
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
