var images = Array.from(document.querySelectorAll('.image-grid > img'));

images.forEach(function (image) {
    image.addEventListener('click', function (event) {
        window.open(event.target.src);
    });
});