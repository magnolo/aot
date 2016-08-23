class DocumentsListController{
    constructor($scope,CategoryService, ItemService, FilterService, sweet){
        'ngInject';

        //
        this.categories = [];
        this.items = [];
        this.filterItems = [];
        this.FilterService = FilterService;
        this.sweet = sweet;

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

            angular.forEach(this.FilterService.filters, (filter) =>{
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
                let type = filter.route || filter.thisTree[0].route;
                angular.forEach(item[type], (itemProp) => {
                  if(itemProp.id == filter.id || itemProp.parent_id == filter.id){
                    valid.push(true);
                  }
                });
              }
            });
            return valid.length >= this.FilterService.filters.length ? true : false;
        }


    }
    /**
     * @ngdoc function
     * @name downloadFile
     * @param {object} item The item from which the file to request
     * @description
     *
     *
     */
    // downloadFile(item){
    // //  this.sweet.show('Download File', 'The file is getting prepared for download', 'info');
    //   // this.ItemService.download(item, (response) => {
    //   //   //  this.sweet.show('File downloaded', 'The file is ', 'success');
    //   // }, (response) => {
    //   //     //this.sweet.show('Download error', 'The file could not be reached', 'error');
    //   // });
    // }
    toggleSelectedItem(item){
      return this.selectedItem = this.selectedItem == item ? null : item;
    }

}

export const DocumentsListComponent = {
    templateUrl: './views/app/components/documents-list/documents-list.component.html',
    controller: DocumentsListController,
    controllerAs: 'vm',
    bindings: {}
}
