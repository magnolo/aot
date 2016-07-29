import {TypeService} from './services/type.service';
import {CategoryService} from './services/category.service';
import {AuthorService} from './services/author.service';
import {ItemService} from './services/item.service';
import {APIService} from './services/API.service';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';

angular.module('app.services')
	.service('TypeService', TypeService)
	.service('CategoryService', CategoryService)
	.service('AuthorService', AuthorService)
	.service('ItemService', ItemService)
	.service('API', APIService)
	.service('DialogService', DialogService)
	.service('ToastService', ToastService)
