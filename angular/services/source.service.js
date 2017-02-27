export class SourceService {
    constructor(API) {
        'ngInject';

        //
        this.API = API;
    }
    all(success) {
        this.API.all('sources').getList().then((data) => {
            success(data);
        });
    }
    one(id, success) {
        this.API.one('sources', id).get().then((data) => {
            success(data);
        });
    }
    create(data, success, error) {
        return this.API.all('sources').post(data).then((response) => {
            if (success) success(response);
            return this.ToastService.show('Source successfully created!');
        }, (response) => {
            if (error) error(response);
            return this.ToastService.error('Error on saving data!');
        })
    }
    update(id, data, success, error) {
        return this.API.one('sources', id).customPUT(data).then((response) => {
            if (success) success(response);
            return this.ToastService.show('Change successfully saved!');
        }, (response) => {
            if (error) error(response);
            return this.ToastService.error('Error on saving data!');
        })
    }
    remove(ids, success, error) {
        return this.API.several('sources', ids).remove().then((response) => {
            if (success) success(response);
            return this.ToastService.show('Sources(s) successfully deleted!');
        }, (response) => {
            if (error) error(response);
            return this.ToastService.error('Error on deleting items!');
        })
    }
}