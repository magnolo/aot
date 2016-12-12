class DocumentController {
    constructor($state, ItemService, CategoryService, TypeService, AuthorService, CountryService, ThemeService, SourceService, LanguageService, GroupService, InstrumentService, YearService) {
        'ngInject';

        //
        this.document = {};
        this.item;
        this.$state = $state;
        this.ItemService = ItemService;


        this.ItemService.one(this.$state.params.id, (data) => {
            this.item = data.data.item;
            this.setItem();

            this.ThemeService = ThemeService;
            this.ThemeService.all((data) => {
                this.themes = data;
                this.setRelation('themes');

                this.CountryService = CountryService;
                this.CountryService.all((data) => {
                    this.countries = data;
                    this.setThemeRelation('countries', 'countries', true);
                });

                this.YearService = YearService;
                this.YearService.all((data) => {
                    this.years = data;
                    this.setRelation('years');
                });

                this.InstrumentService = InstrumentService;
                this.InstrumentService.all((data) => {
                    this.instruments = data;
                    this.setThemeRelation('instruments', 'instrument');
                });

                this.GroupService = GroupService;
                this.GroupService.all((data) => {
                    this.groups = data;
                    this.setThemeRelation('groups', 'group');
                });

                this.LanguageService = LanguageService;
                this.LanguageService.all((data) => {
                    this.languages = data;
                });

                this.SourceService = SourceService;
                this.SourceService.all((data) => {
                    this.sources = data;
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
            }, {
                    flattend: true
                });


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


    }

    $onInit() {

    }

    setItem() {
        for (var property in this.item) {
            if (this.item.hasOwnProperty(property)) {
                if (!Array.isArray(this.item[property])) {
                    this.document[property] = this.item[property];
                }
            }
        }
        this.document.authors = this.item.authors;
    }
    setRelation(label) {
        this.document[label] = [];
        this.item[label].forEach((item) => {
            this.document[label].push(this.getItem(item.id, this[label]))
        });

    }
    getItem(id, list) {
        let found = null;
        list.forEach((entry) => {
            if (entry.id == id) {
                found = entry;
            }
            if (found == null)
                if (angular.isDefined(entry.children)) {
                    if (entry.children.length) {
                        let sub = this.getItem(id, entry.children);
                        if (sub) {
                            found = sub;
                        }
                    }

                }
        });
        return found;
    }
    setThemeRelation(label, name, multiple) {
        this.document[label] = [];
        if (multiple) {
            let grouped = {};
            this.item[label].forEach((item) => {
                if(!angular.isDefined(grouped[item.pivot.theme_id])){
                    grouped[item.pivot.theme_id] = [];
                }
                grouped[item.pivot.theme_id].push(this.getItem(item.id, this[label]))


            });
            angular.forEach(grouped, (group, key) => {
                let entry = {};
                entry[name] = group
                entry.theme = this.getItem(key, this.themes);
                this.document[label].push(entry);
            })
            console.log(this.document);
        }
        else {
            this.item[label].forEach((item) => {
                let entry = {};
                entry[name] = this.getItem(item.id, this[label]);
                entry.theme = this.getItem(item.pivot.theme_id, this.themes);
                this.document[label].push(entry);
            });
        }


    }

    /**
     * @ngdoc function
     * @name addTargetGroup
     * @description
     * Adds a new set to the TargetGroup list, where Theme and TargetGroup gets connected
     */
    addTargetGroup() {
        this.item.groups.push({
            group: {},
            theme: {}
        });
    }

    /**
     * @ngdoc function
     * @name addInstrument
     * @description
     * Adds a new set to the LegalInstruments list, where Theme and LegalInstrument gets connected
     */
    addInstrument() {
        this.item.instruments.push({
            instrument: {},
            theme: {}
        });
    }

    /**
     * @ngdoc function
     * @name addParagraph
     * @description
     * Adds a new set to the Article/Paragraph list, where LegalInstrument and Article/Paragraph gets connected
     */
    addParagraph() {
        this.item.paragraphs.push({
            paragraph: {},
            instrument: {}
        });
    }

    /**
     * @ngdoc function
     * @name addCountry
     * @description
     * Adds a new set to the Countries list, where Theme and Countries gets connected
     */
    addCountry() {
        this.item.countries.push({
            countries: {},
            theme: {}
        });
    }

    /**
     * @ngdoc function
     * @name removeItem
     * @param {array} list A list where an item gets remove by the index value
     * @param {integer} key The index value form the item within the array which gets removed
     * @description
     * Removing an item from any given list specified from a given index value
     *
     */
    removeItem(list, key) {
        list.splice(key, 1);
    }

    /**
     * @ngdoc function
     * @name instrumentsList
     * @description
     * Creating a straight list form just the instruments
     * What a superfluous action to take
     */
    instrumentsList() {
        let list = [];
        angular.forEach(this.item.instruments, function (item) {
            list.push(item.instrument);
        });
        return list;
    }

    /**
     * @ngdoc function
     * @name instrumentsHasChildren
     * @description
     * Check if the chosen Legal Instruments have children or any of them
     */
    instrumentsHasChildren() {
        var found = false;
        angular.forEach(this.item.instruments, function (item) {
            if (!found && angular.isDefined(item.instrument.children)) {
                found = item.instrument.children.length ? true : false;
            }
        });
        return found;
    }
}

export const DocumentComponent = {
    templateUrl: './views/app/components/document/document.component.html',
    controller: DocumentController,
    controllerAs: 'vm',
    bindings: {}
}
