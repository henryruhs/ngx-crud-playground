import { Component, Input, OnInit } from '@angular/core';
import { CustomService, State } from 'ngx-crud';
import { PanelConfig } from '../../panel/panel';

@Component(
{
	selector: 'app-card',
	styleUrls:
	[
		'./card.component.scss'
	],
	templateUrl: './card.component.html'
})
export class CardComponent implements OnInit
{
	@Input() index : number;
	@Input() panelConfig : PanelConfig;

	state : State;

	constructor(protected customService : CustomService<unknown, unknown>)
	{
	}

	ngOnInit() : void
	{
		setTimeout(() => this.load(), this.panelConfig.general.delay * this.index);
	}

	load() : void
	{
		this.state = 'STARTED';
		this.customService
			.setApiUrl(this.panelConfig.environment.apiUrl)
			.setApiRoute(this.panelConfig.environment.apiRoute)
			.enableAbort(this.panelConfig.abort.method, this.panelConfig.abort.lifetime)
			.enableCache(this.panelConfig.cache.method, this.panelConfig.cache.lifetime)
			.enableObserve(this.panelConfig.observe.method, this.panelConfig.observe.lifetime)
			.custom(this.panelConfig.environment.method)
			.subscribe(() => this.state = 'COMPLETED');
	}
}
