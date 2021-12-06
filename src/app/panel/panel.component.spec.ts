import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudModule } from 'ngx-crud';

import { PanelStore } from './panel.store';

import { PanelComponent } from './panel.component';
import { ConsoleComponent } from './console/console.component';
import { LoaderComponent } from './loader/loader.component';


describe('PanelComponent', () =>
{
	beforeEach(waitForAsync(() =>
	{
		TestBed
			.configureTestingModule(
			{
				declarations:
				[
					PanelComponent,
					ConsoleComponent,
					LoaderComponent
				],
				imports:
				[
					CrudModule,
					ReactiveFormsModule
				],
				providers:
				[
					PanelStore
				]
			})
			.compileComponents();
	}));

	it('Should create the component', () =>
	{
		const fixture : ComponentFixture<PanelComponent> = TestBed.createComponent(PanelComponent);
		const component : any = fixture.debugElement.componentInstance;

		expect(component).toBeTruthy();
	});
});
