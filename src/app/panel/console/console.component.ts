import { Component } from '@angular/core';
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
	consoleEntries : ConsoleEntry[];

	constructor(protected consoleStore : ConsoleStore)
	{
		this.consoleStore
			.get()
			.subscribe(consoleEntries => this.consoleEntries = consoleEntries);
	}
}
