class DocumentController{
    constructor($state, ItemService,CategoryService, TypeService, AuthorService, CountryService, ThemeService, SourceService, LanguageService, GroupService, InstrumentService, YearService){
        'ngInject';

        //
        this.document;
        this.$state = $state;
        this.ItemService = ItemService;


        this.ItemService.one(this.$state.params.id, (data) => {
          this.document = data.data.item;

        })

        this.outputCategories = [];
        this.types = [];
        this.authors = [];
        this.themes = [];
        this.sources = [];
        this.languages = [];
        this.groups = [];
        this.instruments = [];
        this.years = [];
        this.countries = [];

        this.CountryService = CountryService;
        this.CountryService.all((data) => {
            this.countries = data;
        });

        this.YearService = YearService;
        this.YearService.all((data) => {
            this.years = data;
        });

        this.InstrumentService = InstrumentService;
        this.InstrumentService.all((data) => {
            this.instruments = data;
        });

        this.GroupService = GroupService;
        this.GroupService.all((data) => {
            this.groups = data;
        });

        this.LanguageService = LanguageService;
        this.LanguageService.all((data) => {
            this.languages = data;
        });

        this.SourceService = SourceService;
        this.SourceService.all((data) => {
            this.sources = data;
        });

        this.ThemeService = ThemeService;
        this.ThemeService.all((data) => {
            this.themes = data;
        }, {
            flattend: true
        });

        this.AuthorService = AuthorService;
        this.AuthorService.all((data) => {
            this.authors = data;
        });

        this.TypeService = TypeService;
        this.TypeService.all((data) => {
            this.types = data;
        });

        this.CategoryService = CategoryService;
        this.CategoryService.all((data) => {
            this.outputCategories = data;
        });
    }

    $onInit(){

    }
}

export const DocumentComponent = {
    templateUrl: './views/app/components/document/document.component.html',
    controller: DocumentController,
    controllerAs: 'vm',
    bindings: {}
}
