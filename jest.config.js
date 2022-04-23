module.exports =
{
	preset: 'jest-preset-angular',
	setupFilesAfterEnv:
	[
		'<rootDir>/jest.setup.ts'
	],
	testPathIgnorePatterns:
	[
		'<rootDir>/cypress'
	]
};
