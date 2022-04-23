import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelStore } from '../panel/panel.store';

import { ContentComponent } from './content.component';

describe('ContentComponent', () =>
{
	beforeEach(waitForAsync(() =>
	{
		TestBed
			.configureTestingModule(
			{
				declarations:
				[
					ContentComponent
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
		const fixture : ComponentFixture<ContentComponent> = TestBed.createComponent(ContentComponent);

		expect(fixture.debugElement.componentInstance).toBeTruthy();
	});
});
