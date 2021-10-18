import { Environment } from './environment.interface';

export const environment : Environment =
{
	apiUrl: 'https://api.chucknorris.io',
	apiRoutes:
	{
		joke: '/jokes/random'
	},
	production: true
};
