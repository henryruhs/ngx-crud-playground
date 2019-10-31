import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudModule } from 'ngx-crud';
import { JokeComponent } from './joke.component';
import { JokeService } from './joke.service';

describe('JokeComponent', () =>
{
	beforeEach(async(() =>
	{
		TestBed
			.configureTestingModule(
			{
				declarations:
				[
					JokeComponent
				],
				imports:
				[
					CrudModule,
					HttpClientModule
				],
				providers:
				[
					JokeService
				]
			})
			.compileComponents();
	}));

	it('Should create the joke', () =>
	{
		const fixture : ComponentFixture<JokeComponent> = TestBed.createComponent(JokeComponent);
		const appComponent : any = fixture.debugElement.componentInstance;

		expect(appComponent).toBeTruthy();
	});
});
