import { Injectable } from '@angular/core';
import { HttpContextToken, HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { EffectInterface } from 'ngx-crud';

@Injectable()
export class DebugService implements EffectInterface
{
	protected defaultContext : number = 0;
	protected token : HttpContextToken<number> = new HttpContextToken<number>(() => this.defaultContext);

	before<T>(request : HttpRequest<T>) : HttpRequest<T>
	{
		request.context.set(this.token, Date.now());
		return request;
	}

	after<T>(request : HttpRequest<T>, response : HttpResponse<T> | HttpErrorResponse) : void
	{
		// eslint-disable-next-line no-console
		console.table(
		{
			status: response.status,
			time: Date.now() - request.context.get(this.token),
			url: response.url
		});
	}
}
