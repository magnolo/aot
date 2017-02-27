class InstrumentsListController {
    constructor(API, InstrumentService, DialogService, $state, sweet) {
        'ngInject';

        //
        this.API = API;
        this.$state = $state;
        this.InstrumentService = InstrumentService;
        this.DialogService = DialogService;
        this.instruments = [];
        this.instrument = {};
        this.newInstrument = {};
        this.selected = [];
        this.loading = true;
        this.sweet = sweet;
        this.getData();
    }

    $onInit() {}
    getData() {
        if (angular.isDefined(this.$state.params.id)) {
            this.InstrumentService.one(this.$state.params.id, (response) => {
                this.instrument = response.data.instrument;
                this.instruments = this.instrument.children;
                this.loading = false;

            }, (response) => {

            });
        } else {
            this.InstrumentService.all((response) => {
                this.instruments = response;
                this.loading = false;
            }, (response) => {

            });
        }
    }
    inlineUpdate(instrument, field, value) {
        instrument[field] = value;
        this.saveInstrument(instrument);
    }
    saveInstrument(instrument) {
        this.InstrumentService.update(instrument.id, instrument);
    }
    newInstrument() {
        if (angular.isDefined(this.instrument.id)) {
            this.newInstrument.parent_id = this.instrument.id;
        }

        this.DialogService.fromTemplate('instrument', {
            controller: () => this,
            controllerAs: 'vm'
        })
    }
    cancel() {
        this.DialogService.hide();
    }
    save() {
        this.ThemeService.create(this.newInstrument, (response) => {
            this.newInstrument = {};
            this.DialogService.hide();
            this.getData();
        }, (response) => {

        });
    }
    deleteItems() {
        this.sweet.show({
            title: 'Are you shure?',
            text: 'You are about to delete ' + this.selected.length + ' legal instruments. Really?',
            type: 'info',
            confirmButtonColor: '#2196F3',
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, (inputValue) => {
            if (inputValue) {
                this.InstrumentService.remove(this.selected.map((item) => { return item.id; }), (response) => {
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

export const InstrumentsListComponent = {
    templateUrl: './views/app/components/instruments-list/instruments-list.component.html',
    controller: InstrumentsListController,
    controllerAs: 'vm',
    bindings: {}
}