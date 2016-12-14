export class ThemeService{
  constructor(API, ToastService){
      'ngInject';

      //
      this.API = API;
      this.ToastService = ToastService;
  }
  all(success, filter){
    this.API.all('themes',{filter}).getList().then((data) => {
      success(data);
    });
  }
  one(id, success){
    this.API.one('themes', id).get().then((data) => {
      success(data);
    });
  }
   create(data, success, error){
      return this.API.all('themes').post(data).then((response) => {
        if(success) success(response);
        return this.ToastService.show('Theme successfully created!');
      },(response) => {
        if(error) error(response);
         return this.ToastService.error('Error on saving data!');
      })
    }
    update(id, data, success, error){
      return this.API.one('themes', id).customPUT(data).then((response) => {
        if(success) success(response);
        return this.ToastService.show('Change successfully saved!');
      }, (response) => {
        if(error) error(response);
        return this.ToastService.error('Error on saving data!');
      })
    }
    remove(ids, success, error){
      return this.API.several('themes', ids).remove().then((response) => {
        if(success) success(response);
        return this.ToastService.show('Themes successfully deleted!');
      }, (response) => {
        if(error) error(response);
        return this.ToastService.error('Error on deleting items!');
      })
    }
}
