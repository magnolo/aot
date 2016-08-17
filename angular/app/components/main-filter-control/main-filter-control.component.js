class MainFilterControlController{
    constructor($mdSidenav){
        'ngInject';

        //
        this.$mdSidenav = $mdSidenav;

    }

    $onInit(){
    }
    toggleSidebar(menu_id){
      this.$mdSidenav(menu_id)
          .toggle()
          .then(function () {
          //  console.log("toggle " + menu_id + " is done");
          });
    }
}

export const MainFilterControlComponent = {
    templateUrl: './views/app/components/main-filter-control/main-filter-control.component.html',
    controller: MainFilterControlController,
    controllerAs: 'vm',
    bindings: {}
}
