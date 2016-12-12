export class ItemService{
    constructor(API, FileSaver, Blob, ToastService){
        'ngInject';

        this.API = API;
        this.FileSaver = FileSaver;
        this.Blob = Blob;
        this.ToastService = ToastService;
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
    update(id, data, success, error, full){
      let params;
 
      if(full){
        params = {
          full:full
        }
      }
      return this.API.one('items', id).customPUT(data,undefined, params).then((response) => {
        if(success) success(response);
        return this.ToastService.show('Change successfully saved!');
      }, (response) => {
        if(error) error(response);
        return this.ToastService.error('Error on saving data!');
      })
    }
    remove(ids, success, error){
   
      return this.API.several('items', ids).remove().then((response) => {
        if(success) success(response);
        return this.ToastService.show('Items successfully deleted!');
      }, (response) => {
        if(error) error(response);
        return this.ToastService.error('Error on deleting items!');
      })
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
