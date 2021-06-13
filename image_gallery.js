let images = document.querySelectorAll('.image');
let currentPhoto = document.querySelector('.photo');

for(let image of images) {
    image.addEventListener('click', function(event) {
        let tagImg = event.target;
          
        let previosActiveImage = document.querySelector('.active-image');
        if(previosActiveImage) {
            previosActiveImage.classList.remove('active-image');
        }

        if(tagImg.tagName === 'IMG') {
            tagImg.parentElement.classList.add('active-image');
            currentPhoto.innerHTML='';
            let currentImg = document.createElement('img');
            currentImg.setAttribute('src', tagImg.src);
            currentPhoto.appendChild(currentImg);
        }
    });
}