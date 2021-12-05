import { HttpClientModule } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CrudModule } from 'ngx-crud';

import { PanelStore } from './panel/panel.store';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { PanelComponent } from './panel/panel.component';
import { LoaderComponent } from './loader/loader.component';

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
					PanelComponent,
					LoaderComponent
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

	it('Should create the app', () =>
	{
		const fixture : ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
		const appComponent : any = fixture.debugElement.componentInstance;

		expect(appComponent).toBeTruthy();
	});
});
