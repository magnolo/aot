class AotStickyController{
    constructor($mdSticky){
        'ngInject';

        //
        this.$mdSticky = $mdSticky;
    }
}

export function AotStickyDirective(){
    return {
        restrict: 'EA',
        controller: AotStickyController,
        link: function(scope, element, attrs, controllers){
            //

             controllers.$mdSticky(scope, element);
        }
    }
}
