describe('Application', () =>
{
	before(() => cy.visit('/'));

	it('Should have elements', () =>
	{
		cy.get('app-content').should('be.visible');
		cy.get('app-panel').should('be.visible');
	});
});
