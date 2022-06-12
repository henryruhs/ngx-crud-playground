import { Environment, environmentHelper } from '@environments';

const environment : Environment = environmentHelper(Cypress.env('APP_ENV'));

describe('Root', () =>
{
	beforeEach(() => cy.visit(environment.baseUrl));

	it('Should have elements', () =>
	{
		cy.get('app-content').should('be.visible');
		cy.get('app-panel').should('be.visible');
	});
});
