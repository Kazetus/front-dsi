describe('template spec', () => {
  useContext('Login', () => {
    beforeEach(() => {
      cy.visit('/account');
      if(cy.url('/login')) {
        cy.get("form").should("exist");
        cy.get('#mail').should("exist");
        cy.get('#password').should("exist");
        cy.get("#mail").type("admin@admin.com");
        cy.get('#password').type("admin");
        cy.get("input[type=submit]").should("exist");
        cy.get("input[type=submit]").click();
      }
    })
  })
  it('Visits the app account url by admin', () =>{
    cy.url('/account')
    cy.wait(7000);
    cy.get('p').contains('admin@admin.com')
    cy.get('p').contains('Nom : Michou');
    cy.get('p').contains('Prenom : Michel');
    cy.get('p').contains('Pseudo : Mich');
  })
})