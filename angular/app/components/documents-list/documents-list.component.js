class DocumentsListController{
    constructor($scope,CategoryService, ItemService, FilterService){
        'ngInject';

        //
        this.categories = [];
        this.items = [];

        this.FilterService = FilterService;

        this.CategoryService = CategoryService;
        this.CategoryService.all((data) => {
          this.categories = data;
        });

        this.ItemService = ItemService;
        this.ItemService.all((data) => {
          this.items = data;
        });

        $scope.$watch(this.FilterService.filters, (n,o) =>{
          console.log(n,o);
        },true);
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
