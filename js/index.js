
const fixedHeader = document.querySelector('header');
window.addEventListener('scroll', (event) => {
    if (window.scrollY >= 120) {
        fixedHeader.style.height = '50px';
        fixedHeader.style.transition = 'all 2s';
    } else {
        fixedHeader.style.height = '90px';
    }
})// fluid height nav

// Window resize
window.addEventListener('resize', (event) => {
    alert('Ouch! Just kidding, I am a window.');
})

// Hidden destination
const destButton = document.querySelector('.destination:first-child');
const contentPick = document.querySelector('.content-pick')

destButton.addEventListener('dblclick', (event) => {
    // event.target.style.visibility = 'hidden';
    event.target.getInnerText = 'Where did I go?';
    // not working yet
        // let jokeText = '<p>Where did I go?</p>';
        // event.contentPick.appendChild(jokeText);

    //reset
    setTimeout(function () {
        // event.target.style.visibility = '';

    }, 2000);
}, true);

// Header depth
const h2Shadow = document.querySelector('h2');

h2Shadow.addEventListener('mouseover', (event) => {
    event.target.style.textShadow = '3px 3px 5px black';
    event.target.style.transition = 'all 1s';

    // reset
    setTimeout(function () {
        event.target.style.textShadow = '';
    }, 3000);
}, false);









// // on load intro h2 animated bounce in
// //animationstart + animationend
// //onload.addEventListener()

// // images spin on load
// const firstImg = document.querySelector('.img');
// firstImg.addEventListener('DOMContentLoaded', (event) => {
//     firstImg.style.transform = 'rotate(180deg)';
//     firstImg.style.transition = 'all 2s';
// })


// // drag, alert('Zooooom!)
// // dragend to remove alert
// window.addEventListener('wheel', (event) => {
//     alert('ZOOOOOOOOOOOOOM');

//     //reset
//     setTimeout(function () {
//         alert = '';
//     }, 3000);
// }, false);


// // mouseover, text-content h2, dropshadow fades in
// const h2Shadow = document.querySelector('h2');

// h2Shadow.addEventListener('mouseover', (event) => {
//     event.target.style.textShadow = '3px 3px 5px black';
//     event.target.style.transition = 'all 1s';

//     // reset
//     setTimeout(function () {
//         event.target.style.textShadow = '';
//     }, 3000);
// }, false);


