'strict-mode'
let menu = document.querySelectorAll('.menu');
let arrow = document.querySelectorAll('.arrow');

menu[0].addEventListener('mouseover', ()=> {
    arrow[0].src='images/icon-arrow-up.svg';
});

menu[0].addEventListener('mouseleave', ()=> {
    arrow[0].src='images/icon-arrow-down.svg';
});

menu[1].addEventListener('mouseover', ()=> {
    arrow[1].src='images/icon-arrow-up.svg';
});

menu[1].addEventListener('mouseleave', ()=> {
    arrow[1].src='images/icon-arrow-down.svg';
});