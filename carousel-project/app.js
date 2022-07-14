const photos = document.querySelectorAll(".gallery-photo");
const totalPhotos = photos.length;
let photoNumber = 0;

document.querySelector(".prev-btn").addEventListener("click", showPrevPhoto);
document.querySelector(".next-btn").addEventListener("click", showNextPhoto);

function hidePhotos() {
  for (let photo of photos) {
    photo.classList.remove("show-photo");
  }
}

function showNextPhoto() {
  hidePhotos();
  if (photoNumber === totalPhotos - 1) {
    photoNumber = 0;
  } else {
    photoNumber++;
  }
  photos[photoNumber].classList.add("show-photo");
}

function showPrevPhoto() {
  hidePhotos();
  if (photoNumber === 0) {
    photoNumber = totalPhotos - 1;
  } else {
    photoNumber--;
  }
  photos[photoNumber].classList.add("show-photo");
}
