export interface EnvironmentInterface
{
	apiUrl : string;
	apiRoutes : RouteInterface;
	production : boolean;
}

interface RouteInterface
{
	[index : string] : string;
}
