/// <reference types="cypress"/>

import LoginPageElements from "../elements/LoginElements";
import MainPageElements from "../elements/MainElements";

export default class LoginAction {
    constructor(){
        globalThis.lpelements = new LoginPageElements()
        globalThis.mpelements = new MainPageElements()
    }

    navigateToURL(){
        cy.visit('/')
    }

    withValidData(username, password){
        mpelements.loginBtn().click()
        lpelements.usernameTxt().type(username)
        lpelements.passwordTxt().type(password)
        lpelements.loginBtn().click()
    }

    successAssert(){
        mpelements.profileDropdown().should("contain", "mate99")
    }
}