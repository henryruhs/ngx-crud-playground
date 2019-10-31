export interface EnvironmentInterface
{
	apiUrl: string;
	production: boolean;
	routes: RouteInterface;
}

interface RouteInterface
{
	[index: string]: string;
}
