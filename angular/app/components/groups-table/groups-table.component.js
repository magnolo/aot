class GroupsTableController{
    constructor(GroupService, DialogService, sweet){
        'ngInject';

        //
        this.fabOpen = false;
        this.sweet = sweet;
        this.group = {};
        this.groups = [];
        this.selected = [];
        this.GroupService = GroupService;
        this.DialogService = DialogService;
        this.query = {
            order: 'id'
        }
        this.getGroups();
    }

    $onInit(){
    }
    getGroups() {
        this.GroupService.all((response) => {
            this.groups = response;
        })
    }
    inlineUpdate(group, field, value) {
        group[field] = value;
        this.saveGroup(group);

    }
    saveGroup(group) {
        this.GroupService.update(group.id, group);
    }
    newGroup() {
        this.DialogService.fromTemplate('group', {
            controller: () => this,
            controllerAs: 'vm'
        })
    }
    cancel() {
        this.DialogService.hide();
    }
    save() {
        this.GroupService.create(this.group, (response) => {
             this.getGroups();
            this.group = {};
            this.DialogService.hide();
        }, (response) => {

        });
    }
    deleteItems() {
        this.sweet.show({
            title: 'Are you shure?',
            text: 'You are about to delete ' + this.selected.length + ' groups. Really?',
            type: 'info',
            confirmButtonColor: '#2196F3',
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, (inputValue) => {
            if (inputValue) {
                this.GroupService.remove(this.selected.map((item) => { return item.id; }), (response) => {
                    this.sweet.show({
                        title: 'Success!',
                        type: 'success',
                        text: 'The selected items are now gone!',
                        confirmButtonColor: '#2196F3',
                        closeOnConfirm: true,
                        confirmButtonText: 'OK',
                    });
                    this.selected = [];
                    this.getGroups();
                }, () => {
                    this.sweet.show('Ups...', 'Something went wrong!', 'error');
                });
            }
        });
    }
}

export const GroupsTableComponent = {
    templateUrl: './views/app/components/groups-table/groups-table.component.html',
    controller: GroupsTableController,
    controllerAs: 'vm',
    bindings: {}
}
