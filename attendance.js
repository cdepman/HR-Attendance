var casper = require('casper').create();
var accountInfo = require('./config/accountInfo');

console.log(accountInfo.username);
casper.start('http://bookstrap.hackreactor.com/auth/login',function() {
  this.click('.button');
});

casper.then(function() {
  this.fill('form[action="/session"]', {
    'login': atob(accountInfo.username),
    'password': atob(accountInfo.password)
  }, true);
});

casper.waitForUrl('http://bookstrap.hackreactor.com/', function() {
  console.log('wait for url passed');
  this.thenOpen('http://bookstrap.hackreactor.com/attendance', function () {
      this.waitForSelector('button.ready-to-learn', function() {
        console.log('wait for selector passed');
        if (this.exists('button.ready-to-learn')) {
          console.log('clicked button');
          this.click('button.ready-to-learn');
        }
      }, function() {});
  });
}, function() {});

casper.run();