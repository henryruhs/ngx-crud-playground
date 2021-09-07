import { EnvironmentInterface } from './environment.interface';

export const environment : EnvironmentInterface =
{
	apiUrl: 'https://api.chucknorris.io',
	apiRoutes:
	{
		joke: '/jokes/random'
	},
	production: false
};
