class SourcesHirarchyController {
    constructor($scope, API, SourceService, DialogService, sweet) {
        'ngInject';

        //
        this.API = API;
        this.SourceService = SourceService;
        this.DialogService = DialogService;
        this.sweet = sweet;
        this.sources = [];
        this.newSource = {};
        this.$scope = $scope;
        this.getData();
        this.treeOptions = {
            dropped: (event) => {
                let source = event.source.nodeScope.$modelValue;
                if (angular.isDefined(event.dest.nodesScope.$parent.$modelValue)) {
                    if (event.dest.nodesScope.$parent.$modelValue.id != source.parent_id) {
                        source.parent_id = event.dest.nodesScope.$parent.$modelValue.id;
                        this.saveData(source);
                    }
                } else {
                    if (source.parent_id) {
                        source.parent_id = null;
                        this.saveData(source);
                    }
                }

            }
        }
    }

    $onInit() {}
    getData() {

        this.SourceService.all((response) => {
            this.sources = response;

        }, (response) => {

        });

    }
    toggle(item) {
        item.toggle();
    }
    collapseAll() {
        this.$scope.$broadcast('angular-ui-tree:collapse-all');
    }
    expandAll() {
        this.$scope.$broadcast('angular-ui-tree:expand-all');
    }
    saveData(source) {
        this.SourceService.update(source.id, source);
    }
    newSources(item) {
        if (angular.isDefined(item)) {
            this.source = item;
            this.newSource.parent_id = item.id;
        } else {
            this.source = {};
            this.newSource.parent_id = null;
        }
        this.DialogService.fromTemplate('source', {
            controller: () => this,
            controllerAs: 'vm'
        });
    }
    save() {
        this.SourceService.create(this.newSource, (response) => {
            this.newSource = {};
            this.DialogService.hide();
            this.getData();
        }, (response) => {

        });
    }
    cancel() {
        this.DialogService.hide();
    }
    remove(item) {
        this.sweet.show({
            title: 'Are you shure?',
            text: 'You are about to delete\n' + item.title + '\nfrom intstruments. Really?',
            type: 'info',
            confirmButtonColor: '#2196F3',
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, (inputValue) => {
            if (inputValue) {
                this.SourceService.remove([item.id], (response) => {
                    this.sweet.show({
                        title: 'Success!',
                        type: 'success',
                        text: 'The selected item is now gone!',
                        confirmButtonColor: '#2196F3',
                        closeOnConfirm: true,
                        confirmButtonText: 'OK'
                    });

                    this.getData();
                }, () => {
                    this.sweet.show('Ups...', 'Something went wrong!', 'error');
                });
            }
        });
    }
}

export const SourcesHirarchyComponent = {
    templateUrl: './views/app/components/sources-hirarchy/sources-hirarchy.component.html',
    controller: SourcesHirarchyController,
    controllerAs: 'vm',
    bindings: {}
}