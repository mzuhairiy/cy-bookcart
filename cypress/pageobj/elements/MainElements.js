/// <reference types="cypress"/>

const loc = require("../../../locators.json")

export default class MainPageElements{
    
    brandTitle(){return cy.get(loc.mainPage.brandTitle)}
    loginBtn(){return cy.get(loc.mainPage.loginBtn)}
    cartBtn(){return cy.get(loc.mainPage.cartBtn)}
    badgeCart(){return cy.get(loc.mainPage.badgeCart)}
    favBtn(){return cy.get(loc.mainPage.favBtn)}
    badgeFav(){return cy.get(loc.mainPage.badgeFav)}
    searchBox(){return cy.get(loc.mainPage.searchBox)}
    profileDropdown(){return cy.get(loc.mainPage.profileDropdown)}
    myOrders(){return cy.get(loc.mainPage.myOrders)}
    logout(){return cy.get(loc.mainPage.logout)}
}