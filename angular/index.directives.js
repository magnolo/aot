import {AotStickyDirective} from './directives/aot-sticky/aot-sticky.directive';
import {CheckboxerDirective} from './directives/checkboxer/checkboxer.directive';

angular.module('app.directives')
	.directive('aotSticky', AotStickyDirective)
	.directive('checkboxer', CheckboxerDirective);
