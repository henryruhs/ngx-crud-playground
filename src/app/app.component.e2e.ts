import { Environment, environmentHelper } from '@environments';

const environment : Environment = environmentHelper(Cypress.env('APP_ENV'));

describe('root', () =>
{
	beforeEach(() => cy.visit(environment.baseUrl));

	it('should have elements', () =>
	{
		cy.get('app-content').should('be.visible');
		cy.get('app-panel').should('be.visible');
	});
});
