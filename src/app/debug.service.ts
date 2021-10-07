import { Injectable } from '@angular/core';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { EffectInterface } from 'ngx-crud';

@Injectable()
export class DebugService implements EffectInterface
{
	effect<T>(event : HttpEvent<T>) : void
	{
		if (event instanceof HttpResponse)
		{
			// eslint-disable-next-line no-console
			console.table(
			{
				status: event.status,
				url: event.url
			});
		}
	}
}
