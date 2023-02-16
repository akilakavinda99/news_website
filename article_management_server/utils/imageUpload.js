const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dicjf8jjn",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function imageUpload(imageBase64) {
  try {
    const imageUploaded = await cloudinary.uploader.upload(
      imageBase64,
      {
        folder: "akila",
      },
      function (error, result) {
        // console.log(result, error);
      }
    );
    //   console.log(imageUploaded);
    return imageUploaded.url;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  imageUpload,
};
