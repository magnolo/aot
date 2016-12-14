export class GroupService{
  constructor(API, ToastService){
      'ngInject';

      //
      this.API = API;
      this.ToastService = ToastService;
  }
  all(success){
    this.API.all('groups').getList().then((data) => {
      success(data);
    });
  }
  one(id, success){
    this.API.one('groups', id).get().then((data) => {
      success(data);
    });
  }
  create(data, success, error){
      return this.API.all('groups').post(data).then((response) => {
        if(success) success(response);
        return this.ToastService.show('Category successfully created!');
      },(response) => {
        if(error) error(response);
         return this.ToastService.error('Error on saving data!');
      })
    }
    update(id, data, success, error){
      return this.API.one('groups', id).customPUT(data).then((response) => {
        if(success) success(response);
        return this.ToastService.show('Change successfully saved!');
      }, (response) => {
        if(error) error(response);
        return this.ToastService.error('Error on saving data!');
      })
    }
    remove(ids, success, error){
      return this.API.several('groups', ids).remove().then((response) => {
        if(success) success(response);
        return this.ToastService.show('Groups successfully deleted!');
      }, (response) => {
        if(error) error(response);
        return this.ToastService.error('Error on deleting items!');
      })
    }
}
