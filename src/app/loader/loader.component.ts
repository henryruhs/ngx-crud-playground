import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs';
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
		this.observeService.observeAll().pipe(mergeMap(value => value[1].status)).subscribe(observeStatus => this.observeStatus = observeStatus);
	}
}
