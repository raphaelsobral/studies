const mediaQuery = window.matchMedia('(max-width: 600px');
const div = document.querySelector('div');
const img = document.querySelector('img');

div.addEventListener('mouseover', ()=>{
    if (mediaQuery.matches){
        img.setAttribute('src', 'https://th.bing.com/th/id/OIP.YVuqGi_q1-P8b-NTIa9bWgAAAA?cb=iwc1&rs=1&pid=ImgDetMain');
    } else {
        img.setAttribute('src', 'https://th.bing.com/th/id/OIP.SAf9MnR2gwuwQMr8U1M65QHaJ4?cb=iwc1&rs=1&pid=ImgDetMain');
    }
});

div.addEventListener('mouseout', ()=> {
    if (mediaQuery.matches){
        img.setAttribute('src', '');
    } else {
        img.setAttribute('src', '');
    }
});