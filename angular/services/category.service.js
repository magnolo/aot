export class CategoryService{
    constructor(API){
        'ngInject';

        this.API = API;

    }
    all(success){
      return this.API.all('categories').getList().then((data) => {
        success(data)
      });
    }
}
