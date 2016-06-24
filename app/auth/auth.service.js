(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .factory('authService', authService);

  authService.$inject = ['$firebaseAuth'];

  function authService($firebaseAuth) {
    var auth = $firebaseAuth();

    var service = {
      auth: auth,
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
    };

    return service;

    //////////////

    function register(user) {
      return auth.$createUserWithEmailAndPassword(user.email, user.password);
    }

    function login(user) {
      return auth.$signInWithEmailAndPassword(user.email, user.password);
    }

    function logout() {
      auth.$signOut();
    }

    function isLoggedIn() {
      return auth.$getAuth();
    }
  }
})();
