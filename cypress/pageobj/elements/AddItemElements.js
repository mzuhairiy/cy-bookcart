/// <reference types="cypress"/>

const loc = require("../../../locators.json")

export default class CheckoutPageElements{
    hp2(){return cy.get(loc.mainPage.hp2)}
    hp3(){return cy.get(loc.mainPage.hp3)}
    hp4(){return cy.get(loc.mainPage.hp4)}
    badgeCart(){return cy.get(loc.mainPage.badgeCart)}
    badgeFav(){return cy.get(loc.mainPage.badgeFav)}
    successAddCart(){return cy.get(loc.mainPage.successAddCart)}
}