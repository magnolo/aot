class ThemeListController {
    constructor(API, ThemeService, DialogService,$state, sweet) {
        'ngInject';

        //
        this.API = API;
        this.$state = $state;
        this.ThemeService = ThemeService;
        this.DialogService = DialogService;
        this.themes = [];
        this.theme = {};
        this.newTheme = {};
        this.selected = [];
        this.loading = true;
        this.sweet = sweet;
        this.getData();
    
    }

    $onInit() {
        
    }
    getData(){
         if (angular.isDefined(this.$state.params.id)) {
            this.ThemeService.one(this.$state.params.id, (response) => {
                this.theme = response.data.theme;
                this.themes = this.theme.children;
                this.loading = false;

            }, (response) => {

            });
        }
        else {
            this.ThemeService.all((response) => {
                this.themes = response;
                this.loading = false;
            }, (response) => {

            });
        }
    }
    inlineUpdate(theme, field, value){
      theme[field] = value;
      this.saveTheme(theme);
    }
    saveTheme(theme){
      this.ThemeService.update(theme.id, theme);
    }
    newThemes() {
        if(angular.isDefined(this.theme.id)){
            this.newTheme.parent_id = this.theme.id;
        }
        this.DialogService.fromTemplate('theme', {
            controller: () => this,
            controllerAs: 'vm'
        })
    }
    cancel() {
        this.DialogService.hide();
    }
    save() {
        this.ThemeService.create(this.newTheme, (response) => {
            this.newTheme = {};
            this.DialogService.hide();
            this.getData();
        }, (response) => {

        });
    }
    deleteItems() {
        this.sweet.show({
            title: 'Are you shure?',
            text: 'You are about to delete ' + this.selected.length + ' themes. Really?',
            type: 'info',
            confirmButtonColor: '#2196F3',
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, (inputValue) => {
            if (inputValue) {
                this.ThemeService.remove(this.selected.map((item) => { return item.id; }), (response) => {
                    this.sweet.show({
                        title: 'Success!',
                        type: 'success',
                        text: 'The selected items are now gone!',
                        confirmButtonColor: '#2196F3',
                        closeOnConfirm: true,
                        confirmButtonText: 'OK',
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

export const ThemeListComponent = {
    templateUrl: './views/app/components/theme-list/theme-list.component.html',
    controller: ThemeListController,
    controllerAs: 'vm',
    bindings: {}
}
