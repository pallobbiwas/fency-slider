//start
//array of image
const myImage = [
  "./image/image 1.jpg",
  "./image/image 2.jpg",
  "./image/image 3.jpg",
  "./image/image 4.jpg",
  "./image/image 5.jpg",
];
let imageIndex = 0;
const setImgae = document.getElementById('slider-image');
setImgae.classList.add('smooth')
setInterval(() => {
    if(imageIndex >= myImage.length){
        imageIndex = 0;
    }
    
    const imageUrl = myImage[imageIndex];
    setImgae.setAttribute('src', imageUrl)
    imageIndex++;
}, 2000);
