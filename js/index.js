
const fixedHeader = document.querySelector('header');
window.addEventListener('scroll', (event) => {
    if (window.scrollY >= 120) {
        fixedHeader.style.height = '50px';
        fixedHeader.style.transition = 'all 2s';
    } else {
        fixedHeader.style.height = '90px';
    }
})// fluid height nav

// Stop nav refresh
const navLinks = document.getElementsByTagName('a');
navLinks.array.forEach(element => {
    navLinks.addEventListener('click', (event) => {
        event.preventDefault();
    })
});

// Window resize
window.addEventListener('resize', (event) => {
    alert('Ouch! Just kidding, I am a window.');
})

// Hidden destination
const destButton = document.querySelector('.destination p');
const contentPick = document.querySelector('.content-pick');

destButton.addEventListener('dblclick', (event) => {
    event.target.style.visibility = 'hidden';
    // event.target.getInnerText = 'Where did I go?';

    // not working yet
        // let jokeText = '<p>Where did I go?</p>';
        // event.contentPick.appendChild(jokeText);

//     //reset
    setTimeout(function () {
        event.target.style.visibility = '';
    }, 2000);
}, false);

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

// Endless Zoooooom
window.addEventListener('wheel', (event) => {
    zoomAlert('ZOOOOOOOOOOOM!', 1500);


});

function zoomAlert(msg, duration) {
    const element = document.createElement("div");
    element.setAttribute("style","background-color:white;height:150px;width:350px;font-size:4rem;");
    element.innerHTML = msg;
    setTimeout(function() {
        element.parentNode.removeChild(element);
    }, duration);
    document.body.appendChild(element);
}






// // on load intro h2 animated bounce in
// //animationstart + animationend
// //onload.addEventListener()

// // images spin on load
// const firstImg = document.querySelector('.img');
// firstImg.addEventListener('DOMContentLoaded', (event) => {
//     firstImg.style.transform = 'rotate(180deg)';
//     firstImg.style.transition = 'all 2s';
// })
