import { HttpClientModule } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
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

	it('Should create the loader', () =>
	{
		const fixture : ComponentFixture<LoaderComponent> = TestBed.createComponent(LoaderComponent);
		const appComponent : any = fixture.debugElement.componentInstance;

		expect(appComponent).toBeTruthy();
	});
});
