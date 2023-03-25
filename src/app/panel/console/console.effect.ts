import { Injectable } from '@angular/core';
import { HttpContextToken, HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { ObserveAfterEffect, ObserveBeforeEffect } from 'ngx-crud';

import { ConsoleStore } from './console.store';

@Injectable(
{
	providedIn: 'root'
})
export class ConsoleEffect implements ObserveBeforeEffect, ObserveAfterEffect
{
	protected defaultContext : number = 0;
	protected token : HttpContextToken<number> = new HttpContextToken<number>(() => this.defaultContext);

	constructor(protected consoleStore : ConsoleStore)
	{
	}

	before<T>(request : HttpRequest<T>) : HttpRequest<T>
	{
		request.context.set(this.token, Date.now());
		return request;
	}

	after<T>(request : HttpRequest<T>, response : HttpResponse<T> | HttpErrorResponse) : void
	{
		this.consoleStore.append(
		{
			url: response.url,
			status: response.status,
			time: Date.now() - request.context.get(this.token)
		});
	}
}
