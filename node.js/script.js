console.log("hello");

const figlet = require("figlet");

figlet("Royal Chalengers Bangalore", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
