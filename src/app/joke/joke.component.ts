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
	@Input() public lifetime: number = 1000;
	@Input() public timeout: number = 0;

	protected startTime: number;
	protected endTime: number;
	protected joke: string;

	constructor(protected jokeService: JokeService)
	{
	}

	public ngOnInit(): void
	{
		this.fetchJoke();
	}

	protected fetchJoke(): void
	{
		setTimeout(() =>
		{
			this.startTime = Date.now();
			this.jokeService
				.doCache('GET', this.lifetime)
				.request('GET')
				.subscribe((joke : JokeInterface) =>
				{
					this.joke = joke.value;
					this.endTime = Date.now();
				});
		}, this.timeout);
	}
}
