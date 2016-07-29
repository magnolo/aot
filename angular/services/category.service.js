export class CategoryService{
    constructor(API){
        'ngInject';

        this.API = API;

    }
    all(success){
      this.API.all('categories').getList().then((data) => {
        success(data)
      });
    }
}
