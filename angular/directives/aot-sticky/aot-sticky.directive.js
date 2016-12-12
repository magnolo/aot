
export function AotStickyDirective($mdSticky, $compile, $log){
    return {
        restrict: 'A',
        transclude: true,
        compile: function(element, attrs, transclude){
            //
            return function postLink(scope, element, attr) {
				var outerHTML = element[0].outerHTML;
				$log.debug(outerHTML);
				transclude(scope, function (clone) {
					$log.debug(clone);
					element.append(clone);
				});

				transclude(scope, function (clone) {
					var stickyClone = $compile(angular.element(outerHTML).removeAttr("md-sticky"))(scope); 
					stickyClone.append(clone);
					$mdSticky(scope, element, stickyClone);
				});
			};
        }
    }
}
