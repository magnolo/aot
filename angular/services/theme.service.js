export class ThemeService{
  constructor(API){
      'ngInject';

      //
      this.API = API;
  }
  all(success){
    this.API.all('themes').getList().then((data) => {
      success(data);
    });
  }
  one(id, success){
    this.API.one('theme', id).get().then((data) => {
      success(data);
    });
  }
}
