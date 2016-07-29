export class TypeService{
    constructor(API){
        'ngInject';

        //
        this.API = API;
    }
    all(success){
      this.API.all('types').getList().then((data) => {
        success(data);
      });
    }
}
