import { environmentHelper } from '../../src/environments/environment.helper';
import { Environment } from '../../src/environments/environment.interface';

const environment : Environment = environmentHelper(Cypress.env('APP_ENV'));

describe('Application', () =>
{
	before(() => cy.visit(environment.baseUrl));

	it('Should have elements', () =>
	{
		cy.get('app-content').should('be.visible');
		cy.get('app-panel').should('be.visible');
	});
});
