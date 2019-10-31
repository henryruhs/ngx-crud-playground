import { EnvironmentInterface } from './environment.interface';

export const environment: EnvironmentInterface =
{
	apiUrl: 'https://api.chucknorris.io',
	production: true,
	routes:
	{
		joke: '/jokes/random'
	}
};
