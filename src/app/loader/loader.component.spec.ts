import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CrudModule } from 'ngx-crud';

import { LoaderComponent } from './loader.component';

describe(LoaderComponent.name, () =>
{
	beforeEach(waitForAsync(() =>
	{
		TestBed
			.configureTestingModule(
			{
				declarations:
				[
					LoaderComponent
				],
				imports:
				[
					CrudModule
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
		const fixture : ComponentFixture<LoaderComponent> = TestBed.createComponent(LoaderComponent);

		expect(fixture.debugElement.componentInstance).toBeTruthy();
	});
});
