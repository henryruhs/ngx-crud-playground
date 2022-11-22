import { Component, OnInit } from '@angular/core';
import { debounce, timer, mergeMap } from 'rxjs';
import { Store } from 'ngx-crud/observe/observe.interface';
import { ObserveService, ObserveStatus } from 'ngx-crud';

@Component(
{
	selector: 'app-loader',
	styleUrls:
	[
		'./loader.component.scss'
	],
	templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit
{
	observeStatus : ObserveStatus;

	constructor(protected observeService : ObserveService)
	{
	}

	ngOnInit() : void
	{
		this.observeService.observeAll()
			.pipe(
				mergeMap(value => (value.at(1) as Store).status),
				debounce(observeStatus => timer(observeStatus === 'COMPLETED' ? 2000 : 0))
			)
			.subscribe(observeStatus => this.observeStatus = observeStatus);
	}
}
