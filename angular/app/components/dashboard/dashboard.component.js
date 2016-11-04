class DashboardController{
    constructor(ItemService){
        'ngInject';

        //
        this.items;
        this.ItemService = ItemService;
        this.ItemService.all((data) => {
          this.items = data;
        });
    }

    $onInit(){
    }
}

export const DashboardComponent = {
    templateUrl: './views/app/components/dashboard/dashboard.component.html',
    controller: DashboardController,
    controllerAs: 'vm',
    bindings: {}
}
