describe('register test', () => {
    context('Register', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/register');
        })

        it('should redirect to login', () => {
            cy.get('div.card').find("h1").contains('Inscription');
            cy.get("form").find('a[href="/login"]').contains("Déjà un compte ?").click();
            cy.wait(400);
            cy.url().should('eq', 'http://localhost:3000/login');
        }) 
        it('Should register successfully', () =>{
            cy.get("#username").type("Michou");    
            cy.get("#mail").type("admin@admin.com");
            cy.get('#phone').type("0606060606");
            cy.get('#password').type("Admin12!");
            cy.get('#cpassword').type("Admin12!");
            cy.get("button[type=submit]").eq(0).click();
            cy.url().should('eq', 'http://localhost:3000/account');
        })

        it('Should input username be correctly filled', () =>{
            cy.get("#username").type("13admin");
            cy.get('div')
                .contains("Entre 4 et 24 caractères.")
                .contains("Doit commencer par une lettre.")
                .contains("Doit comporter au moins une lettre et aucun caractère spéciaux.")
                .should("exist");  
            cy.get("#mail").type("admin@admin.com");
            cy.get('#phone').type("0606060606");
            cy.get('#password').type("admin12!");
            cy.get('#cpassword').type("admin12!");
            cy.get('#username.is-invalid').should('exist');
            cy.get("button[type=submit]").should('have.attr', 'disabled');
        })

        it('Should input mail be correctly filled', () =>{
            cy.get("#username").type("admin"); 
            cy.get("#mail").type("adminatadmin.com");
            cy.get('div')
                .contains("L'adresse e-mail doit avoir le bon format.")
                .should("exist"); 
            cy.get('#phone').type("0606060606");
            cy.get('#password').type("admin12!");
            cy.get('#cpassword').type("admin12!");
            cy.get('#mail.is-invalid').should('exist');
            cy.get("button[type=submit]").should('have.attr', 'disabled');
        })

        it('Should input phone be correctly filled', () =>{
            cy.get("#username").type("admin"); 
            cy.get("#mail").type("admin@admin.com");
            cy.get('#phone').type("06060");
            cy.get('div')
                .contains("Le numéro de téléphone doit avoir le bon format.")
                .should("exist"); 
            cy.get('#password').type("admin12!");
            cy.get('#cpassword').type("admin12!");
            cy.get('#phone.is-invalid').should('exist');
            cy.get("button[type=submit]").should('have.attr', 'disabled');
        })

        it('Should input password be correctly filled', () =>{
            cy.get("#username").type("admin"); 
            cy.get("#mail").type("admin@admin.com");
            cy.get('#phone').type("0606060606");
            cy.get('#password').type("admi");
            cy.get('div')
                .contains('Le mot de passe doit faire entre 8 et 20 caractères.')
                .contains("Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.")
                .should("exist"); 
            cy.get('#cpassword').type("admin12!");
            cy.get('#password.is-invalid').should('exist');
            cy.get("button[type=submit]").should('have.attr', 'disabled');
        })

        it('Should both password input correspond', () =>{
            cy.get("#username").type("admin"); 
            cy.get("#mail").type("admin@admin.com");
            cy.get('#phone').type("0606060606");
            cy.get('#password').type("admin12!");
            cy.get('#cpassword').type("admin12");
            cy.get('div')
                .contains("La confirmation de mot de passe doit correspondre au mot de passe.")
                .should("exist"); 
            cy.get('#cpassword.is-invalid').should('exist');
            cy.get("button[type=submit]").should('have.attr', 'disabled');
        })
    
    })
})