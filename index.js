// const sharp = require("sharp");
// const numbers = [...Array(70).keys()];
// numbers.map((e) => {
//   sharp(`images/foods${e+1}.jpeg`)
//     .resize(300, 200)
//     .toFile(`resizedImages/foods${e+1}.jpeg`, function (err) {
//       // output.jpg is a 300 pixels wide and 200 pixels high image
//       // containing a scaled and cropped version of input.jpg
//     });
// });
const fs = require('fs')
try {
  const stats = fs.statSync('images/foods1.jpeg');
  console.log(stats.size / 1024)
} catch (err) {
  console.log(err);
}