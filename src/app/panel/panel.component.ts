import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Method, UniversalMethod } from 'ngx-crud';

import { PanelStore } from './panel.store';
import { ConsoleStore } from './console/console.store';
import { PanelConfig, PanelConfigAsControl } from './panel.interface';

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
	form : FormGroup<PanelConfigAsControl> = this.createForm();

	constructor(protected panelStore : PanelStore, protected consoleStore : ConsoleStore)
	{
		this.bindForm();
		this.triggerFormChanged();
	}

	getValue(path : string) : number
	{
		return this.form.get(path) as AbstractControl.value;
	}

	protected createForm() : FormGroup<PanelConfigAsControl>
	{
		return new FormGroup<PanelConfigAsControl>(
		{
			request: new FormGroup(
			{
				amount: new FormControl(20, [ Validators.min(1), Validators.max(100) ]),
				delay: new FormControl(200, [ Validators.max(10000) ])
			}),
			abort: new FormGroup(
			{
				lifetime: new FormControl(2000, [ Validators.max(10000) ]),
				method: new FormControl<UniversalMethod>('ANY')
			}),
			cache: new FormGroup(
			{
				lifetime: new FormControl(2000, [ Validators.max(10000) ]),
				method: new FormControl<UniversalMethod>('ANY')
			}),
			observe: new FormGroup(
			{
				lifetime: new FormControl(2000, [ Validators.max(10000) ]),
				method: new FormControl<UniversalMethod>('ANY')
			}),
			environment: new FormGroup(
			{
				apiUrl: new FormControl('https://api.chucknorris.io', [ Validators.required ]),
				apiRoute: new FormControl('/jokes/random', [ Validators.required ]),
				method: new FormControl<Method>('GET')
			})
		});
	}

	protected bindForm() : void
	{
		this.form.valueChanges
			.pipe(
				debounceTime(1000),
				distinctUntilChanged()
			)
			.subscribe((panelConfig : PanelConfig) =>
			{
				if (this.form.valid)
				{
					this.panelStore.set(panelConfig);
					this.consoleStore.reset();
				}
			});
	}

	protected triggerFormChanged() : void
	{
		this.form.updateValueAndValidity();
	}
}
