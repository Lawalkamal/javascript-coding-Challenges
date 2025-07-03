'use strict;'
const displayImg = document.getElementById('display-img');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    displayImg.src = thumbnail.src;
  });
});
