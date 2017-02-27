class DashboardController {
    constructor(ItemService) {
        'ngInject';

    }

    $onInit() {}
}

export const DashboardComponent = {
    templateUrl: './views/app/components/dashboard/dashboard.component.html',
    controller: DashboardController,
    controllerAs: 'vm',
    bindings: {}
}