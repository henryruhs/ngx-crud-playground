import { HttpStatusCode } from '@angular/common/http';

export interface ConsoleEntry
{
	status : HttpStatusCode;
	time : number;
	url : string;
}
