class ThemesHirarchyController {
    constructor($scope, API, ThemeService, DialogService, sweet) {
        'ngInject';

        //
        this.API = API;
        this.ThemeService = ThemeService;
        this.DialogService = DialogService;
        this.sweet = sweet;
        this.themes = [];
        this.newTheme = {};
        this.$scope = $scope;
        this.getData();
        this.treeOptions = {
            dropped: (event) => {
                let theme = event.source.nodeScope.$modelValue;
                if (angular.isDefined(event.dest.nodesScope.$parent.$modelValue)) {
                    if (event.dest.nodesScope.$parent.$modelValue.id != theme.parent_id) {
                        theme.parent_id = event.dest.nodesScope.$parent.$modelValue.id;
                        this.saveData(theme);
                    }
                }
                else {
                    if (theme.parent_id) {
                        theme.parent_id = null;
                        this.saveData(theme);
                    }
                }

            }
        }
    }

    $onInit() {
    }
    getData() {

        this.ThemeService.all((response) => {
            this.themes = response;

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
    saveData(theme) {
        this.ThemeService.update(theme.id, theme);
    }
    newThemes(item) {
        if (angular.isDefined(item)) {
            this.theme = item;
            this.newTheme.parent_id = item.id;
        }
        else{
          this.theme = {};
          this.newTheme.parent_id = null;
        }
        this.DialogService.fromTemplate('theme', {
            controller: () => this,
            controllerAs: 'vm'
        });
    }
    save() {
        this.ThemeService.create(this.newTheme, (response) => {
            this.newTheme = {};
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
            text: 'You are about to delete\n' + item.title + '\nfrom themes. Really?',
            type: 'info',
            confirmButtonColor: '#2196F3',
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, (inputValue) => {
            if (inputValue) {
                this.ThemeService.remove([item.id], (response) => {
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

export const ThemesHirarchyComponent = {
    templateUrl: './views/app/components/themes-hirarchy/themes-hirarchy.component.html',
    controller: ThemesHirarchyController,
    controllerAs: 'vm',
    bindings: {}
}
