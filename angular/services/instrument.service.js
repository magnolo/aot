export class InstrumentService{
  constructor(API){
      'ngInject';

      //
      this.API = API;
  }
  all(success){
    this.API.all('instruments').getList().then((data) => {
      success(data);
    });
  }
  one(id, success){
    this.API.one('instruments', id).get().then((data) => {
      success(data);
    });
  }
}
