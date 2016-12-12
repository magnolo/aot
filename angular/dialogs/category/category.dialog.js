export class CategoryController{
    constructor(DialogService, CategoryService){
        'ngInject';
        cosnole.log(this);
    
    }

    save(){
        //Logic here
        if(angular.isDefined(this.category.id)){
            this.CategoryService.update(this.category.id, this.category, (response) => {

            }, (response) => {

            });
        }
        else{

        }
        this.DialogService.hide();
    }

    cancel(){
        this.DialogService.cancel();
    }
}

