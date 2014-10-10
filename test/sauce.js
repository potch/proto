var path = require('path');
var webdriver = require('webdriverio');

var username = process.env.SAUCE_USERNAME;
var accessKey = process.env.SAUCE_ACCESS_KEY;

var environments = [
  {
      browserName: 'firefox',
      version: '28',
      platform: 'OS X 10.9'
  },
  {
      browserName: 'firefox',
      version: '30',
      platform: 'OS X 10.9'
  },
  {
      browserName: 'firefox',
      platform: 'OS X 10.9'
  },
  {
      browserName: 'chrome',
      platform: 'OS X 10.9'
  }
];

var idx = 0;
function next(list) {
  function done() {
    idx++;
    if (idx < environments.length) {
      next();
    }
  }
  session(environments[idx], done);
}

next();

function session(caps, cb) {
  console.log(caps);

  var client = webdriver.remote({
      desiredCapabilities: caps,
      host: 'ondemand.saucelabs.com',
      port: 80,
      user: username,
      key: accessKey,
      logLevel: 'verbose'
  });

  var name = caps.browserName;

  if (caps.version) {
    name += '-' + caps.version;
  } else {
    name += '-latest';
  }

  client.init()
    .setViewportSize({
      width: 320,
      height: 480
    })
    .url('http://potch.github.io/proto/test/index.html')
    .saveScreenshot(path.join('screenshots', name + '.png'))
    .end(cb);
}
