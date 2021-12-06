import { HttpStatusCode } from '@angular/common/http';

export interface ConsoleEntry
{
	url : string;
	status : HttpStatusCode;
	time : number;
}
