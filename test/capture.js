var page = require("webpage").create();

var tries = 0;

function tryLoad(url, cb) {
  function tryAgain() {
    tries++;
    page.open(url, function (status) {
      if (status === 'success') {
        cb();
      } else {
        console.log('failed attempt ' + tries);
        if (tries > 5) {
          console.log('loading failed');
          phantom.exit(1);
        } else {
          setTimeout(tryAgain, 1000);
        }
      }
    });
  }
  tryAgain();
}

tryLoad("http://localhost:3001/test", function () {
  setTimeout(function () {
    page.render('screenshots/fx28.png');
    page.close();
    phantom.exit();
  }, 2000);
});
