const myImage = document.querySelector('img');
const myTitle = document.querySelector('p');
let timeoutId; 

/* myImage.addEventListener('click', () =>{
    const mySrc = myImage.getAttribute('src');
    if (mySrc == 'imgs/before.jpg'){
        myImage.setAttribute('src', 'imgs/during.jpg');
        myTitle.innerHTML = 'oh-';
    } else if (mySrc == 'imgs/during.jpg') {
        myImage.setAttribute('src', 'imgs/after.jpg');
        myTitle.innerHTML = 'you made him cry :(';
    } else {
        myImage.setAttribute('src', 'imgs/before.jpg');
        myTitle.innerHTML = 'Click on Sand';
    }
}) */

    myImage.addEventListener('click', () =>{
        const mySrc = myImage.getAttribute('src');

        clearTimeout(timeoutId);

        if (mySrc == 'imgs/before.jpg'){
            myImage.setAttribute('src', 'imgs/during.jpg');
            myTitle.innerHTML = 'oh-';

            timeoutId = setTimeout(()=> {
                myImage.setAttribute('src', 'imgs/after.jpg');
                myTitle.innerHTML = 'you made him cry :(';

                timeoutId = setTimeout(()=> {
                    myImage.setAttribute('src', 'imgs/before.jpg');
                    myTitle.innerHTML = 'Click on Sand';
                }, 1800);
            }, 1800);
        } else if (mySrc == 'imgs/during.jpg') {
            myImage.setAttribute('src', 'imgs/after.jpg');
            myTitle.innerHTML = 'you made him cry :(';
        } else {
            myImage.setAttribute('src', 'imgs/before.jpg');
            myTitle.innerHTML = 'Click on Sand';
        }
    })