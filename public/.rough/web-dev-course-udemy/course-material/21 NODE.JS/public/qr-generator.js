import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs';


 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

inquirer
  .prompt([
    {
      "message": "Enter a URL or name to generate equivalent QR code:",
      "name": "user_reply",
    }
  ])
  .then((answers) => {
    console.log(answers.user_reply);
    var qr_svg = qr.image(`${answers.user_reply}`, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream(`${answers.user_reply}.svg`));
  })
  .catch((e) => {
    if (e.isTtyError) {
      console.log(e);
    } else {
      console.log(e);
    }
  });