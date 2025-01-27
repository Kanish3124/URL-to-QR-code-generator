import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "Type your URL: ",
        name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-img1.png'));

    fs.writeFile("URL1.txt", url, (err) => {
        if (err) throw err;
        console.log("File saved successfully");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

