var app = app || {}

app.sessionController = function(sessionService) {
  this.user = {}
  this.session = sessionService.session;
  this.login = (user) => {
    sessionService.login(user);
  }
  this.logout = () => {
    sessionService.logout()
  }
};
