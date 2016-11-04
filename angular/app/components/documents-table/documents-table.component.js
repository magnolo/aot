class DocumentsTableController {
    constructor(ItemService, CategoryService) {
        'ngInject';

        //
        this.documents;
        this.categories;
        this.promise;
        this.selected = [];
        this.query = {
            order: 'title',
            limit: 15,
            page: 1
        };

        this.ItemService = ItemService;
        this.CategoryService = CategoryService;
        
        this.CategoryService.all((data) => {
          this.categories = data;
        });

        this.getDocuments = () =>{
            this.promise = this.ItemService.get(this.query, (data) => {
                this.documents = data;
            }).$promise;
        }
    }
    $onInit() {
        this.getDocuments();
    }
}

export const DocumentsTableComponent = {
    templateUrl: './views/app/components/documents-table/documents-table.component.html',
    controller: DocumentsTableController,
    controllerAs: 'vm',
    bindings: {}
}
