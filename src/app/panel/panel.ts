import { UniversalMethod } from 'ngx-crud';

export interface PanelConfig
{
	general : General;
	abort : Abort;
	cache : Cache;
	observe : Observe;
}

export interface General
{
	amount : number;
	delay : number;
}

interface Abort
{
	method : UniversalMethod;
	lifetime : number;
}

interface Cache
{
	method : UniversalMethod;
	lifetime : number;
}

interface Observe
{
	method : UniversalMethod;
	lifetime : number;
}
