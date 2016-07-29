import {GlobalService} from './services/global.service';
import {YearService} from './services/year.service';
import {InstrumentService} from './services/instrument.service';
import {GroupService} from './services/group.service';
import {LanguageService} from './services/language.service';
import {SourceService} from './services/source.service';
import {ThemeService} from './services/theme.service';
import {TypeService} from './services/type.service';
import {CategoryService} from './services/category.service';
import {AuthorService} from './services/author.service';
import {ItemService} from './services/item.service';
import {APIService} from './services/API.service';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';

angular.module('app.services')
	.service('GlobalService', GlobalService)
	.service('YearService', YearService)
	.service('InstrumentService', InstrumentService)
	.service('GroupService', GroupService)
	.service('LanguageService', LanguageService)
	.service('SourceService', SourceService)
	.service('ThemeService', ThemeService)
	.service('TypeService', TypeService)
	.service('CategoryService', CategoryService)
	.service('AuthorService', AuthorService)
	.service('ItemService', ItemService)
	.service('API', APIService)
	.service('DialogService', DialogService)
	.service('ToastService', ToastService)
