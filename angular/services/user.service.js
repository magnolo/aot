export class UserService{
    constructor(){
        'ngInject';

        //
        this.user;
    }
    setUser(user){
      return this.user = user;
    }
    getUser(){
      return this.user;
    }
    clearUser(){
      return this.user = null;
    }
}
