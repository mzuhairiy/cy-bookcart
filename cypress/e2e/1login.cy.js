/// <reference types="cypress" />

import LoginAction from "../pageobj/actions/LoginActions";

describe("Login Feature", () => {
    const login = new LoginAction;

    beforeEach(()=>{
        cy.fixture('auth').then(function(data){
            this.data = data
            cy.log('THIS :', this.data)
        })
        login.navigateToURL()
    })

    it('should login successfully', function(){
        login.withValidData(this.data.username,this.data.password)
        login.successAssert()
    })
})