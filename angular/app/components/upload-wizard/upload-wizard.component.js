class UploadWizardController {

    constructor(sweet, $mdStepper, ItemService, CategoryService, TypeService, AuthorService, CountryService, ThemeService, SourceService, LanguageService, GroupService, InstrumentService, YearService, ToastService, Upload) {
        'ngInject';

        //
        this.progress = 0;
        this.item = {
            language_id: 1,
            groups: [],
            instruments: [],
            paragraphs: [],
            countries: []
        };
        this.isAlternative = true;
        this.isLinear = true;
        this.isUploading = false;

        this.$mdStepper = $mdStepper;
        this.sweet = sweet;
        this.Upload = Upload;
        this.ToastService = ToastService;
        this.ItemService = ItemService;

        this.outputCategories = [];
        this.types = [];
        this.authors = [];
        this.themes = [];
        this.sources = [];
        this.languages = [];
        this.groups = [];
        this.instruments = [];
        this.years = [];
        this.counries = [];

        this.CountryService = CountryService;
        this.CountryService.all((data) => {
            this.countries = data;
        });

        this.YearService = YearService;
        this.YearService.all((data) => {
            this.years = data;
        });

        this.InstrumentService = InstrumentService;
        this.InstrumentService.all((data) => {
            this.instruments = data;
        });

        this.GroupService = GroupService;
        this.GroupService.all((data) => {
            this.groups = data;
        });

        this.LanguageService = LanguageService;
        this.LanguageService.all((data) => {
            this.languages = data;
        });

        this.SourceService = SourceService;
        this.SourceService.all((data) => {
            this.sources = data;
        });

        this.ThemeService = ThemeService;
        this.ThemeService.all((data) => {
            this.themes = data;
        }, {
            flattend: true
        });

        this.AuthorService = AuthorService;
        this.AuthorService.all((data) => {
            this.authors = data;
        });

        this.TypeService = TypeService;
        this.TypeService.all((data) => {
            this.types = data;
        });

        this.CategoryService = CategoryService;
        this.CategoryService.all((data) => {
            this.outputCategories = data;
        });
    }

    $onInit() {

    }
    selectType(type_id) {
        this.stepper = this.$mdStepper('upload-wizard');
        this.item.type_id = type_id;
        this.stepper.next();
    }
    uploadFile(file) {
        this.item.type_id = 1;
        this.isUploading = true;
        this.Upload.upload({
            url: 'api/files',
            file: file,
            data: {
                file: file,
                size: file.size
            }
        }).then((response) => {
            this.stepper = this.$mdStepper('upload-wizard');
            this.item.file = response.data.data.file;
            this.item.file_id = this.item.file.id;
            this.item.document_title = this.item.file.original_filename;
            this.progress = 0;
            this.isUploading = false;
            this.stepper.clearError();
            this.stepper.next();
        }, (response) => {
            this.isUploading = false;
            this.stepper = this.$mdStepper('upload-wizard');
            this.stepper.error(response.data.message);
            this.ToastService.error(response.data.message);
        }, (evt) => {
            this.progress = parseInt(100.0 * evt.loaded / evt.total);
        })

    }
    validateForm(form) {
        this.stepper = this.$mdStepper('upload-wizard');
        if (form.$valid) {
            this.stepper.clearError();
            this.stepper.next();
        } else {
            this.stepper.error('Errors in Form!');
        }
    }
    nextStep() {

        this.stepper.next();
    }
    previousStep() {
        this.stepper = this.$mdStepper('upload-wizard');
        this.stepper.back();
    }
    finishWizard(form) {
        this.stepper = this.$mdStepper('upload-wizard');
        if (form.$valid) {
            this.stepper.clearError();
            this.sweet.show({
                title: 'Is everything correct?',
                text: 'Data will be saved to the Database',
                type: 'info',
                confirmButtonColor: '#2196F3',
                showCancelButton: true,
                closeOnConfirm: false,
                showLoaderOnConfirm: true
            }, (inputValue) => {

              if(inputValue){
                this.ItemService.create(this.item, (response) => {
                    this.sweet.show('Success', 'Data has been saved', 'success');
                    this.item = {
                        language_id: 1,
                        groups: [],
                        instruments: [],
                        paragraphs: [],
                        countries: []
                    };
                    this.stepper.goto(0);
                });
              }

            });

        } else {
            this.stepper.error('Errors in Form!');
        }
    }
    addTargetGroup() {
        this.item.groups.push({
            group: {},
            theme: {}
        });
    }
    addInstrument() {
        this.item.instruments.push({
            instrument: {},
            theme: {}
        });
    }
    addParagraph() {
        this.item.paragraphs.push({
            paragraph: {},
            instrument: {}
        });
    }
    addCountry() {
        this.item.countries.push({
            country: {},
            theme: {}
        });
    }
    removeItem(list, key) {
        list.splice(key, 1);
    }
    instrumentsList() {
        let list = [];
        angular.forEach(this.item.instruments, function(item) {
            list.push(item.instrument);
        });
        return list;
    }
    instrumentsHasChildren() {
        var found = false;
        angular.forEach(this.item.instruments, function(item) {
            if (!found) {
                found = item.instrument.children.length ? true : false;
            }
        });
        return found;
    }
}

export const UploadWizardComponent = {
    templateUrl: './views/app/components/upload-wizard/upload-wizard.component.html',
    controller: UploadWizardController,
    controllerAs: 'vm',
    bindings: {}
}
