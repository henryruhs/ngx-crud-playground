import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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
	panelConfig : Observable<PanelConfig> = this.panelStore.get();

	constructor(protected panelStore : PanelStore)
	{
	}
}
