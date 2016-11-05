class DocumentsTableController {
    constructor(ItemService, CategoryService, SourceService) {
        'ngInject';

        //
        this.documents;
        this.categories;
        this.sources;
        this.promise;
        this.fabOpen = false;
        this.selected = [];
        this.query = {
            order: 'title',
            limit: 15,
            page: 1
        };

        this.ItemService = ItemService;
        this.CategoryService = CategoryService;
        this.SourceService = SourceService;

        this.CategoryService.all((data) => {
          this.categories = data;
        });

        this.SourceService.all((data) => {
          this.sources = data;
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
    inlineUpdate(document, field, value){
      document[field] = value;
      this.saveDocument(document);
    //  this.ItemService.update(document.id, data);
    }
    saveDocument(document){
      this.ItemService.update(document.id, document);
    }
}

export const DocumentsTableComponent = {
    templateUrl: './views/app/components/documents-table/documents-table.component.html',
    controller: DocumentsTableController,
    controllerAs: 'vm',
    bindings: {}
}
