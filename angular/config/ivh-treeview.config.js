export function IvhTreeviewConfig(ivhTreeviewOptionsProvider){
    'ngInject';

    ivhTreeviewOptionsProvider.set({
    idAttribute: 'id',
    labelAttribute: 'title',
    childrenAttribute: 'children',
    selectedAttribute: 'selected',
    useCheckboxes: true,
    expandToDepth: 0,
    indeterminateAttribute: '__ivhTreeviewIndeterminate',
    expandedAttribute: '__ivhTreeviewExpanded',
    defaultSelectedState: true,
    validate: true,
    twistieExpandedTpl: '<md-icon>expand_less</md-icon>',
    twistieCollapsedTpl: '<md-icon>expand_more</md-icon>',
    twistieLeafTpl: '',
    nodeTpl: [
      '<div class="ivh-treeview-node-content" title="{{trvw.label(node)}}">',
        '<div layout="row" flex>',
          '<span class="ivh-treeview-checkbox-wrapper" ng-if="trvw.useCheckboxes()"',
              ' checkboxer>',
          '</span>',
          '<span class="ivh-treeview-node-label" ivh-treeview-toggle flex>',
            '{{trvw.label(node)}}',
          '</span>',
          '<span ivh-treeview-toggle>',
            '<span class="ivh-treeview-twistie-wrapper" ivh-treeview-twistie></span>',
          '</span>',
        '</div>',
        '<div ivh-treeview-children></div>',
      '</div>'
    ].join('\n')
  });
}
