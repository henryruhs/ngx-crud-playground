import { Injectable } from '@angular/core';
import { CrudService } from 'ngx-crud';
import { JokeInterface } from './joke.interface';

import { environment } from '../../environments/environment';

@Injectable()
export class JokeService extends CrudService<JokeInterface>
{
	protected apiUrl : string = environment.apiUrl;
	protected endpoint : string = environment.apiRoutes.joke;
}
