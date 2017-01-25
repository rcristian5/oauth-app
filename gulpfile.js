
let config = require('gulp-tasks-to-angular2/config.js')({
	files: {
		tsconfig: 'ts.config.json'
	},
	folders: {
		source: 'source',
		distribution: 'dist',
		projectRoot: __dirname,
	}
})

config.modules.gulp.task( 'default', config.modules.sync.sync([
	'clean',
	[
		'copy-modules',
		'copy-scripts',
		'pug',
		'sass',
		'typescript'
	],
	'watch',
	'browser-sync'
  ]) )
