export class CountryService{
  constructor(API){
      'ngInject';

      //
      this.API = API;
  }
  all(success, query){
    this.API.all('countries').getList(query).then((data) => {
      success(data);
    });
  }
  one(id, success){
    this.API.one('countries', id).get().then((data) => {
      success(data);
    });
  }
}
