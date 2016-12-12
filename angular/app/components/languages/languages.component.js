class LanguagesController{
    constructor(LanguageService, DialogService, sweet) {
        'ngInject';

        //
        this.fabOpen = false;
        this.sweet = sweet;
        this.language = {};
        this.languages = [];
        this.selected = [];
        this.LanguageService = LanguageService;
        this.DialogService = DialogService;
        this.query = {
            order: 'id'
        }
    }

    $onInit() {
        this.getLanguages();
    }
    getLanguages() {
        this.LanguageService.all((response) => {
            this.languages = response;
        })
    }
    inlineUpdate(language, field, value) {
        language[field] = value;
        this.saveLanguage(language);

    }
    setDefault(language){
        language.default = !language.default;
        this.saveLanguage(language);
    }
    saveLanguage(language) {
        this.LanguageService.update(language.id, language);
    }
    newLanguage() {
        this.DialogService.fromTemplate('language', {
            controller: LanguagesController,
            controllerAs: 'vm'
        })
    }
    cancel() {
        this.DialogService.hide();
    }
    save() {
        this.LanguageService.create(this.language, (response) => {
             this.getLanguages();
            this.language = {};
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
                this.LanguageService.remove(this.selected.map((item) => { return item.id; }), (response) => {
                    this.sweet.show({
                        title: 'Success!',
                        type: 'success',
                        text: 'The selected items are now gone!',
                        confirmButtonColor: '#2196F3',
                        closeOnConfirm: true,
                        confirmButtonText: 'OK',
                    });
                    this.selected = [];
                    this.getLanguages();
                }, () => {
                    this.sweet.show('Ups...', 'Something went wrong!', 'error');
                });
            }
        });
    }
}

export const LanguagesComponent = {
    templateUrl: './views/app/components/languages/languages.component.html',
    controller: LanguagesController,
    controllerAs: 'vm',
    bindings: {}
}
