module.exports = config =>
{
	config.set(
	{
		basePath: '',
		frameworks:
		[
			'jasmine',
			'@angular-devkit/build-angular'
		],
		plugins:
		[
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('@angular-devkit/build-angular/plugins/karma')
		],
		client:
		{
			clearContext: false
		},
		reporters:
		[
			'progress'
		],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers:
		[
			'ChromeHeadless'
		],
		singleRun: true,
		restartOnFileChange: true
	});
};
