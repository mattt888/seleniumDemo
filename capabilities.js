require('dotenv').config()

exports.capabilities = {
	"browserName": "Chrome",
	"browserVersion": "125",
	"LT:Options": {
        "username": process.env.LAMBDA_TEST_USERNAME,
        "accessKey": process.env.LAMBDA_TEST_ACCESS_KEY,
		"platformName": "Windows 10",
		"headless": false,
		"project": "X browser tests",
		"w3c": true,
		"plugin": "node_js-mocha",
        "name": "Selenium Test",
        "build": "different builds with different OS's"
	}
}