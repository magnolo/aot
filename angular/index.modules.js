angular.module('app', [
    'app.run',
	'app.filters',
	'app.services',
	'app.components',
    'app.directives',
	'app.routes',
	'app.config',
	'app.partials'
]);

angular.module('app.run', ['ui.router']);
angular.module('app.routes', []);
angular.module('app.filters', []);
angular.module('app.services', []);
angular.module('app.config', []);
angular.module('app.directives', []);
angular.module('app.components', [
	'ui.router', 'ngMaterial', 'angular-loading-bar',
	'restangular', 'ngStorage', 'satellizer','mdSteppers','ngMessages','ngFileUpload',
   'ivh.treeview', 'vAccordion', 'ngAnimate','angular.filter','hSweetAlert','duScroll',
   'ngFileSaver','angularMoment','md.data.table', 'angularInlineEdit','sticky','ui.tree'
]);
