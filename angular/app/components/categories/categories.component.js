class CategoriesController {
    constructor($scope, CategoryService, DialogService, sweet) {
        'ngInject';

        //
        this.fabOpen = false;
        this.sweet = sweet;
        this.category = {};
        this.categories = [];
        this.selected = [];
        this.CategoryService = CategoryService;
        this.DialogService = DialogService;
        this.$scope = $scope;
        this.query = {
            order: 'id'
        }
    }

    $onInit() {
        this.getCategories();
    }
    getCategories() {
        this.CategoryService.all((response) => {
            this.categories = response;
        })
    }
    inlineUpdate(category, field, value) {
        category[field] = value;
        this.saveCategory(category);

    }
    saveCategory(category) {
        this.CategoryService.update(category.id, category);
    }
    newCategory() {
        this.DialogService.fromTemplate('category', {
            controller: CategoriesController,
            controllerAs: 'vm'
        })
    }
    cancel() {
        this.DialogService.hide();
    }
    save() {
        this.CategoryService.create(this.category, (response) => {
             this.getCategories();
            this.category = {};
            this.DialogService.hide();
        }, (response) => {

        });
    }
    deleteItems() {
        this.sweet.show({
            title: 'Are you shure?',
            text: 'You are about to delete ' + this.selected.length + ' categories. Really?',
            type: 'info',
            confirmButtonColor: '#2196F3',
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, (inputValue) => {
            if (inputValue) {
                this.CategoryService.remove(this.selected.map((item) => { return item.id; }), (response) => {
                    this.sweet.show({
                        title: 'Success!',
                        type: 'success',
                        text: 'The selected items are now gone!',
                        confirmButtonColor: '#2196F3',
                        closeOnConfirm: true,
                        confirmButtonText: 'OK',
                    });
                    this.selected = [];
                    this.getCategories();
                }, () => {
                    this.sweet.show('Ups...', 'Something went wrong!', 'error');
                });
            }
        });
    }
}

export const CategoriesComponent = {
    templateUrl: './views/app/components/categories/categories.component.html',
    controller: CategoriesController,
    controllerAs: 'vm',
    bindings: {}
}
