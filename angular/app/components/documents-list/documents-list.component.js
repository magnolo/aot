class DocumentsListController{
    constructor(CategoryService, ItemService){
        'ngInject';

        //
        this.categories = [];
        this.items = [];

        this.CategoryService = CategoryService;
        this.CategoryService.all((data) => {
          this.categories = data;
        });

        this.ItemService = ItemService;
        this.ItemService.all((data) => {
          this.items = data;
        });
    }

    $onInit(){
    }
}

export const DocumentsListComponent = {
    templateUrl: './views/app/components/documents-list/documents-list.component.html',
    controller: DocumentsListController,
    controllerAs: 'vm',
    bindings: {}
}
