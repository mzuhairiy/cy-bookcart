/// <reference types="cypress"/>

const loc = require("../../../locators.json")

export default class LoginPageElements{

    loginTitle(){return cy.get(loc.loginPage.loginTitle)}
    registerBtn(){return cy.get(loc.loginPage.registerBtn)}
    usernameTxt(){return cy.get(loc.loginPage.usernameTxt)}
    passwordTxt(){return cy.get(loc.loginPage.passwordTxt)}
    loginBtn(){return cy.get(loc.loginPage.loginBtn)}

}