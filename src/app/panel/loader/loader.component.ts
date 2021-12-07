import { Component, OnInit } from '@angular/core';
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
		this.observeService.observeAll().subscribe(observeStatus => this.observeStatus = observeStatus);
	}
}
