import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
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
				]
			})
			.compileComponents();
	}));

	it('Should create the panel', () =>
	{
		const fixture : ComponentFixture<ContentComponent> = TestBed.createComponent(ContentComponent);
		const appComponent : any = fixture.debugElement.componentInstance;

		expect(appComponent).toBeTruthy();
	});
});
