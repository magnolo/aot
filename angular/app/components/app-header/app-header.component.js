class AppHeaderController{
    constructor($sce, $auth){
        'ngInject';

        this.$sce = $sce;
        this.originatorEv;
        this.$auth = $auth;
    }
    openMenu($mdOpenMenu, ev){
      this.originatorEv = ev;
      $mdOpenMenu(ev);
    }
    isAuthenticated(){
      return this.$auth.isAuthenticated();
    }
    logout(){
      this.$auth.logout();
    }
    $onInit(){


    }
}

export const AppHeaderComponent = {
    templateUrl: './views/app/components/app-header/app-header.component.html',
    controller: AppHeaderController,
    controllerAs: 'vm',
    bindings: {}
}
