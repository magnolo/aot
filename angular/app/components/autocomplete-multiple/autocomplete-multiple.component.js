class AutocompleteMultipleController {
    constructor() {
        'ngInject';

        //
    }

    $onInit() {}

    /**
     * @ngdoc function
     * @name selectedItemChange
     * @description
     * Add the selected item to the list and clear the selection
     *
     */
    selectedItemChange(item) {
        if (item) {
            if (this.item.indexOf(item) == -1) {
                this.item.push(item);
            }
            this.searchText = '';
            this.selectedItem = undefined;
        }
    }

    /**
     * @ngdoc function
     * @name createNew
     * @description
     * Creates a new element if there is none found through the search query
     *
     */
     createNew(text){
       let item = {};
       item[this.text] = text;
       this.item.push(item);
       this.list.push(item);
       this.searchText = '';
       this.selectedItem = undefined;
     }
}

export const AutocompleteMultipleComponent = {
    templateUrl: './views/app/components/autocomplete-multiple/autocomplete-multiple.component.html',
    controller: AutocompleteMultipleController,
    controllerAs: 'vm',
    bindings: {
        item: '=',
        list: '=',
        text: '@',
        title: '@',
        icon: '@',
        label: '@'
    }
}
