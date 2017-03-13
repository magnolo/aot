import {AutocompleteListInlineComponent} from './app/components/autocomplete-list-inline/autocomplete-list-inline.component';
import {AutocompleteListComponent} from './app/components/autocomplete-list/autocomplete-list.component';
import {TypesTableComponent} from './app/components/types-table/types-table.component';
import {SourcesHirarchyComponent} from './app/components/sources-hirarchy/sources-hirarchy.component';
import {SourcesListComponent} from './app/components/sources-list/sources-list.component';
import {InstrumentsHirarchyComponent} from './app/components/instruments-hirarchy/instruments-hirarchy.component';
import {InstrumentsListComponent} from './app/components/instruments-list/instruments-list.component';
import {AuthorsTableComponent} from './app/components/authors-table/authors-table.component';
import {GroupsTableComponent} from './app/components/groups-table/groups-table.component';
import {ThemesHirarchyComponent} from './app/components/themes-hirarchy/themes-hirarchy.component';
import {ThemeListComponent} from './app/components/theme-list/theme-list.component';
import {AdminHeaderComponent} from './app/components/admin-header/admin-header.component';
import {LanguagesComponent} from './app/components/languages/languages.component';
import {CategoriesComponent} from './app/components/categories/categories.component';
import {DocumentComponent} from './app/components/document/document.component';
import {DocumentsTableComponent} from './app/components/documents-table/documents-table.component';
import {DashboardComponent} from './app/components/dashboard/dashboard.component';
import {AutocompleteMultipleComponent} from './app/components/autocomplete-multiple/autocomplete-multiple.component';
import {MainFilterControlComponent} from './app/components/main-filter-control/main-filter-control.component';
import {MainFilterSidebarComponent} from './app/components/main-filter-sidebar/main-filter-sidebar.component';
import {DocumentsListComponent} from './app/components/documents-list/documents-list.component';
import {MainFilterComponent} from './app/components/main-filter/main-filter.component';
import {UploadWizardComponent} from './app/components/upload-wizard/upload-wizard.component';
import {AppHeaderComponent} from './app/components/app-header/app-header.component';
import {AppViewComponent} from './app/components/app-view/app-view.component';
import {AppShellComponent} from './app/components/app-shell/app-shell.component';
import {ResetPasswordComponent} from './app/components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './app/components/forgot-password/forgot-password.component';
import {LoginFormComponent} from './app/components/login-form/login-form.component';
import {RegisterFormComponent} from './app/components/register-form/register-form.component';

angular.module('app.components')
	.component('autocompleteListInline', AutocompleteListInlineComponent)
	.component('autocompleteList', AutocompleteListComponent)
	.component('typesTable', TypesTableComponent)
	.component('sourcesHirarchy', SourcesHirarchyComponent)
	.component('sourcesList', SourcesListComponent)
	.component('instrumentsHirarchy', InstrumentsHirarchyComponent)
	.component('instrumentsList', InstrumentsListComponent)
	.component('authorsTable', AuthorsTableComponent)
	.component('groupsTable', GroupsTableComponent)
	.component('themesHirarchy', ThemesHirarchyComponent)
	.component('themeList', ThemeListComponent)
	.component('adminHeader', AdminHeaderComponent)
	.component('languages', LanguagesComponent)
	.component('categories', CategoriesComponent)
	.component('document', DocumentComponent)

	.component('documentsTable', DocumentsTableComponent)
	.component('dashboard', DashboardComponent)
	.component('autocompleteMultiple', AutocompleteMultipleComponent)
	.component('mainFilterControl', MainFilterControlComponent)
	.component('mainFilterSidebar', MainFilterSidebarComponent)
	.component('documentsList', DocumentsListComponent)
	.component('mainFilter', MainFilterComponent)
	.component('uploadWizard', UploadWizardComponent)
	.component('appHeader', AppHeaderComponent)
	.component('appView', AppViewComponent)
	.component('appShell', AppShellComponent)
	.component('resetPassword', ResetPasswordComponent)
	.component('forgotPassword', ForgotPasswordComponent)
	.component('loginForm', LoginFormComponent)
	.component('registerForm', RegisterFormComponent);
