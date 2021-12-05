import { HttpClientModule } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CrudModule } from 'ngx-crud';

import { PanelStore } from './panel/panel.store';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/card/card.component';
import { PanelComponent } from './panel/panel.component';

describe('AppComponent', () =>
{
	beforeEach(waitForAsync(() =>
	{
		TestBed
			.configureTestingModule(
			{
				declarations:
				[
					AppComponent,
					ContentComponent,
					CardComponent,
					PanelComponent
				],
				imports:
				[
					CrudModule,
					HttpClientModule,
					RouterTestingModule
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
		const fixture : ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
		const component : any = fixture.debugElement.componentInstance;

		expect(component).toBeTruthy();
	});
});
