import { Injectable } from '@angular/core';
import { CrudService } from 'ngx-crud';
import { RequestBody, ResponseBody } from './joke.interface';

import { environment } from '../../environments/environment';

@Injectable()
export class JokeService extends CrudService<RequestBody, ResponseBody>
{
	protected apiUrl : string = environment.apiUrl;
	protected apiRoute : string = environment.apiRoutes.joke;
}
