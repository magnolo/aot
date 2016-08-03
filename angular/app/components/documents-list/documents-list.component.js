class DocumentsListController{
    constructor($scope,CategoryService, ItemService, FilterService){
        'ngInject';

        //
        this.categories = [];
        this.items = [];

        this.FilterService = FilterService;

        this.CategoryService = CategoryService;
        this.CategoryService.all((data) => {
          this.categories = data;
        });

        this.ItemService = ItemService;
        this.ItemService.all((data) => {
          this.items = data;
        });

        /**
         * @ngdoc function
         * @name filterItems
         * @param {object} item The item which gets checked if it contains data
         * @description
         * The FilterService provides all the selected filter objects. The item has to contain all of them
         * to be validate an gets shown
         */
        this.filterItems = (item) => {
            if(!this.FilterService.filters.length) return true;
            let valid = [];

            angular.forEach(this.FilterService.filters, (filter, key) =>{
              if(filter.route == "languages"){
                if(item.language_id == filter.id){
                  valid.push(true);
                }
              }
              else if(filter.route == "types"){
                if(item.type_id == filter.id){
                  valid.push(true);
                }
              }
              else if(filter.route == "sources"){
                if(item.source_id == filter.id){
                  valid.push(true);
                }
              }
              else{
                angular.forEach(item[filter.route], (itemProp, k) => {
                  if(itemProp.id == filter.id){
                    valid.push(true);
                  }
                });
              }
            });
            return valid.length >= this.FilterService.filters.length ? true : false;
        }
    }

}

export const DocumentsListComponent = {
    templateUrl: './views/app/components/documents-list/documents-list.component.html',
    controller: DocumentsListController,
    controllerAs: 'vm',
    bindings: {}
}
