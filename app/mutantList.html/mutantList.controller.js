(function () {
  'use strict';
  angular
    .module('mutantApp.mutantList')
    .controller('MutantListContoller', MutantListContoller);
  MutantListContoller.$inject=['$firebaseArray'];

  function MutantListContoller($firebaseArray) {
    var vm = this;
    var mutantsRef = firebase.database().ref().child('mutants');
    var textRef = firebase.database().ref().child('text');


    vm.addMutant = addMutant;
    vm.mutants = $firebaseArray(mutantsRef);
    vm.newMuant = new Mutant();
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sentText = sendText;

    function Mutant() {
      this.name = '';
      this.phone = '';
      this.topic = '';
      this.notified = false;
      this.complete = false;
    }
    function addMutant() {
      vm.mutants.$add(vm.newMuant);
      vm.newMutants = new Mutant();
    }
    function deleteMutant(mutant) {
      vm.mutants.$remove(mutant);
    }
    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
    }
    fucntion sendText(mutant) {
      var newText = {
        name: mutant.name,
        phoneNumber: mutant.phone,
        topic: mutant.topic
      };
      textRef.push(newText);
      mutant.notified = true;
      vm.mutants.$save(mutant);
    }
  }
})();
