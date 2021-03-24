import { HttpClientModule } from '@angular/common/http';
import { waitForAsync, inject, TestBed } from '@angular/core/testing';
import { CrudModule } from 'ngx-crud';
import { JokeInterface } from './joke.interface';
import { JokeService } from './joke.service';

describe('JokeService', () =>
{
	beforeEach(waitForAsync(() =>
	{
		TestBed
			.configureTestingModule(
			{
				imports:
				[
					CrudModule,
					HttpClientModule
				],
				providers:
				[
					JokeService
				]
			});
	}));

	it('get via request', done =>
	{
		inject(
		[
			JokeService
		], (jokeService : JokeService) =>
		{
			jokeService
				.request('GET')
				.subscribe((joke : JokeInterface) =>
				{
					expect(joke.value).toBeDefined();
					done();
				});
		})();
	});
});
