class MainFilterController {
    constructor(FilterService, ThemeService, SourceService, CountryService, YearService, TypeService, LanguageService, InstrumentService,GroupService, ivhTreeviewMgr) {
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

        this.FilterService = FilterService;
        this.FilterService.filters = [];

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
        this.FilterService.filters = _.indexOf(this.FilterService.filters, ivhNode) == -1 ? _.union(this.FilterService.filters, [ivhNode]) : _.pull(this.FilterService.filters, ivhNode);
        console.log(this.FilterService.filters);
        return this.FilterService.filters;
    }
    clearFilters() {
        this.ivhTreeviewMgr.deselectAll(this.themes);
        this.FilterService.filters = [];
    }
}

export const MainFilterComponent = {
    templateUrl: './views/app/components/main-filter/main-filter.component.html',
    controller: MainFilterController,
    controllerAs: 'vm',
    bindings: {}
}
