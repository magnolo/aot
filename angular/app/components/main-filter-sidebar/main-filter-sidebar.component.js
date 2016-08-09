class MainFilterSidebarController{
    constructor($mdSidenav){
        'ngInject';

        //
        this.$mdSidenav = $mdSidenav;
    }

    $onInit(){
    }
    close(){
      this.$mdSidenav('right').close();
    }
}

export const MainFilterSidebarComponent = {
    templateUrl: './views/app/components/main-filter-sidebar/main-filter-sidebar.component.html',
    controller: MainFilterSidebarController,
    controllerAs: 'vm',
    bindings: {}
}
