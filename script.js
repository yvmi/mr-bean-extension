const imgUrl =
  "https://banner2.cleanpng.com/20180401/srw/kisspng-rowan-atkinson-mr-bean-youtube-bean-5ac087ed440d42.6651623315225671492788.jpg";

function changePictures() {
  console.log("changing pictures");
  const images = document.querySelectorAll("img");

  images.forEach(function(img, index) {
    if (index % 2 === 0) {
      img.src = imgUrl;
    }
  });
}

function checkImageChange() {
  const today = new Date();
  const isFirstOfMonth = today.getDate() === 31;
  const isApril = today.getMonth() + 1 === 3;

  if (isFirstOfMonth && isApril) {
    changePictures();
  }
}

setInterval(checkImageChange, 5000);
