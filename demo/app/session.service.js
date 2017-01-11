var app = app || {};

app.sessionService = function() {
  this.session = {};
  this.login = function(user) {
    this.session.user = user;
  };
  this.logout = function() {
    delete this.session.user;
  };
};
