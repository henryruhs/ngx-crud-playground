import { defineConfig } from 'cypress';

export default defineConfig(
{
	e2e:
	{
		setupNodeEvents(on : Cypress.PluginEvents)
		{
			require('cypress-terminal-report/src/installLogsPrinter')(on);
		}
	},
	video: false
});
