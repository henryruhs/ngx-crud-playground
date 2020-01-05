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
	@Input() public lifetime : number = 1000;
	@Input() public delay : number = 0;

	public startTime : number;
	public endTime : number;
	public joke : string;

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
				.enableCache('GET', this.lifetime)
				.request('GET')
				.subscribe((joke : JokeInterface) =>
				{
					this.joke = joke.value;
					this.endTime = Date.now();
				});
		}, this.delay);
	}
}
