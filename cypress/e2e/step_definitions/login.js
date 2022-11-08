import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the login page', () => {
    cy.visit('/webdriver2/sdocs/auth.php')
})
When('I login', () => {
  cy.login({ username: 'edgewords', password: 'edgewords123'})
})
Then('login is successful', () => {
//todo
})