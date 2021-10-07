import { Component, OnInit } from '@angular/core';
import { ObserveService } from 'ngx-crud';

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
	public isLoading : boolean;

	constructor(protected observeService : ObserveService)
	{
	}

	public ngOnInit() : void
	{
		this.observeService.observeAll().subscribe(state => this.isLoading = state === 'STARTED');
	}
}
