describe('App', () =>
{
	before(() => cy.visit('/'));

	it('Should have jokes', () =>
	{
		cy.get('[data-e2e="box-joke"]').should('have.length', 6);
	});
});
