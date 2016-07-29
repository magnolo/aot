export class GroupService{
  constructor(API){
      'ngInject';

      //
      this.API = API;
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
}
