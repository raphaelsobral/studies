const form = document.querySelector('form');
const radioInput = document.querySelectorAll('input');
const submitBttn= document.querySelector('button');

radioInput.forEach(radio => {
    radio.addEventListener('click', function(e) {
        submitBttn.removeAttribute('disabled');
    })
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const selectedRating = document.querySelector('input[name="rating"]:checked');

    const rateCard = document.querySelector('div.card');
    const thxCard = document.querySelector('div.thx-card');
    const showRating = document.querySelector('span');

    rateCard.classList.add('off');
    thxCard.classList.remove('off');
    
    showRating.innerHTML = `${selectedRating.value}`;
})