import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudModule } from 'ngx-crud';

import { PanelStore } from './panel/panel.store';
import { ConsoleStore } from './panel/console/console.store';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/card/card.component';
import { PanelComponent } from './panel/panel.component';
import { ConsoleComponent } from './panel/console/console.component';
import { LoaderComponent } from './loader/loader.component';

describe(AppComponent.name, () =>
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
					PanelComponent,
					ConsoleComponent,
					LoaderComponent
				],
				imports:
				[
					CrudModule
				],
				providers:
				[
					provideHttpClient(withInterceptorsFromDi()),
					ConsoleStore,
					PanelStore
				]
			})
			.compileComponents();
	}));

	it('should create the component', () =>
	{
		const fixture : ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);

		expect(fixture.debugElement.componentInstance).toBeTruthy();
	});
});
