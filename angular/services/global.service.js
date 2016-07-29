export class GlobalService{
  constructor(API){
      'ngInject';

      //
      this.API = API;
  }
  all(success){
    this.API.all('dependencies').getList().then((data) => {
      success(data);
    });
  }
}
