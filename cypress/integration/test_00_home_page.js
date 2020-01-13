/// <reference types="Cypress" />

const homepage = require('../pages/homepage').homepage; 
const date = require('../test_data/data').homepage_date;

describe(" Should navigate to 'Roumig' page", ()=>{

    it("Navigte to Roumingpage", ()=>{
        let width = 1920;
        let height = 1080;
        cy.viewport(width, height)
        cy.visit(date.homepage)

        cy.get(homepage.tarifs_tab).trigger('mouseover')
        cy.get(homepage.rouming).should('be.visible').click()
        cy.url().should('include', 'roaming/world-travel')
    })
    /*it("Navigte to Homepage", ()=>{
        let width = 1920;
        let height = 1080;
        cy.viewport(width, height)
        cy.visit(date.homepage)

        cy.get(homepage.shop_tab).should('be.visible').click()
    })*/
})