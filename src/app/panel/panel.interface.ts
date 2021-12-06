import { Method, UniversalMethod } from 'ngx-crud';

export interface PanelConfig
{
	general : General;
	abort : Abort;
	cache : Cache;
	observe : Observe;
	environment : Environment;
}

export interface General
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
