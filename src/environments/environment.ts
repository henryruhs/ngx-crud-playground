import { EnvironmentInterface } from './environment.interface';

export const environment: EnvironmentInterface =
{
	apiUrl: 'https://api.chucknorris.io',
	production: false,
	routes:
	{
		joke: '/jokes/random'
	}
};
