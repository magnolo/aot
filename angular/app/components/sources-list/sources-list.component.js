class SourcesListController {
    constructor(API, SourceService, DialogService, $state, sweet) {
        'ngInject';

        //
        this.API = API;
        this.$state = $state;
        this.SourceService = SourceService;
        this.DialogService = DialogService;
        this.sources = [];
        this.source = {};
        this.newSource = {};
        this.selected = [];
        this.loading = true;
        this.sweet = sweet;
        this.getData();
    }

    $onInit() {}
    getData() {
        if (angular.isDefined(this.$state.params.id)) {
            this.SourceService.one(this.$state.params.id, (response) => {
                this.source = response.data.source;
                this.sources = this.source.children;
                this.loading = false;

            }, (response) => {

            });
        } else {
            this.SourceService.all((response) => {
                this.sources = response;
                this.loading = false;
            }, (response) => {

            });
        }
    }
    inlineUpdate(source, field, value) {
        source[field] = value;
        this.saveSource(source);
    }
    saveSource(source) {
        this.SourceService.update(source.id, source);
    }
    newSources() {
        if (angular.isDefined(this.source.id)) {
            this.newSource.parent_id = this.source.id;
        }

        this.DialogService.fromTemplate('source', {
            controller: () => this,
            controllerAs: 'vm'
        })
    }
    cancel() {
        this.DialogService.hide();
    }
    save() {
        this.SourceService.create(this.newSource, (response) => {
            this.newSource = {};
            this.DialogService.hide();
            this.getData();
        }, (response) => {

        });
    }
    deleteItems() {
        this.sweet.show({
            title: 'Are you shure?',
            text: 'You are about to delete ' + this.selected.length + ' sources. Really?',
            type: 'info',
            confirmButtonColor: '#2196F3',
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, (inputValue) => {
            if (inputValue) {
                this.SourceService.remove(this.selected.map((item) => { return item.id; }), (response) => {
                    this.sweet.show({
                        title: 'Success!',
                        type: 'success',
                        text: 'The selected items are now gone!',
                        confirmButtonColor: '#2196F3',
                        closeOnConfirm: true,
                        confirmButtonText: 'OK'
                    });
                    this.selected = [];
                    this.getData();
                }, () => {
                    this.sweet.show('Ups...', 'Something went wrong!', 'error');
                });
            }
        });
    }
}

export const SourcesListComponent = {
    templateUrl: './views/app/components/sources-list/sources-list.component.html',
    controller: SourcesListController,
    controllerAs: 'vm',
    bindings: {}
}