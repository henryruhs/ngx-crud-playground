import { FormControl, FormGroup } from '@angular/forms';
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

export interface PanelConfigAsControl
{
	request : FormGroup<RequestAsControl>;
	abort : FormGroup<AbortAsControl>;
	cache : FormGroup<CacheAsControl>;
	observe : FormGroup<ObserveAsControl>;
	environment : FormGroup<EnvironmentAsControl>;
}

export interface RequestAsControl
{
	amount : FormControl<number>;
	delay : FormControl<number>;
}

export interface AbortAsControl
{
	lifetime : FormControl<number>;
	method : FormControl<UniversalMethod>;
}

export interface CacheAsControl
{
	lifetime : FormControl<number>;
	method : FormControl<UniversalMethod>;
}

export interface ObserveAsControl
{
	lifetime : FormControl<number>;
	method : FormControl<UniversalMethod>;
}

export interface EnvironmentAsControl
{
	apiUrl : FormControl<string>;
	apiRoute : FormControl<string>;
	method : FormControl<Method>;
}
