export class AuthorService{
    constructor(API, ToastService){
        'ngInject';

        //
        this.API = API;
        this.ToastService = ToastService;

    }
    all(success){
      this.API.all('authors').getList().then((data) => {
        success(data)
      });
    }
    create(data, success, error){
      return this.API.all('authors').post(data).then((response) => {
        if(success) success(response);
        return this.ToastService.show('Author successfully created!');
      },(response) => {
        if(error) error(response);
         return this.ToastService.error('Error on saving data!');
      })
    }
    update(id, data, success, error){
      return this.API.one('authors', id).customPUT(data).then((response) => {
        if(success) success(response);
        return this.ToastService.show('Change successfully saved!');
      }, (response) => {
        if(error) error(response);
        return this.ToastService.error('Error on saving data!');
      })
    }
    remove(ids, success, error){
      return this.API.several('authors', ids).remove().then((response) => {
        if(success) success(response);
        return this.ToastService.show('Author successfully deleted!');
      }, (response) => {
        if(error) error(response);
        return this.ToastService.error('Error on deleting items!');
      })
    }
}
