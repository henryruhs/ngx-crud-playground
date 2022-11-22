import { Component } from '@angular/core';
import { Observable, debounce, timer, mergeMap } from 'rxjs';
import { ObserveService, ObserveStatus } from 'ngx-crud';
import { Store } from 'ngx-crud/observe/observe.interface';

@Component(
{
	selector: 'app-loader',
	styleUrls:
	[
		'./loader.component.scss'
	],
	templateUrl: './loader.component.html'
})
export class LoaderComponent
{
	observeStatus$ : Observable<ObserveStatus> = this.getObserveStatus();

	constructor(protected observeService : ObserveService)
	{
	}

	protected getObserveStatus() : Observable<ObserveStatus>
	{
		return this.observeService
			.observeAll()
			.pipe(
				mergeMap(value => (value.at(1) as Store).status),
				debounce(observeStatus => timer(observeStatus === 'COMPLETED' ? 2000 : 0))
			);
	}
}
