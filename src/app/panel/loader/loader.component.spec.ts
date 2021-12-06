import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CrudModule } from 'ngx-crud';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () =>
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
					CrudModule,
					HttpClientModule
				]
			})
			.compileComponents();
	}));

	it('Should create the component', () =>
	{
		const fixture : ComponentFixture<LoaderComponent> = TestBed.createComponent(LoaderComponent);
		const component : any = fixture.debugElement.componentInstance;

		expect(component).toBeTruthy();
	});
});
