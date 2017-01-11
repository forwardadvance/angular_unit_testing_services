
describe('sessionService without ngMocks', () => {
  var sessionService;
  beforeEach(() => {
    sessionService = new app.sessionService();
  });

  it('should have a session', () => {
    expect(sessionService.session).toBeDefined();
  });

  describe('logging in', () => {
    var user ;
    beforeEach( () => {
      user = {};
    });

    it('should be able to log in', () => {
      sessionService.login(user);
      expect(sessionService.session.user).toBe(user);
    });
  });
});


describe('sessionService with ngMocks', () => {
  beforeEach(module('app'));

  var sessionService;
  beforeEach(inject(function(_sessionService_){
    sessionService = _sessionService_;
  }));

  it('should have a session', () => {
    expect(sessionService.session).toBeDefined();
  });

  describe('logging in', () => {
    var user ;
    beforeEach( () => {
      user = {};
    });

    it('should be able to log in', () => {
      sessionService.login(user);
      expect(sessionService.session.user).toBe(user);
    });
  });
});
