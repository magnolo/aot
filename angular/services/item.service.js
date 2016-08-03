export class ItemService{
    constructor(API, FileSaver, Blob){
        'ngInject';

        //
        this.API = API;
        this.FileSaver = FileSaver;
        this.Blob = Blob;
    }
    all(success){
      this.API.all('items').getList().then((data) => {
        success(data);
      });
    }
    one(id, success){
      this.API.one('items', id).get().then((data) => {
        success(data);
      });
    }
    create(data, success, error){
      this.API.all('items').post(data).then((response) => {
        success(response);
      },(response) => {
        error(response);
      });
    }
    download(item, success, error){
      this.API.one('items', item.id).one('download').get().then((response) => {
        this.FileSaver.saveAs(new this.Blob([response]), item.document_title);
        if(typeof success != "undefined"){
          success(response);
        }
      },(response) => {
        if(typeof error != "undefined"){
          error(response);
        }
      });
    }

}
