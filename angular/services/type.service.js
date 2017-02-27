export class TypeService {
    constructor(API) {
        'ngInject';

        //
        this.API = API;
    }
    all(success) {
        this.API.all('types').getList().then((data) => {
            success(data);
        });
    }
    one(id, success) {
        this.API.one('types', id).get().then((data) => {
            success(data);
        });
    }
    create(data, success, error) {
        return this.API.all('types').post(data).then((response) => {
            if (success) success(response);
            return this.ToastService.show('Type successfully created!');
        }, (response) => {
            if (error) error(response);
            return this.ToastService.error('Error on saving data!');
        })
    }
    update(id, data, success, error) {
        return this.API.one('types', id).customPUT(data).then((response) => {
            if (success) success(response);
            return this.ToastService.show('Change successfully saved!');
        }, (response) => {
            if (error) error(response);
            return this.ToastService.error('Error on saving data!');
        })
    }
    remove(ids, success, error) {
        return this.API.several('types', ids).remove().then((response) => {
            if (success) success(response);
            return this.ToastService.show('Types successfully deleted!');
        }, (response) => {
            if (error) error(response);
            return this.ToastService.error('Error on deleting items!');
        })
    }
}