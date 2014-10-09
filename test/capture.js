var page = require("webpage").create();

page.open("http://localhost:3001/test", function (status) {
  if (status == "success") {
    setTimeout(function () {
      page.render('screenshots/fx28.png');
      page.close();
      phantom.exit();
    }, 2000);
  } else {
    console.log("Sorry, the page is not loaded");
    console.error(status);
    phantom.exit(1);
  }
});
