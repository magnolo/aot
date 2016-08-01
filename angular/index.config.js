import {VAccordionConfig} from './config/vAccordion.config';
import {IvhTreeviewConfig} from './config/ivh-treeview.config';
import {RoutesConfig} from './config/routes.config';
import {LoadingBarConfig} from './config/loading_bar.config';
import {ThemeConfig} from './config/theme.config';
import {SatellizerConfig} from './config/satellizer.config';

angular.module('app.config')
	.config(VAccordionConfig)
	.config(IvhTreeviewConfig)
    .config(RoutesConfig)
	.config(LoadingBarConfig)
	.config(ThemeConfig)
	.config(SatellizerConfig);
