import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ConsoleEntry } from './console.interface';

@Injectable(
{
	providedIn: 'root'
})
export class ConsoleStore
{
	protected store : BehaviorSubject<ConsoleEntry[]> = new BehaviorSubject<ConsoleEntry[]>([]);

	get() : Observable<ConsoleEntry[]>
	{
		return this.store.asObservable();
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
			...[
				entry
			]
		]);
	}
}
