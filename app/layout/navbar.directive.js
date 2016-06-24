(function() {
  'use strict';

  angular
    .module('mutantApp.layout')
    .directive('xtNavbar', xtNavbar);

  function xtNavbar() {
    return {
      templateUrl: 'app/layout/navbar.html',
      restrict: 'E',
      controller: NavbarController,
      controllerAs: 'vm',
      scope: {},
    };
  }

  NavbarController.$inject = ['$state', 'authService'];

  function NavbarController($state, authService) {
    var vm = this;

    vm.logout = logout;
    vm.isLoggedIn = authService.isLoggedIn;

    function logout() {
      authService.logout();
      $state.go('home');
    }
  }
})();
