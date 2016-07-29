export class ItemService{
    constructor(API){
        'ngInject';

        //
        this.API = API;
    }
    all(success){
      this.API.all('items').getList().then((data) => {
        success(data);
      });
    }
    one(id, success){
      this.API.one('items', id).get().then((data) => {
        success(data);
      });
    }

}
