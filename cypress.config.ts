import { defineConfig } from 'cypress';
import installLogsPrinter from 'cypress-terminal-report/src/installLogsPrinter';

export default defineConfig(
{
	e2e:
	{
		setupNodeEvents(on : Cypress.PluginEvents)
		{
			installLogsPrinter(on);
		}
	},
	env:
	{
		tsConfig: './tsconfig.e2e.json'
	},
	video: false
});
