export class CategoryService{
    constructor(API, ToastService){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;

    }
    all(success){
      return this.API.all('categories').getList().then((data) => {
        success(data)
      });
    }
    create(data, success, error){
      return this.API.all('categories').post(data).then((response) => {
        if(success) success(response);
        return this.ToastService.show('Category successfully created!');
      },(response) => {
        if(error) error(response);
         return this.ToastService.error('Error on saving data!');
      })
    }
    update(id, data, success, error){
      return this.API.one('categories', id).customPUT(data).then((response) => {
        if(success) success(response);
        return this.ToastService.show('Change successfully saved!');
      }, (response) => {
        if(error) error(response);
        return this.ToastService.error('Error on saving data!');
      })
    }
    remove(ids, success, error){
      return this.API.several('categories', ids).remove().then((response) => {
        if(success) success(response);
        return this.ToastService.show('Categories successfully deleted!');
      }, (response) => {
        if(error) error(response);
        return this.ToastService.error('Error on deleting items!');
      })
    }
}
