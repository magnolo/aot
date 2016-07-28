class UploadWizardController {

    constructor($mdStepper) {
        'ngInject';

        //
        this.item = {};
        this.isAlternative = true;
        this.isLinear = true;

        this.$mdStepper = $mdStepper;

        this.outputCategories = [{
            id: 1,
            title: 'Cat_1'
        }, {
            id: 2,
            title: 'Cat_2'
        }];
    }

    $onInit() {}
    selectType(type_id) {
        this.stepper = this.$mdStepper('upload-wizard');
        this.item.type_id = type_id;
        this.stepper.next();
    }
    validateForm(form){
        this.stepper = this.$mdStepper('upload-wizard');
        if(form.$valid){
            this.stepper.clearError();
            this.stepper.next();
        }
        else{
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
