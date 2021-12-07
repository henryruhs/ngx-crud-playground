import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudModule } from 'ngx-crud';

import { PanelStore } from './panel.store';
import { ConsoleStore } from './console/console.store';

import { PanelComponent } from './panel.component';
import { ConsoleComponent } from './console/console.component';

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
					ConsoleComponent
				],
				imports:
				[
					CrudModule,
					ReactiveFormsModule
				],
				providers:
				[
					PanelStore,
					ConsoleStore
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
