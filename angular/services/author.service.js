export class AuthorService{
    constructor(API){
        'ngInject';

        //
        this.API = API;

    }
    all(success){
      this.API.all('authors').getList().then((data) => {
        success(data)
      });
    }
}
