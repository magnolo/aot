export class SourceService{
  constructor(API){
      'ngInject';

      //
      this.API = API;
  }
  all(success){
    this.API.all('sources').getList().then((data) => {
      success(data);
    });
  }
  one(id, success){
    this.API.one('sources', id).get().then((data) => {
      success(data);
    });
  }
}
