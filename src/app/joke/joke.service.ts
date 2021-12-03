import { Injectable } from '@angular/core';
import { ApiUrl, ApiRoute, CrudService } from 'ngx-crud';
import { RequestBody, ResponseBody } from './joke.interface';

import { environment } from '../../environments/environment';

@Injectable()
@ApiUrl(environment.apiUrl)
@ApiRoute(environment.apiRoutes.joke)
export class JokeService extends CrudService<RequestBody, ResponseBody>
{
}
