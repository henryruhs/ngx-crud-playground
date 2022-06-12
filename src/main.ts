import { enableProdMode, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from '@environments';

if (environment.metadata.environment === 'local')
{
	isDevMode();
}
if (environment.metadata.environment === 'prod')
{
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(error => new Error(error));
