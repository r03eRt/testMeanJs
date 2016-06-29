(function () {
  'use strict';

  angular
    .module('costumers')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Costumers',
      state: 'costumers',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'costumers', {
      title: 'List Costumers',
      state: 'costumers.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'costumers', {
      title: 'Create Costumer',
      state: 'costumers.create',
      roles: ['user']
    });
  }
}());
