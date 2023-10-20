describe('Register test', ()=>{
    context('Register', ()=>{
      beforeEach(()=>{
        cy.visit('http://localhost:3000/register');
      })
  
      it('should have link to go /signin inside the form', ()=>{
        cy.get('div.card').find('h1').contains('Inscription');
        cy.get('form').find('a[href="/login"]').contains('Déjà un compte ?').click();
        cy.wait(400);
        cy.url().should('eq', 'http://localhost:3000/login')
      })
  
      it('should input username is correctly filled', ()=>{
        cy.get('input[name="username"]').type('123admin')
        cy.get('div')
          .contains('Entre 4 et 24 caractères.')
          .contains('Doit commencer par une lettre.')
          .contains('Doit comporter au moins une lettre et aucun caractère spéciaux.')
          .should('exist')
        cy.get('input[name="mail"]').type('admin@admin.com')
        cy.get('input[name="phone"]').type('0401020304')
        cy.get('input[name="password"]').type('Admin12!')
        cy.get('input[name="cpassword"]').type('Admin12!')
        cy.get('input[name="username"].is-invalid').should('exist')
        cy.get('button[type="submit"]').should('have.attr', 'disabled')
      })
  
      it('should input mail is correctly filled', ()=>{
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="mail"]').type('adminadmin.com')
        cy.get('div')
          .contains('L\'adresse mail doit avoir le bon format.')
          .should('exist')
        cy.get('input[name="phone"]').type('0401020304')
        cy.get('input[name="password"]').type('Admin12!')
        cy.get('input[name="cpassword"]').type('Admin12!')
        cy.get('input[name="mail"].is-invalid').should('exist')
        cy.get('button[type="submit"]').should('have.attr', 'disabled')
      })
  
      it('should input phone is correctly filled', ()=>{
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="mail"]').type('admin@admin.com')
        cy.get('input[name="phone"]').type('040')
        cy.get('div')
          .contains('Le numéro de téléphone doit avoir le bon format.')
          .should('exist')
        cy.get('input[name="password"]').type('Admin12!')
        cy.get('input[name="cpassword"]').type('Admin12!')
        cy.get('input[name="phone"].is-invalid').should('exist')
        cy.get('button[type="submit"]').should('have.attr', 'disabled')
      })
  
      it('should input password is correctly filled', ()=>{
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="mail"]').type('admin@admin.com')
        cy.get('input[name="phone"]').type('0401020304')
        cy.get('input[name="password"]').type('dmin12!')
        cy.get('div')
          .contains('Le mot de passe doit contenir au moins 8 caractères.')
          .contains('Doit comporter au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.')
          .should('exist')
        cy.get('input[name="cpassword"]').type('Admin12!')
        cy.get('input[name="password"].is-invalid').should('exist')
        cy.get('button[type="submit"]').should('have.attr', 'disabled')
      })
  
      it('should input confirmPassword is correctly filled', ()=>{
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="mail"]').type('admin@admin.com')
        cy.get('input[name="phone"]').type('0401020304')
        cy.get('input[name="password"]').type('Admin12!')
        cy.get('input[name="cpassword"]').type('Admn12!')
        cy.get('div')
          .contains('Les mots de passe doivent correspondre.')
          .should('exist')
        cy.get('input[name="confirmPassword"].is-invalid').should('exist')
        cy.get('button[type="submit"]').should('have.attr', 'disabled')
      })
  
      it('should successfully register', ()=>{
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="mail"]').type('admin@admin.com')
        cy.get('input[name="phone"]').type('0401020304')
        cy.get('input[name="password"]').type('Admin12!')
        cy.get('input[name="cpassword"]').type('Admin12!')
        cy.get('button[type="submit"]').eq(0).click()
        cy.url().should('eq', 'http://localhost:3000/account')
      })
  
    })
  })