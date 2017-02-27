class InstrumentsHirarchyController {
    constructor($scope, API, InstrumentService, DialogService, sweet) {
        'ngInject';

        //
        this.API = API;
        this.InstrumentService = InstrumentService;
        this.DialogService = DialogService;
        this.sweet = sweet;
        this.instruments = [];
        this.newInstrument = {};
        this.$scope = $scope;
        this.getData();
        this.treeOptions = {
            dropped: (event) => {
                let instrument = event.source.nodeScope.$modelValue;
                if (angular.isDefined(event.dest.nodesScope.$parent.$modelValue)) {
                    if (event.dest.nodesScope.$parent.$modelValue.id != instrument.parent_id) {
                        instrument.parent_id = event.dest.nodesScope.$parent.$modelValue.id;
                        this.saveData(instrument);
                    }
                } else {
                    if (instrument.parent_id) {
                        instrument.parent_id = null;
                        this.saveData(instrument);
                    }
                }

            }
        }
    }

    $onInit() {}
    getData() {

        this.InstrumentService.all((response) => {
            this.instruments = response;

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
    saveData(instrument) {
        this.InstrumentService.update(instrument.id, instrument);
    }
    newInstruments(item) {
        if (angular.isDefined(item)) {
            this.instrument = item;
            this.newInstrument.parent_id = item.id;
        } else {
            this.instrument = {};
            this.newInstrument.parent_id = null;
        }
        this.DialogService.fromTemplate('instrument', {
            controller: () => this,
            controllerAs: 'vm'
        });
    }
    save() {
        this.InstrumentService.create(this.newInstrument, (response) => {
            this.newInstrument = {};
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
                this.InstrumentService.remove([item.id], (response) => {
                    this.sweet.show({
                        title: 'Success!',
                        type: 'success',
                        text: 'The selected item is now gone!',
                        confirmButtonColor: '#2196F3',
                        closeOnConfirm: true,
                        confirmButtonText: 'OK',
                    });

                    this.getData();
                }, () => {
                    this.sweet.show('Ups...', 'Something went wrong!', 'error');
                });
            }
        });
    }
}

export const InstrumentsHirarchyComponent = {
    templateUrl: './views/app/components/instruments-hirarchy/instruments-hirarchy.component.html',
    controller: InstrumentsHirarchyController,
    controllerAs: 'vm',
    bindings: {}
}