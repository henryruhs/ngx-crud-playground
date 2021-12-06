import { ChangeDetectorRef, Component } from '@angular/core';
import { PanelStore } from '../panel/panel.store';

import { PanelConfig } from '../panel/panel.interface';

@Component(
{
	selector: 'app-content',
	styleUrls:
	[
		'./content.component.scss'
	],
	templateUrl: './content.component.html'
})
export class ContentComponent
{
	panelConfig : PanelConfig;

	constructor(protected panelStore : PanelStore)
	{
		this.panelStore
			.get()
			.subscribe(panelConfig => this.panelConfig = panelConfig);
	}
}
