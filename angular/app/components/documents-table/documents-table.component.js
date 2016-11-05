class DocumentsTableController {
    constructor(ItemService, CategoryService, SourceService, sweet) {
        'ngInject';

        //
        this.documents;
        this.categories;
        this.sources;
        this.promise;
        this.fabOpen = false;
        this.selected = [];

        this.filter = {
          show:false,
          options: {
            debounce: 500
          }
        }
        this.filterRelations = {
          show:false
        }
        this.query = {
            order: 'title',
            limit: 15,
            page: 1,
            filter:''
        };

        this.sweet = sweet;
        this.ItemService = ItemService;
        this.CategoryService = CategoryService;
        this.SourceService = SourceService;

        this.CategoryService.all((data) => {
          this.categories = data;
        });

        this.SourceService.all((data) => {
          this.sources = data;
        });


        this.getDocuments = () => {
            this.promise = this.ItemService.get(this.query, (data) => {
                this.documents = data;
            }).$promise;
        }
    }
    $onInit() {
        this.getDocuments();
    }
    inlineUpdate(document, field, value){
      document[field] = value;
      this.saveDocument(document);

    }
    saveDocument(document){
      this.ItemService.update(document.id, document);
    }
    showSearch(){
      this.query.filter = '';
      this.filter.show = true;
      this.filterRelations.show= false;
      this.getDocuments();
    }
    showFilters(){
      this.query.filter = '';
      this.filter.show = false;
      this.filterRelations.show= true;
      this.getDocuments();
    }
    removeFilter(){
      this.query.filter = '';
      this.query.category = null;
      this.query.source = null;
      this.filter.show = false;
      this.filterRelations.show= false;
      this.getDocuments();
    }
    deleteItems(){
      this.sweet.show({
          title: 'Are you shure?',
          text: 'You are about to delete '+ this.selected.length + ' document(s). Really?',
          type: 'info',
          confirmButtonColor: '#2196F3',
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true
      }, (inputValue) => {
        if(inputValue){
          this.ItemService.remove(this.selected.map((item)=> { return item.id;}), (response) => {
              this.sweet.show({
                  title: 'Success!',
                  type:'success',
                  text: 'The selected items are now gone!',
                  confirmButtonColor: '#2196F3',
                  closeOnConfirm: true,
                  confirmButtonText: 'OK',
              });
              this.selected = [];
              this.getDocuments();
          },() => {
            this.sweet.show('Ups...', 'Something went wrong!', 'error');
          });
        }
      });
    }
}

export const DocumentsTableComponent = {
    templateUrl: './views/app/components/documents-table/documents-table.component.html',
    controller: DocumentsTableController,
    controllerAs: 'vm',
    bindings: {}
}
