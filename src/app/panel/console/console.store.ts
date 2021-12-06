import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConsoleEntry } from './console.interface';

@Injectable()
export class ConsoleStore
{
	protected store : BehaviorSubject<ConsoleEntry[]> = new BehaviorSubject<ConsoleEntry[]>([]);

	get() : BehaviorSubject<ConsoleEntry[]>
	{
		return this.store;
	}

	append(entry : ConsoleEntry) : void
	{
		this.store.next(
		[
			...this.store.getValue(),
			...
			[
				entry
			]
		]);
	}
}
