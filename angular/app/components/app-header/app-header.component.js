class AppHeaderController{
    constructor($sce, $state, $auth, UserService){
        'ngInject';

        this.$sce = $sce;
        this.originatorEv;
        this.$auth = $auth;
        this.$state = $state;
        this.UserService = UserService;
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
      this.UserService.clearUser();
      this.$state.go('app.landing');
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
