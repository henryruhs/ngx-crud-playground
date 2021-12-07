import { Method, UniversalMethod } from 'ngx-crud';

export interface PanelConfig
{
	request : Request;
	abort : Abort;
	cache : Cache;
	observe : Observe;
	environment : Environment;
}

export interface Request
{
	amount : number;
	delay : number;
}

interface Abort
{
	lifetime : number;
	method : UniversalMethod;
}

interface Cache
{
	lifetime : number;
	method : UniversalMethod;
}

interface Observe
{
	lifetime : number;
	method : UniversalMethod;
}

interface Environment
{
	apiUrl : string;
	apiRoute : string;
	method : Method;
}
