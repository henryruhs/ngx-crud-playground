import { environment as environmentLocal } from './environment';
import { environment as environmentProd } from './environment.prod';
import { Environment } from './environment.interface';

export const environmentHelper : Function = (environment : string) : Environment =>
{
	if (environment === 'prod')
	{
		return environmentProd;
	}
	return environmentLocal;
};
