/// <reference types="cypress"/>

import AddItemElements from "../elements/AddItemElements";

export default class AddItemActions{
    constructor(){
        globalThis.aielements = new AddItemElements;
    }

    addOneItem(){
        aielements.hp2().click()
    }

    successAssert(){
        aielements.successAddCart().should("contain", "One Item added to cart").and('be.visible')
    }
}