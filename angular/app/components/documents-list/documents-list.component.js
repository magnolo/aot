class DocumentsListController{
    constructor(CategoryService){
        'ngInject';

        //
        this.categories = [];

        this.CategoryService = CategoryService;
        this.CategoryService.all((data) => {
          this.categories = data;
        })
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
