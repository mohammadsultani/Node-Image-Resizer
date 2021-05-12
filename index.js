const sharp = require("sharp");
const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminMozjpeg = require("imagemin-mozjpeg");

sharp("DSC_2934.jpg")
  // .metadata()
  // .then((res) => console.log(res));
  
  .withMetadata()
  .resize(500,400)
  .jpeg({
    mozjpeg: true,
    force: true,
  })
  .toFile("ME.jpeg")
  .then((res) => {
    console.log('done')
    imagemin(["ME.jpeg"], {
      destination: "./",
      plugins: [imageminJpegtran(), imageminMozjpeg()],
    });
  });
