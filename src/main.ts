import { enableProdMode, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if ('table' in console)
{
	console.table(environment.metadata);
}
if (environment.metadata.environment === 'local')
{
	isDevMode();
}
if (environment.metadata.environment === 'prod')
{
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(error => new Error(error));
