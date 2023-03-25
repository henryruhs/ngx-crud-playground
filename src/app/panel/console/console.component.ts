import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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
	panelConfig : Observable<PanelConfig> = this.panelStore.get();
	consoleEntries : Observable<ConsoleEntry[]> = this.consoleStore.get();

	constructor(protected panelStore : PanelStore, protected consoleStore : ConsoleStore)
	{
	}
}
