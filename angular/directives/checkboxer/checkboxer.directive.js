class CheckboxerController {
    constructor(ivhTreeviewMgr) {
        'ngInject';

        //
    }
}

export function CheckboxerDirective() {
    return {
        restrict: 'AE',
        template: [
          '<div ',
      'class="ivh-treeview-checker"',
      'ng-model="isSelected"',
      'ng-class="{selected: isSelected}"',
      'ng-change="resolveIndeterminateClick()"',
      'ng-click="trvw.select(node, isSelected)" ><md-icon>check</md-icon></div>'
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
            scope.$watch('node.' + selectedAttr, function(newVal, oldVal) {
                scope.isSelected = newVal;
            });

            // Update the checkbox when the node's indeterminate status changes
            scope.$watch('node.' + indeterminateAttr, function(newVal, oldVal) {
                element.find('div').prop('indeterminate', newVal);
            });
        }
    }
}
