import { Component, OnInit } from '@angular/core';
import { ObserveService, State } from 'ngx-crud';

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
	state : State;

	constructor(protected observeService : ObserveService)
	{
	}

	ngOnInit() : void
	{
		this.observeService.observeAll().subscribe(state => this.state = state);
	}
}
