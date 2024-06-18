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

    browsers = [
        { browser: "Chrome", bVersion: "93.0", os: "Windows 10" },
        { browser: "Firefox", bVersion: "91.0", os: "Windows 10" },
        { browser: "Firefox", bVersion: "90.0", os: "Windows 10" }
    ]

    browsers.forEach(({ browser, bVersion, os}) => {
        
        // it block
        it(`Successfully adds another todo for browser ${browser}, ${bVersion}, ${os}` , async function () {

            // Dinamikusan importáljuk a Chai modult
            const chai = await import("chai")
            const should = chai.should()

            lambdaTestCapabilities.capabilities["LT:Options"].platformName = os
            lambdaTestCapabilities.capabilities.browserName = browser
            lambdaTestCapabilities.capabilities.browserVersion = bVersion
            // lambdaTestCapabilities.capabilities["LT:Options"].name = this.currentTest.title
            lambdaTestCapabilities.capabilities["LT:Options"].name = this.test.title


            driver = new Builder().usingServer(gridURL).withCapabilities(lambdaTestCapabilities.capabilities).build()

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
    })
});
