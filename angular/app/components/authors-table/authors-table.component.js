class AuthorsTableController{
    constructor(AuthorService, DialogService, sweet) {
        'ngInject';

        //
        this.fabOpen = false;
        this.sweet = sweet;
        this.author = {};
        this.categories = [];
        this.selected = [];
        this.AuthorService = AuthorService;
        this.DialogService = DialogService;
        this.query = {
            order: 'id'
        }
         this.getAuthors();
    }

    $onInit() {
       
    }
    getAuthors() {
        this.AuthorService.all((response) => {
            this.authors = response;
        })
    }
    inlineUpdate(author, field, value) {
        author[field] = value;
        this.saveAuthor(author);

    }
    saveAuthor(author) {
        this.AuthorService.update(author.id, author);
    }
    newAuthor() {
        this.DialogService.fromTemplate('author', {
            controller: () => this,
            controllerAs: 'vm'
        })
    }
    cancel() {
        this.DialogService.hide();
    }
    save() {
        this.AuthorService.create(this.author, (response) => {
             this.getAuthors();
            this.author = {};
            this.DialogService.hide();
        }, (response) => {

        });
    }
    deleteItems() {
        this.sweet.show({
            title: 'Are you shure?',
            text: 'You are about to delete ' + this.selected.length + ' authors. Really?',
            type: 'info',
            confirmButtonColor: '#2196F3',
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, (inputValue) => {
            if (inputValue) {
                this.AuthorService.remove(this.selected.map((item) => { return item.id; }), (response) => {
                    this.sweet.show({
                        title: 'Success!',
                        type: 'success',
                        text: 'The selected items are now gone!',
                        confirmButtonColor: '#2196F3',
                        closeOnConfirm: true,
                        confirmButtonText: 'OK',
                    });
                    this.selected = [];
                    this.getAuthors();
                }, () => {
                    this.sweet.show('Ups...', 'Something went wrong!', 'error');
                });
            }
        });
    }
}

export const AuthorsTableComponent = {
    templateUrl: './views/app/components/authors-table/authors-table.component.html',
    controller: AuthorsTableController,
    controllerAs: 'vm',
    bindings: {}
}
