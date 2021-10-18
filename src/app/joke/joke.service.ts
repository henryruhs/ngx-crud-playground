import { Injectable } from '@angular/core';
import { CrudService } from 'ngx-crud';
import { Joke } from './joke.interface';

import { environment } from '../../environments/environment';

@Injectable()
export class JokeService extends CrudService<Joke>
{
	protected apiUrl : string = environment.apiUrl;
	protected endpoint : string = environment.apiRoutes.joke;
}
