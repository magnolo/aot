export class LanguageService{
  constructor(API){
      'ngInject';

      //
      this.API = API;
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
}
