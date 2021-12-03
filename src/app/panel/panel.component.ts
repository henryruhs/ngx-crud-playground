import { Component } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { ControlsOf, FormControl, FormGroup } from '@ngneat/reactive-forms';
import { AbortService } from 'ngx-crud';
import { PanelConfig } from './panel';
import { PanelStore } from './panel.store';

@Component(
{
	selector: 'app-panel',
	styleUrls:
	[
		'./panel.component.scss'
	],
	templateUrl: './panel.component.html'
})
export class PanelComponent
{
	form : FormGroup<ControlsOf<PanelConfig>> = this.createForm();

	constructor(protected panelStore : PanelStore, protected abortService : AbortService)
	{
		this.bindForm();
	}

	protected createForm() : FormGroup<ControlsOf<PanelConfig>>
	{
		return new FormGroup<ControlsOf<PanelConfig>>(
		{
			general : new FormGroup(
			{
				amount : new FormControl(50, [ Validators.min(1), Validators.max(100) ]),
				delay : new FormControl(0, [ Validators.max(10000) ])
			}),
			abort : new FormGroup(
			{
				method: new FormControl('ANY'),
				lifetime : new FormControl(2000, [ Validators.max(10000) ])
			}),
			cache : new FormGroup(
			{
				method: new FormControl('ANY'),
				lifetime : new FormControl(2000, [ Validators.max(10000) ])
			}),
			observe : new FormGroup(
			{
				method: new FormControl('ANY'),
				lifetime : new FormControl(2000, [ Validators.max(10000) ])
			})
		});
	}

	protected bindForm() : void
	{
		this.form.valueChanges.subscribe(panelConfig =>
		{
			this.abortService.abortAll();
			this.panelStore.set(panelConfig);
		});
	}

	getValue(path : string) : number
	{
		return (this.form.get(path) as AbstractControl).value;
	}
}
