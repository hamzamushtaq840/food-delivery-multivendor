describe('Hero Component E2E Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', { failOnStatusCode: false });
  });

  it('should show an alert if no location is selected', () => {
    cy.get('button').contains('Find Restaurant').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Please select location');
    });
  });

  it('when option is selected and button is clicked it should navigate with appropriate coordinates', () => {
    cy.get('input[placeholder="Enter Delivery Address"]').type('2222+22 Girdu, Pakistan');
    cy.wait(3000);
    cy.get('div[id^="item-"]').first().click();
    cy.get('button').contains('Find Restaurant').click();
    // Wait for 2 seconds
    cy.wait(3000);
    cy.url().should('include', 'latitude=30.0000625');
    cy.url().should('include', 'longitude=70.0000625');
  });
});
