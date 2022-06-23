import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PanelConfig } from './panel.interface';

@Injectable(
{
	providedIn: 'root'
})
export class PanelStore
{
	protected store : BehaviorSubject<PanelConfig> = new BehaviorSubject<PanelConfig>(null);

	get() : BehaviorSubject<PanelConfig>
	{
		return this.store;
	}

	set(panelConfig : PanelConfig) : void
	{
		this.store.next(panelConfig);
	}
}
