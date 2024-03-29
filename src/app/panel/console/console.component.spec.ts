import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelStore } from '../panel.store';

import { ConsoleStore } from './console.store';
import { ConsoleComponent } from './console.component';

describe(ConsoleComponent.name, () =>
{
	beforeEach(waitForAsync(() =>
	{
		TestBed
			.configureTestingModule(
			{
				declarations:
				[
					ConsoleComponent
				],
				providers:
				[
					PanelStore,
					ConsoleStore
				]
			})
			.compileComponents();
	}));

	it('should create the component', () =>
	{
		const fixture : ComponentFixture<ConsoleComponent> = TestBed.createComponent(ConsoleComponent);

		expect(fixture.debugElement.componentInstance).toBeTruthy();
	});
});
