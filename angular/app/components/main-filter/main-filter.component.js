class MainFilterController {
    constructor(ThemeService, SourceService, CountryService, YearService, TypeService, LanguageService, InstrumentService,GroupService, ivhTreeviewMgr) {
        'ngInject';

        //
        this.themes = [];
        this.sources = [];
        this.countries = [];
        this.years = [];
        this.types = [];
        this.languages = [];
        this.instruments = [];
        this.groups = [];

        this.filters = [];

        this.ivhTreeviewMgr = ivhTreeviewMgr;

        this.GroupService = GroupService;
        this.GroupService.all((data) => {
            this.groups = data;
        });

        this.InstrumentService = InstrumentService;
        this.InstrumentService.all((data) => {
            this.instruments = data;
        });

        this.LanguageService = LanguageService;
        this.LanguageService.all((data) => {
            this.languages = data;
        });

        this.TypeService = TypeService;
        this.TypeService.all((data) => {
            this.types = data;
        });

        this.YearService = YearService;
        this.YearService.all((data) => {
            this.years = data;
        });

        this.CountryService = CountryService;
        this.CountryService.all((data) => {
            this.countries = data;
        });

        this.SourceService = SourceService;
        this.SourceService.all((data) => {
            this.sources = data;
        });

        this.ThemeService = ThemeService;
        this.ThemeService.all((data) => {
            this.themes = data;
        });

    }

    $onInit() {}
    changeSelection(ivhNode, ivhIsSelected, ivhTree) {
        this.filters = _.indexOf(this.filters, ivhNode) == -1 ? _.union(this.filters, [ivhNode]) : _.pull(this.filters, ivhNode);
        console.log(ivhNode);
        return this.filters;
    }
    clearFilters() {
        this.ivhTreeviewMgr.deselectAll(this.themes);
        this.filters = [];
    }
}

export const MainFilterComponent = {
    templateUrl: './views/app/components/main-filter/main-filter.component.html',
    controller: MainFilterController,
    controllerAs: 'vm',
    bindings: {}
}
