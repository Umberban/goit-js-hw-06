const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryContainerEL = document.querySelector(".gallery");
function createGalleryElements(images,className){
  let arr = [];
  images.forEach(el => {
    let liEl = document.createElement("li");
    let imgEl = document.createElement("img");
    imgEl.classList.add(className);
    liEl.append(imgEl);
    imgEl.alt = el.alt ;
    imgEl.src = el.url;
    arr.push(liEl);
  });
  galleryContainerEL.append(...arr);
}
createGalleryElements(images,"gallery__image");
