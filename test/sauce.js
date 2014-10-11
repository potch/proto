var fs = require('fs');
var path = require('path');
var webdriver = require('webdriverio');

var username = process.env.SAUCE_USERNAME;
var accessKey = process.env.SAUCE_ACCESS_KEY;

var environments = [
  {
    browserName: 'firefox',
    version: '18',
    platform: 'OS X 10.9'
  },
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
function capture(list, done) {
  var shots = [];
  function next(url) {
    shots.push({
      caps: environments[idx],
      url: url
    });
    idx++;
    if (idx < environments.length) {
      session(environments[idx], next);
    } else {
      done(shots);
    }
  }
  session(environments[idx], next);
}

capture(environments, function (shots) {
  var html = '';
  shots.forEach(function (shot) {
    html += '<h1>' + shot.caps.browserName;
    if (shot.caps.version) {
      html += ' ' + shot.caps.version;
    }
    html += '</h1>';
    html += '<img src="' + shot.url + '">';
  });
  fs.writeFileSync(path.join('screenshots', 'index.html'), html);
});

function session(caps, cb) {
  console.log(caps);

  caps['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;

  function done(url) {
    cb(url);
  }

  try {

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

    var shotPath = name + '.png';

    client.init()
      .setViewportSize({
        width: 320,
        height: 480
      })
      .url('localhost:3001/test/index.html')
      .saveScreenshot(path.join('screenshots', shotPath))
      .end(function () {
        done(shotPath);
      });

  } catch (e) {

    console.warn('error during test:');
    console.log(e);
    done();

  }
}
