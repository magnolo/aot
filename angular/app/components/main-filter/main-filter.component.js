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

    changeSelection(item, isSelected, tree) {
        item.thisTree = tree;
        this.FilterService.filters = _.indexOf(this.FilterService.filters, item) == -1 ? _.union(this.FilterService.filters, [item]) : _.pull(this.FilterService.filters, item);
        return this.FilterService.filters;
    }
    removeFilter(item){
      this.ivhTreeviewMgr.deselect(item.thisTree, item);
    }
    clearFilters() {
        this.ivhTreeviewMgr.deselectAll(this.themes);
        this.ivhTreeviewMgr.deselectAll(this.sources);
        this.ivhTreeviewMgr.deselectAll(this.countries);
        this.ivhTreeviewMgr.deselectAll(this.types);
        this.ivhTreeviewMgr.deselectAll(this.years);
        this.ivhTreeviewMgr.deselectAll(this.instruments);
        this.ivhTreeviewMgr.deselectAll(this.groups);
        this.FilterService.filters = [];
    }
}

export const MainFilterComponent = {
    templateUrl: './views/app/components/main-filter/main-filter.component.html',
    controller: MainFilterController,
    controllerAs: 'vm',
    bindings: {}
}
