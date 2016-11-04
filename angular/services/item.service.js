export class ItemService{
    constructor(API, FileSaver, Blob){
        'ngInject';

        //
        this.API = API;
        this.FileSaver = FileSaver;
        this.Blob = Blob;
    }
    all(success){
      return this.API.all('items').getList().then((data) => {
        success(data);
      });
    }
    get(query, success){
      return this.API.all('items').getList(query).then((data) => {
        success(data);
      });
    }
    one(id, success){
      return this.API.one('items', id).get().then((data) => {
        success(data);
      });
    }
    create(data, success, error){
      return this.API.all('items').post(data).then((response) => {
        success(response);
      },(response) => {
        error(response);
      });
    }
    download(item, success, error){
      this.API.one('items', item.id).one('download').get().then((response) => {
        this.FileSaver.saveAs(new this.Blob([response]), item.document_title);
        if(angular.isDefined(success)){
          success(response);
        }
      },(response) => {
        if(angular.isDefined(error)){
          error(response);
        }
      });
    }

}
