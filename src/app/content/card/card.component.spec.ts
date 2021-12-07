import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CrudModule } from 'ngx-crud';

import { CardComponent } from './card.component';

describe('CardComponent', () =>
{
	beforeEach(waitForAsync(() =>
	{
		TestBed
			.configureTestingModule(
			{
				imports:
				[
					CrudModule,
					HttpClientModule
				],
				declarations:
				[
					CardComponent
				]
			})
			.compileComponents();
	}));

	it('Should create the component', () =>
	{
		const fixture : ComponentFixture<CardComponent> = TestBed.createComponent(CardComponent);
		const component : any = fixture.debugElement.componentInstance;

		expect(component).toBeTruthy();
	});
});