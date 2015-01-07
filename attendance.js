var casper = require('casper').create();
var githubAccountInfo = require('./config/yourGithubAccountInfo');

casper.start('http://bookstrap.hackreactor.com/auth/login',function() {
  this.mouse.click('.button');
});

casper.then(function() {
  this.fill('form[action="/session"]', {
    'login': githubAccountInfo.username,
    'password': githubAccountInfo.password
  }, true);
});

casper.thenOpen('http://bookstrap.hackreactor.com/attendance', function () {
  this.waitForSelector('button.ready-to-learn', function() {
    this.mouse.click('button.ready-to-learn');
  });
});

casper.run();