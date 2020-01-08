import { Component, Input, OnInit } from '@angular/core';
import { JokeInterface } from './joke.interface';
import { JokeService } from './joke.service';

@Component(
{
	selector: 'app-joke',
	styleUrls:
	[
		'./joke.component.css'
	],
	templateUrl: './joke.component.html'
})
export class JokeComponent implements OnInit
{
	@Input() public delay : number = 0;
	@Input() public abortLifetime : number = 2000;
	@Input() public cacheLifetime : number = 500;

	public joke : string;
	public startTime : number;
	public endTime : number;

	constructor(protected jokeService : JokeService)
	{
	}

	public ngOnInit() : void
	{
		this.fetchJoke();
	}

	protected fetchJoke() : void
	{
		setTimeout(() =>
		{
			this.startTime = Date.now();
			this.jokeService
				.enableAbort('GET', this.abortLifetime)
				.enableCache('GET', this.cacheLifetime)
				.request('GET')
				.subscribe((joke : JokeInterface) =>
				{
					this.joke = joke.value;
					this.endTime = Date.now();
				});
		}, this.delay);
	}
}
