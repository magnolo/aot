class TypesTableController {
    constructor(TypeService, DialogService, sweet) {
        'ngInject';

        //
        this.fabOpen = false;
        this.sweet = sweet;
        this.type = {};
        this.types = [];
        this.selected = [];
        this.TypeService = TypeService;
        this.DialogService = DialogService;
        this.query = {
            order: 'id'
        }
        this.getGroups();
    }

    $onInit() {}
    getGroups() {
        this.TypeService.all((response) => {
            this.types = response;
        })
    }
    inlineUpdate(type, field, value) {
        type[field] = value;
        this.saveGroup(type);

    }
    saveGroup(type) {
        this.TypeService.update(type.id, type);
    }
    newType() {
        this.DialogService.fromTemplate('type', {
            controller: () => this,
            controllerAs: 'vm'
        })
    }
    cancel() {
        this.DialogService.hide();
    }
    save() {
        this.TypeService.create(this.type, (response) => {
            this.getGroups();
            this.type = {};
            this.DialogService.hide();
        }, (response) => {

        });
    }
    deleteItems() {
        this.sweet.show({
            title: 'Are you shure?',
            text: 'You are about to delete ' + this.selected.length + ' types. Really?',
            type: 'info',
            confirmButtonColor: '#2196F3',
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, (inputValue) => {
            if (inputValue) {
                this.TypeService.remove(this.selected.map((item) => { return item.id; }), (response) => {
                    this.sweet.show({
                        title: 'Success!',
                        type: 'success',
                        text: 'The selected items are now gone!',
                        confirmButtonColor: '#2196F3',
                        closeOnConfirm: true,
                        confirmButtonText: 'OK',
                    });
                    this.selected = [];
                    this.getGroups();
                }, () => {
                    this.sweet.show('Ups...', 'Something went wrong!', 'error');
                });
            }
        });
    }
}

export const TypesTableComponent = {
    templateUrl: './views/app/components/types-table/types-table.component.html',
    controller: TypesTableController,
    controllerAs: 'vm',
    bindings: {}
}