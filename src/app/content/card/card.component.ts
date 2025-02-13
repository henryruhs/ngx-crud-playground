import { Component, ElementRef, Input, OnChanges, OnDestroy, ViewChild } from '@angular/core';
import { timer, Subscription, take, tap } from 'rxjs';
import { CustomService } from 'ngx-crud';

import { PanelConfig } from '../../panel/panel.interface';

import { RequestStatus } from './card.type';

@Component(
{
	selector: 'app-card',
	styleUrls:
	[
		'./card.component.scss'
	],
	templateUrl: './card.component.html',
	standalone: false
})
export class CardComponent implements OnChanges, OnDestroy
{
	@Input() index : number;
	@Input() panelConfig : PanelConfig;
	@ViewChild('card') cardElement : ElementRef<HTMLElement>;

	requestStatus : RequestStatus;
	timer : Subscription = new Subscription();

	constructor(protected customService : CustomService<unknown, unknown>)
	{
	}

	ngOnChanges() : void
	{
		this.reset();
		this.timer = timer(this.panelConfig.request.delay * this.index)
			.pipe(
				take(1),
				tap(() => this.load())
			)
			.subscribe();
	}

	ngOnDestroy() : void
	{
		this.reset();
	}

	load() : void
	{
		this.cardElement
			.nativeElement
			.parentElement
			.parentElement
			.scrollLeft = this.cardElement.nativeElement.offsetLeft;
		this.requestStatus = 'STARTED';
		this.customService
			.setApiUrl(this.panelConfig.environment.apiUrl)
			.setApiRoute(this.panelConfig.environment.apiRoute)
			.enableAbort(this.panelConfig.abort.method, this.panelConfig.abort.lifetime)
			.enableCache(this.panelConfig.cache.method, this.panelConfig.cache.lifetime)
			.enableObserve(this.panelConfig.observe.method, this.panelConfig.observe.lifetime)
			.custom(this.panelConfig.environment.method)
			.subscribe(
			{
				next: () => this.requestStatus = 'COMPLETED',
				error: () => this.requestStatus = 'ERRORED'
			});
	}

	protected reset() : void
	{
		this.requestStatus = null;
		this.timer.unsubscribe();
	}
}
