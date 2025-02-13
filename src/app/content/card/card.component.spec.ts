import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CrudModule } from 'ngx-crud';

import { CardComponent } from './card.component';

describe(CardComponent.name, () =>
{
	beforeEach(waitForAsync(() =>
	{
		TestBed
			.configureTestingModule(
			{
				imports:
				[
					CrudModule
				],
				declarations:
				[
					CardComponent
				],
				providers:
				[
					provideHttpClient(withInterceptorsFromDi())
				]
			})
			.compileComponents();
	}));

	it('should create the component', () =>
	{
		const fixture : ComponentFixture<CardComponent> = TestBed.createComponent(CardComponent);

		expect(fixture.debugElement.componentInstance).toBeTruthy();
	});
});
