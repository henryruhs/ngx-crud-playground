describe('App', () =>
{
	before(() => cy.visit('/'));

	it('Should have a joke', () =>
	{
		cy.get('[data-e2e="box-joke"]').should('be.visible');
	});
});
