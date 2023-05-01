/// <reference types="cypress" />
import 'cypress-file-upload';
import '@cypress/code-coverage/support';

describe('Home e2e', () => {
  it('should have input', () => {
    cy.visit('http://localhost:3001');
    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Search');
  });
  it('should have entered value', () => {
    cy.visit('http://localhost:3001');
    cy.get('input').type('12345');
    cy.get('input').should('have.value', '12345');
  });
  it('should have "Nothing is found" when entered string does not match with any character', () => {
    cy.visit('http://localhost:3001');
    cy.get('input').type('12345');
    cy.contains('Search').click();
    cy.contains('Nothing is found');
  });
  it('should be a card with the entered in input name in case of match', () => {
    cy.visit('http://localhost:3001');
    cy.get('input').type('Abadango Cluster Princess');
    cy.contains('Search').click();
    cy.get('.card__brand').should('have.text', 'Abadango Cluster Princess');
  });
});

describe('Form e2e', () => {
  it('should have input with placeholder "Enter product name"', () => {
    cy.visit('http://localhost:3001/Form%20Page');
    cy.get('input[type="text"]').should(
      'have.attr',
      'placeholder',
      'Enter product name'
    );
  });
  it('should be errors messages when clicking on submit button with empty inputs', () => {
    cy.visit('http://localhost:3001/Form%20Page');
    cy.contains('Submit').click();
    cy.contains(
      'The name should start from the capital letter and be at least 3 chars long'
    );
    cy.contains('Please enter the past date');
    cy.contains('Please choose the reason of return');
    cy.contains(
      'Please read the return policy and if you agree mark the checkbox'
    );
    cy.contains('Please choose return option');
    cy.contains('Please choose an image');
  });
  it('after entering all necessary data in inputs, the card should be created and in the card should be the proper name', () => {
    cy.visit('http://localhost:3001/Form%20Page');
    cy.get('input[type="text"]').type('Olya');
    cy.get('#date').type('2023-01-01');
    cy.get('select').select('Defect');
    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="radio"][value="Return money"]').check();
    cy.fixture('dog.jpg').then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent.toString(),
        fileName: 'dog.jpg',
        mimeType: 'image/jpeg/jpg',
      });
    });
    cy.contains('Submit').click();
    cy.get('.form__card-title').should(
      'have.text',
      'Name of the product: Olya'
    );
  });
});
