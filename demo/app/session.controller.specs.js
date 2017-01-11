describe('sessionController', () => {
  beforeEach(module('app'));

  var sessionController;
  beforeEach(inject(function($controller){
    sessionController = $controller('sessionController');
  }));

})
