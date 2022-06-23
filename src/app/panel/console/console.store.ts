import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConsoleEntry } from './console.interface';

@Injectable(
{
	providedIn: 'root'
})
export class ConsoleStore
{
	protected store : BehaviorSubject<ConsoleEntry[]> = new BehaviorSubject<ConsoleEntry[]>([]);

	get() : BehaviorSubject<ConsoleEntry[]>
	{
		return this.store;
	}

	reset() : void
	{
		this.store.next([]);
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
