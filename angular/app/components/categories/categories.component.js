class CategoriesController{
    constructor(CategoryService){
        'ngInject';

        //
        this.categories = [];
        this.CategoryService = CategoryService;
    }

    $onInit(){
        this.CategoryService.all((response) => {
            this.categories = response;
        })
    }
}

export const CategoriesComponent = {
    templateUrl: './views/app/components/categories/categories.component.html',
    controller: CategoriesController,
    controllerAs: 'vm',
    bindings: {}
}
