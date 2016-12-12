export class LanguageService{
  constructor(API, ToastService){
      'ngInject';

      //
      this.API = API;
      this.ToastService = ToastService;
  }
  all(success){
    this.API.all('languages').getList().then((data) => {
      success(data);
    });
  }
  one(id, success){
    this.API.one('languages', id).get().then((data) => {
      success(data);
    });
  }
   create(data, success, error){
      return this.API.all('languages').post(data).then((response) => {
        if(success) success(response);
        return this.ToastService.show('Category successfully created!');
      },(response) => {
        if(error) error(response);
         return this.ToastService.error('Error on saving data!');
      })
    }
    update(id, data, success, error){
      return this.API.one('languages', id).customPUT(data).then((response) => {
        if(success) success(response);
        return this.ToastService.show('Change successfully saved!');
      }, (response) => {
        if(error) error(response);
        return this.ToastService.error('Error on saving data!');
      })
    }
    remove(ids, success, error){
      return this.API.several('languages', ids).remove().then((response) => {
        if(success) success(response);
        return this.ToastService.show('Languages successfully deleted!');
      }, (response) => {
        if(error) error(response);
        return this.ToastService.error('Error on deleting items!');
      })
    }
}
