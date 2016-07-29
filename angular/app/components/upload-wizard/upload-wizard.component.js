class UploadWizardController {

    constructor($mdStepper, CategoryService,TypeService, ToastService,  Upload) {
        'ngInject';

        //
        this.progress = 0;
        this.item = {};
        this.isAlternative = true;
        this.isLinear = true;
        this.isUploading = false;

        this.$mdStepper = $mdStepper;
        this.Upload = Upload;
        this.outputCategories = [];
        this.types = [];
        this.ToastService = ToastService;
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
            file:file,
            data: {
                file: file,
                size:file.size
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
        }, (response)  => {
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
}

export const UploadWizardComponent = {
    templateUrl: './views/app/components/upload-wizard/upload-wizard.component.html',
    controller: UploadWizardController,
    controllerAs: 'vm',
    bindings: {}
}
