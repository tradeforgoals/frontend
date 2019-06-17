const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const webdriver = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());



// eslint-disable-next-line no-undef
var driver = new webdriver.Builder().forBrowser('chrome').build();


        Given('homepage', function  (callback) {
          driver.wait(driver.get('http://localhost:3000/'));
          callback(); 
        });

        When('you click on login', function (callback) {
          driver.wait( driver.findElement({css: '.sc-EHOje'}).then(function(element) {
            return element.click();
          }));
          callback();
        });

        Then('a pop up should appear with three login options', function () {
         return driver.findElement({id: 'authenticate'}).isDisplayed()
        });


        Given('item', function () {
          return 'pending'
           
          });


         When('the item is loading', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });







         When('the item has no title', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });



         Then('it shows {string} text', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });



         When('the item has {string} as image', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

         Then('{string} is visible', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


 

         When('the item has a description', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

         Then('the description is shown on the page', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });




         When('the item has an {string} error', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

         Then('the message {string} is visible', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         Given('currect user', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         When('the user enters their username and password', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

         Then('the user is logged in', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

         Given('Incorrect user', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         When('the user enters their username and invalid password', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

         Then('the user get a {string} message', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

