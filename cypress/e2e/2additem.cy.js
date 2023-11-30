/// <reference types="cypress" />

import LoginAction from "../pageobj/actions/LoginActions";
import AddItemActions from "../pageobj/actions/AddItemActions";

describe("Add Item Feature", () => {
    const login = new LoginAction;
    const additem = new AddItemActions;

    beforeEach(()=>{
        cy.fixture('auth').then(function(data){
            this.data = data
            cy.log('THIS :', this.data)
        
        login.navigateToURL()
        login.withValidData(this.data.username,this.data.password)
        login.successAssert()
    })
    })

    it("should successfully added one item", () => {
        additem.addOneItem()
        additem.successAssert()
    })
})