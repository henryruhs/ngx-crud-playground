import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { PanelStore } from './panel.store';
import { AbortService } from 'ngx-crud';

import { PanelComponent } from './panel.component';

describe('PanelComponent', () =>
{
	beforeEach(waitForAsync(() =>
	{
		TestBed
			.configureTestingModule(
			{
				declarations:
				[
					PanelComponent
				],
				imports:
				[
					ReactiveFormsModule
				],
				providers:
				[
					AbortService,
					PanelStore
				]
			})
			.compileComponents();
	}));

	it('Should create the panel', () =>
	{
		const fixture : ComponentFixture<PanelComponent> = TestBed.createComponent(PanelComponent);
		const appComponent : any = fixture.debugElement.componentInstance;

		expect(appComponent).toBeTruthy();
	});
});
