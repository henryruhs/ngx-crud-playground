import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { PanelConfig } from './panel.interface';

@Injectable(
{
	providedIn: 'root'
})
export class PanelStore
{
	protected store : BehaviorSubject<PanelConfig> = new BehaviorSubject<PanelConfig>(null);

	get() : Observable<PanelConfig>
	{
		return this.store.asObservable();
	}

	set(panelConfig : PanelConfig) : void
	{
		this.store.next(panelConfig);
	}
}
