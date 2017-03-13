class AutocompleteListController {
    constructor() {
        'ngInject';

        //
    }

    $onInit() {
            let items = [];
            this.list.map((list) => {
                items.push(list);
                if (list.children) {
                    list.children.map((child) => {
                        child.class = 'lvl-1';
                        items.push(child);
                        if (child.children) {
                            child.children.map((c) => {
                                child.class = 'lvl-2';
                                items.push(c);
                                if (c.children) {
                                    c.children.map((cc) => {
                                        cc.class = 'lvl-3';
                                        items.push(cc);
                                    })
                                }
                            })
                        }
                    });

                }
            })
            this.list = items;
        }
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
}

export const AutocompleteListComponent = {
    templateUrl: './views/app/components/autocomplete-list/autocomplete-list.component.html',
    controller: AutocompleteListController,
    controllerAs: 'vm',
    bindings: {
        item: '=',
        list: '=',
        text: '@',
        title: '@',
        icon: '@',
        label: '@',
        flatten: '@?'
    }
}