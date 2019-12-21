import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/zone-testing';

declare const require : any;

getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

const context : any = require.context('./', true, /\.spec\.ts$/);

context.keys().map(context);
