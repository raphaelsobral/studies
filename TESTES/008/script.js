const polaroid = document.querySelector('div#polaroid');
const pic = document.getElementById('pic');
const img = document.querySelector('img');

polaroid.addEventListener('click', function(e) {
    img.style.opacity = 1;
})