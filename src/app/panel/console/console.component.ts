import { Component } from '@angular/core';

import { PanelStore } from '../panel.store';
import { PanelConfig } from '../panel.interface';

import { ConsoleStore } from './console.store';
import { ConsoleEntry } from './console.interface';

@Component(
{
	selector: 'app-console',
	styleUrls:
	[
		'./console.component.scss'
	],
	templateUrl: './console.component.html'
})
export class ConsoleComponent
{
	panelConfig : PanelConfig;
	consoleEntries : ConsoleEntry[];

	constructor(protected panelStore : PanelStore, protected consoleStore : ConsoleStore)
	{
		this.panelStore
			.get()
			.subscribe(panelConfig => this.panelConfig = panelConfig);
		this.consoleStore
			.get()
			.subscribe(consoleEntries => this.consoleEntries = consoleEntries);
	}
}
