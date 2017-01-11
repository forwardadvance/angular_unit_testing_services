# Part 4 - Unit testing Angular Services

*TL;DR; A service is a newable function that can be instantiated and injected into other Angular components. We test it by instantiating directly, or by injecting into a function.*

In Angular, a service is a newable function that can be injected into other services and controllers.

A simple session service might look like this:

```
var SessionService = function() {
  this.session = {};
  this.login = function(user) {
    this.session.user = user;
  }
}
```

We can register this with our Angular app like this:

```
angular.module('app')
  .service('sessionService', sessionService)
```

Now we can inject this into any controller, and make use of it like so:

```
angular.module('app')
  .controller('sessionController', function(sessionService) {
    this.login = function(user) {
      sessionService.login(user);
    }
  })
```

## Testing services

Because services are just newable functions, we can test them very simply by instantiating them, and checking they do what we expect. This is the simplest way to test a service.

```
describe('app', () =>{
  describe('sessionService' () => {

    var user, sessionService;
    beforeEach(() => {
      user = {};
      sessionService = new SessionService();
    });

    it('should be able to log in', () => {
      sessionService.login(user);
      expect(sessionService.session.user).toBe(user)
    });
  });
});
```

## Testing services with ngMocks

Because the service is injectable, we can also use ngMocks' `inject` function to instantiate it, something like this:

```
var sessionService
inject((_sessionService_) => {
  sessionService = _sessionService_
});
```

*Note that the underscores around _sessionService_ are automatically removed by the injector prior to injection. This is a convenience for us, that lets us avoid using odd variable names like mySessionService.*

Here's that in context:

```
describe('app', () =>{
  describe('sessionService' () => {
    beforeEach(module('app'));

    var user, sessionService;
    beforeEach(() => {
      user = {};
      inject((_sessionService_) => {
        sessionService = _sessionService_
      });
    });

    it('should be able to log in', () => {
      sessionService.login(user);
      expect(sessionService.session.user).toBe(user)
    })
  })
})
```

## Exercise One

Open up the execise_1 folder. You'll find the login app from above. There are currently no controller tests here. Use any method you like to create controller tests.

Modify the sessionService such that you can only log in if you have a username and email address. Use TDD to create this feature.

## Exercise Two - Pirate Hunt

Make an islandService. Inject it into your app controller. You can call island.dig(x,y) to try to get gold. If you get gold, the pirate's happiness goes up by 10. If not, it goes down by 1.

Write the tests first.

For bonus points, add skeletons.

