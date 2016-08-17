/**
 * @ngdoc controller
 * @name UploadWizardController
 * @description
 * The controller of the whole wizard. Stepwalking, file uploading, loading all dependencies, validation...
 *
 * @example
  <upload-wizard></upload-wizard>
 */
class UploadWizardController {

    constructor(sweet,$document, $state, $mdStepper, ItemService, CategoryService, TypeService, AuthorService, CountryService, ThemeService, SourceService, LanguageService, GroupService, InstrumentService, YearService, ToastService, Upload) {
        'ngInject';

        this.progress = 0;
        this.top = 64;
        this.duration = 300;
        this.item = {
            language_id: 1,
            groups: [],
            instruments: [],
            paragraphs: [],
            countries: [],
            authors:[],
            themes:[]
        };
        this.isAlternative = true;
        this.isLinear = true;
        this.isUploading = false;

        this.$state = $state;
        this.$document = $document;
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

    /**
     * @ngdoc function
     * @name uploadFile
     * @param {object}  file  The file object from the input field
     * @description
     * Gets called when a file is dropped or selected through the upload button.
     * The upload is started immediately. In case of success, the response is the new file object and gets attached to the main item
     * the wizard goes on to the next state, the type "file" will be set (instead of "url")
     */
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
            this.$document.scrollTop(this.top,this.duration);
        }, (response) => {
            this.isUploading = false;
            this.stepper = this.$mdStepper('upload-wizard');
            this.stepper.error(response.data.message);
            this.ToastService.error(response.data.message);
        }, (evt) => {
            this.progress = parseInt(100.0 * evt.loaded / evt.total);
        })

    }

    /**
     * @ngdoc function
     * @name validateForm
     * @param {object} form The form object that is being field out on the active wizard step
     * @description
     * The form get checked if it validates. Move to the next step in the wizard or show an error instead of the bullet
     */
    validateForm(form) {
        this.stepper = this.$mdStepper('upload-wizard');
        if (form.$valid) {
            this.stepper.clearError();
            this.stepper.next();
            this.$document.scrollTop(this.top,this.duration);
        } else {
            this.stepper.error('Errors in Form!');
        }
    }

    /**
     * @ngdoc function
     * @name previousStep
     * @description
     * Gets back to the previous step from the wizard
     */
    previousStep() {
        this.stepper = this.$mdStepper('upload-wizard');
        this.stepper.back();
        this.$document.scrollTop(this.top,this.duration);
    }

    /**
     * @ngdoc function
     * @name finishWizard
     * @param {object} form The form from the last step of the wizard to validate
     * @description
     * Last validation of the wizard before the data gets sent to the API.
     * A confirm popup gets shown before the actual transfer gets fired.
     * If succeeded, the state gets reset an the wizard starts over
     */
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
                    this.sweet.show({
                        title: 'Success!',
                        type:'success',
                        text: '<b>'+(response.data.item.screen_title || response.data.item.document_title)+'</b><br /> has been saved',
                        html: true
                    });
                    this.$state.reload();
                },() => {
                  this.sweet.show('Ups...', 'Something went wrong! Please check your data.', 'error');
                });
              }

            });

        } else {
            this.stepper.error('Errors in Form!');
        }
    }

    /**
     * @ngdoc function
     * @name addTargetGroup
     * @description
     * Adds a new set to the TargetGroup list, where Theme and TargetGroup gets connected
     */
    addTargetGroup() {
        this.item.groups.push({
            group: {},
            theme: {}
        });
    }

    /**
     * @ngdoc function
     * @name addInstrument
     * @description
     * Adds a new set to the LegalInstruments list, where Theme and LegalInstrument gets connected
     */
    addInstrument() {
        this.item.instruments.push({
            instrument: {},
            theme: {}
        });
    }

    /**
     * @ngdoc function
     * @name addParagraph
     * @description
     * Adds a new set to the Article/Paragraph list, where LegalInstrument and Article/Paragraph gets connected
     */
    addParagraph() {
        this.item.paragraphs.push({
            paragraph: {},
            instrument: {}
        });
    }

    /**
     * @ngdoc function
     * @name addCountry
     * @description
     * Adds a new set to the Countries list, where Theme and Countries gets connected
     */
    addCountry() {
        this.item.countries.push({
            countries: {},
            theme: {}
        });
    }

    /**
     * @ngdoc function
     * @name removeItem
     * @param {array} list A list where an item gets remove by the index value
     * @param {integer} key The index value form the item within the array which gets removed
     * @description
     * Removing an item from any given list specified from a given index value
     *
     */
    removeItem(list, key) {
        list.splice(key, 1);
    }

    /**
     * @ngdoc function
     * @name instrumentsList
     * @description
     * Creating a straight list form just the instruments
     * What a superfluous action to take
     */
    instrumentsList() {
        let list = [];
        angular.forEach(this.item.instruments, function(item) {
            list.push(item.instrument);
        });
        return list;
    }

    /**
     * @ngdoc function
     * @name instrumentsHasChildren
     * @description
     * Check if the chosen Legal Instruments have children or any of them
     */
    instrumentsHasChildren() {
        var found = false;
        angular.forEach(this.item.instruments, function(item) {
            if (!found && angular.isDefined(item.instrument.children)) {
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
