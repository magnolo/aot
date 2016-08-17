class CheckboxerController {
    constructor() {
        'ngInject';

        //
    }
}

export function CheckboxerDirective() {
    return {
        restrict: 'AE',
        template: [
          '<md-checkbox ',
       'class="md-primary"',
       'aria-label="{{node.title || node.name}}"',
      'ng-model="isSelected"',
      'md-indeterminate="isIndeterminate"',
      'ng-class="{selected: isSelected}"',
      'ng-click="resolveIndeterminateClick()"',
      'ng-change="trvw.select(node, isSelected)" ></md-checkbox>'
        ].join(''),
        controller: CheckboxerController,
        bindings: {
            node: '='
        },
        require: '^ivhTreeview',
        link: function(scope, element, attrs, trvw) {

            var node = scope.node,
                opts = trvw.opts(),
                indeterminateAttr = opts.indeterminateAttribute,
                selectedAttr = opts.selectedAttribute;

            // Set initial selected state of this checkbox
            scope.isSelected = node[selectedAttr];

            // Local access to the parent controller
            scope.trvw = trvw;
            scope.resolveIndeterminateClick = function() {
                if (node[indeterminateAttr]) {
                    trvw.select(node, true);
                }
            };

            // Update the checkbox when the node's selected status changes
            scope.$watch('node.' + selectedAttr, function(newVal) {
                scope.isSelected = newVal;
            });

            // Update the checkbox when the node's indeterminate status changes
            scope.$watch('node.' + indeterminateAttr, function(newVal) {
                // element.find('md-checkbox').prop('md-indeterminate', newVal);
                if(angular.isUndefined(newVal)){
                    scope.isIndeterminate = false;
                }
                else{
                    scope.isIndeterminate = newVal;
                }
            });
        }
    }
}
