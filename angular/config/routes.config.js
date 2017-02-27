export function RoutesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    let getView = (viewName) => {
        return `./views/app/pages/${viewName}/${viewName}.page.html`;
    };
    let getAdminView = (viewName) => {
        return `./views/app/pages/admin/${viewName}/${viewName}.page.html`;
    };

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            abstract: true,
            data: {}, //{auth: true} would require JWT auth
            views: {
                header: {
                    templateUrl: getView('header')
                },
                footer: {
                    templateUrl: getView('footer')
                },
                main: {}
            }
        })
        .state('app.landing', {
            url: '/',
            views: {
                'main@': {
                    templateUrl: getView('landing')
                }
            }
        })
        .state('app.login', {
            url: '/login',
            views: {
                'main@': {
                    templateUrl: getView('login')
                }
            }
        })
        .state('app.register', {
            url: '/register',
            views: {
                'main@': {
                    templateUrl: getView('register')
                }
            }
        })
        .state('app.forgot_password', {
            url: '/forgot-password',
            views: {
                'main@': {
                    templateUrl: getView('forgot-password')
                }
            }
        })
        .state('app.reset_password', {
            url: '/reset-password/:email/:token',
            views: {
                'main@': {
                    templateUrl: getView('reset-password')
                }
            }
        })
        .state('app.upload-wizard', {
            url: '/add-entry',
            data: {
                auth: true
            },
            views: {
                'main@': {
                    templateUrl: getView('upload-wizard')
                }
            }
        })
        .state('app.admin', {
            abstract: true,
            data: {
                auth: true
            },
            views: {
                'subheader@': {
                    templateUrl: getAdminView('header')
                }
            },
            url: '/admin'

        })
        .state('app.admin.dashboard', {
            url: '/dashboard',
            views: {
                'main@': {
                    templateUrl: getAdminView('dashboard')
                }
            }
        })
        .state('app.admin.documents', {
            url: '/documents',
            views: {
                'main@': {
                    templateUrl: getAdminView('items')
                }
            }
        })
        .state('app.admin.documents.details', {
            url: '/{id}',
            views: {
                'main@': {
                    templateUrl: getAdminView('item')
                }
            }
        })
        .state('app.admin.categories', {
            url: '/categories',
            views: {
                'main@': {
                    templateUrl: getAdminView('categories')
                }
            }
        })
        .state('app.admin.groups', {
            url: '/groups',
            views: {
                'main@': {
                    templateUrl: getAdminView('groups')
                }
            }
        })
        .state('app.admin.authors', {
            url: '/authors',
            views: {
                'main@': {
                    templateUrl: getAdminView('authors')
                }
            }
        })
        .state('app.admin.languages', {
            url: '/languages',
            views: {
                'main@': {
                    templateUrl: getAdminView('languages')
                }
            }
        })
        .state('app.admin.themes', {
            url: '/themes',
            views: {
                'main@': {
                    templateUrl: getAdminView('themes')
                }
            }
        })
        .state('app.admin.themes.hirarchy', {
            url: '/hirarchy',
            views: {
                'main@': {
                    templateUrl: getAdminView('themes-hirarchy')
                }
            }
        })
        .state('app.admin.themes.details', {
            url: '/:id',
            views: {
                'main@': {
                    templateUrl: getAdminView('themes')
                }
            }
        })
        .state('app.admin.instruments', {
            url: '/instruments',
            views: {
                'main@': {
                    templateUrl: getAdminView('instruments')
                }
            }
        })
        .state('app.admin.instruments.hirarchy', {
            url: '/hirarchy',
            views: {
                'main@': {
                    templateUrl: getAdminView('instruments-hirarchy')
                }
            }
        })
        .state('app.admin.instruments.details', {
            url: '/:id',
            views: {
                'main@': {
                    templateUrl: getAdminView('instruments')
                }
            }
        })

    .state('app.admin.sources', {
            url: '/sources',
            views: {
                'main@': {
                    templateUrl: getAdminView('sources')
                }
            }
        })
        .state('app.admin.sources.hirarchy', {
            url: '/hirarchy',
            views: {
                'main@': {
                    templateUrl: getAdminView('sources-hirarchy')
                }
            }
        })
        .state('app.admin.sources.details', {
            url: '/:id',
            views: {
                'main@': {
                    templateUrl: getAdminView('sources')
                }
            }
        });
}