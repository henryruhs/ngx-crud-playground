import { defineConfig } from 'cypress';
import cypressTerminalReport from 'cypress-terminal-report/src/installLogsPrinter';

export default defineConfig(
{
	e2e:
	{
		downloadsFolder: '.cypress/downloads',
		fixturesFolder: '.cypress/fixtures',
		screenshotsFolder: '.cypress/screenshots',
		videosFolder: '.cypress/videos',
		supportFile: '.cypress/support/e2e.ts',
		specPattern: 'src/**/**/*.e2e.ts',
		setupNodeEvents(on : Cypress.PluginEvents)
		{
			cypressTerminalReport(on);
		}
	},
	env:
	{
		tsConfig: 'tsconfig.e2e.json'
	},
	video: false
});
