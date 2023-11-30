/// <reference types="cypress"/>

const loc = require("../../../locators.json")

export default class RegisterPageElements{

    userRegTitle(){return cy.get(loc.registerPage.userRegTitle)}
    firstName(){return cy.get(loc.registerPage.firstName)}
    lastName(){return cy.get(loc.registerPage.lastName)}
    userName(){return cy.get(loc.registerPage.userName)}
    password(){return cy.get(loc.registerPage.password)}
    confirmPass(){return cy.get(loc.registerPage.password)}
    male(){return cy.get(loc.registerPage.male)}
    female(){return cy.get(loc.registerPage.female)}
    registerBtn(){return cy.get(loc.registerPage.registerBtn)}
    //Validation Objects
    firstNameReq(){return cy.get(loc.registerPage.firstNameReq)}
    lastNameReq(){return cy.get(loc.registerPage.lastNameReq)}
    userNameReq(){return cy.get(loc.registerPage.userNameReq)}
    passReq(){return cy.get(loc.registerPage.passReq)}
    passSpecReq(){return cy.get(loc.registerPage.passSpecReq)}
    passNotMatch(){return cy.get(loc.registerPage.passNotMatch)}
}