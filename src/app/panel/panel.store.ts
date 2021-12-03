import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PanelConfig } from './panel';

@Injectable()
export class PanelStore
{
	protected store : Subject<PanelConfig> = new Subject<PanelConfig>();

	get() : Subject<PanelConfig>
	{
		return this.store;
	}

	set(panelConfig : PanelConfig) : void
	{
		this.store.next(panelConfig);
	}
}
