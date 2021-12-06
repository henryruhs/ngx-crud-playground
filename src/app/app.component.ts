import { Component } from '@angular/core';
import { PanelStore } from './panel/panel.store';
import { PanelConfig } from './panel/panel.interface';

@Component(
{
	selector: 'app-root',
	styleUrls:
	[
		'./app.component.scss'
	],
	templateUrl: './app.component.html'
})
export class AppComponent
{
	panelConfig : PanelConfig;

	constructor(protected panelStore : PanelStore)
	{
		this.panelStore.get().subscribe(panelConfig => this.panelConfig = panelConfig);
	}
}
