describe('Application Testing', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});
	it('Start Pizza Order', () => {
		cy.wait(1000);
		cy.get('.container > .btn').click();
		cy.get('[data-cy=size]').select('Large').should('have.value', 'Large');
		cy.get('[data-cy=original]').click().should('be.checked');
		cy.get('[data-cy=pepperoni]').check().should('be.checked');
		cy.get('[data-cy=instructions]')
			.type('Ketchup Please!')
			.should('have.value', 'Ketchup Please!');
		cy.get('form > .btn').click();
	});
});
