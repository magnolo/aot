class AutocompleteListInlineController {
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

}

export const AutocompleteListInlineComponent = {
    templateUrl: './views/app/components/autocomplete-list-inline/autocomplete-list-inline.component.html',
    controller: AutocompleteListInlineController,
    controllerAs: 'vm',
    bindings: {
        item: '=',
        list: '=',
        text: '@',
        title: '@',
        label: '@',
        name: '@?',
        isrequired: '=?'
    }
}