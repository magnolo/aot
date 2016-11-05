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
