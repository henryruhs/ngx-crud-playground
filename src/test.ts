import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

interface Context
{
	<T>(id : string) : T;
	keys() : string[];
}

declare const require :
{
	context(path : string, deep : boolean, filter : RegExp) : Context;
};

getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

const context : Context = require.context('./', true, /\.spec\.ts$/);

context.keys().map(context);
