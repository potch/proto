var page = require("webpage").create();

page.open("http://localhost:3001/test", function (status) {
  if (status == "success") {
    setTimeout(function () {
      page.render('screenshots/fx28.png');
      page.close();
      phantom.exit();
    }, 5000);
  } else {
    console.log("Sorry, the page is not loaded");
  }
});
