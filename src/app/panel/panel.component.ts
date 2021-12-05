import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { AbstractControl, Validators } from '@angular/forms';
import { ControlsOf, FormControl, FormGroup } from '@ngneat/reactive-forms';
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

	constructor(protected panelStore : PanelStore)
	{
		this.bindForm();
	}

	protected createForm() : FormGroup<ControlsOf<PanelConfig>>
	{
		return new FormGroup<ControlsOf<PanelConfig>>(
		{
			general : new FormGroup(
			{
				amount : new FormControl(20, [ Validators.min(1), Validators.max(100) ]),
				delay : new FormControl(500, [ Validators.max(10000) ])
			}),
			abort : new FormGroup(
			{
				lifetime : new FormControl(2000, [ Validators.max(10000) ]),
				method: new FormControl('ANY')
			}),
			cache : new FormGroup(
			{
				lifetime : new FormControl(2000, [ Validators.max(10000) ]),
				method: new FormControl('ANY')
			}),
			observe : new FormGroup(
			{
				lifetime : new FormControl(2000, [ Validators.max(10000) ]),
				method: new FormControl('ANY')
			}),
			environment : new FormGroup(
			{
				apiUrl: new FormControl('https://api.chucknorris.io', [ Validators.required ]),
				apiRoute : new FormControl('/jokes/random', [ Validators.required ]),
				method : new FormControl('GET')
			})
		});
	}

	protected bindForm() : void
	{
		this.form.valueChanges
			.pipe(
				debounceTime(2000),
				distinctUntilChanged()
			)
			.subscribe(panelConfig =>
			{
				if (this.form.valid)
				{
					this.panelStore.set(panelConfig);
				}
			});
	}

	getValue(path : string) : number
	{
		return (this.form.get(path) as AbstractControl).value;
	}
}
