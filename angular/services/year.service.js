export class YearService{
  constructor(API){
      'ngInject';

      //
      this.API = API;
  }
  all(success){
    this.API.all('years').getList().then((data) => {
      success(data);
    });
  }
}
