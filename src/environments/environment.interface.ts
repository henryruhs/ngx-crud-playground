export interface Environment
{
	apiUrl : string;
	apiRoutes : ApiRoutes;
	production : boolean;
}

interface ApiRoutes
{
	[index : string] : string;
}
