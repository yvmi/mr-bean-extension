const imgUrl = ["https://banner2.cleanpng.com/20180401/srw/kisspng-rowan-atkinson-mr-bean-youtube-bean-5ac087ed440d42.6651623315225671492788.jpg",
                "https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip",
                "https://www.clipartkey.com/mpngs/m/282-2825992_mr-bean-peekaboo-mr-bean-hd.png"];
let imgToChange = 0; 
let i = 0; 

function changePictures() {
  console.log("changing pictures");
  const images = document.querySelectorAll("img");
  images.forEach(function(img, index) {
    if (index % 2 === 0) {
      img.src = iterateImage();
    }
  });
}

function iterateImage(){
  if (i < imgUrl.length){
    imgToChange = imgUrl[i];
    i++;
  } else{
    imgToChange = imgUrl[0];
    i = 1;
  }
  return imgToChange
}

function checkImageChange() {
  const today = new Date();
  const isFirstOfMonth = today.getDate() === 1;
  const isApril = today.getMonth() + 1 === 4;

  if (isFirstOfMonth && isApril) {
    changePictures();
  }
}

setInterval(checkImageChange, 5000);
