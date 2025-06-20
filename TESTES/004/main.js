function teste() {
    let value = prompt('Digite algo: ');
    let result = value.split(' ');
    
    let uwu = [];

    result.forEach(word => {
        uwu.push(word.split('').reverse('').join(''));
    })

    let final = uwu.join(' ');

    window.document.querySelector('div#inside').innerText = `${final}`;
};

teste();