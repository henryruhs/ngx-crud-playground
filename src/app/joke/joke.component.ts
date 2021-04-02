import { Component, Input, OnInit } from '@angular/core';
import { JokeInterface } from './joke.interface';
import { JokeService } from './joke.service';

@Component(
{
	selector: 'app-joke',
	styleUrls:
	[
		'./joke.component.scss'
	],
	templateUrl: './joke.component.html'
})
export class JokeComponent implements OnInit
{
	@Input() public delay : number = 0;

	public joke : string;
	public startTime : number;
	public endTime : number;

	constructor(protected jokeService : JokeService)
	{
	}

	public ngOnInit() : void
	{
		setTimeout(() =>
		{
			this.startTime = Date.now();
			this.jokeService
				.enableAbort('GET', 2000)
				.enableCache('GET', 500)
				.enableObserve('ANY', 1000)
				.request('GET')
				.subscribe((joke : JokeInterface) =>
				{
					this.joke = joke.value;
					this.endTime = Date.now();
				});
		}, this.delay);
	}
}
