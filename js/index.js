// on scroll(on wheel?) shrink nav height
// bonus: zoom image of bus up to brand
const fixedHeader = document.querySelector('header');

document.addEventListener('scroll', (event) => {
    if (document > 50) {
        fixedHeader.style.height = '5rem';
        fixedHeader.style.transition = 'all 2s';
    } else {
        fixedHeader.style.height = '4rem';
        fixedHeader.style.transition = 'all 2s';
    }
});

// on load intro h2 animated bounce in
//animationstart + animationend
//onload.addEventListener()



// resize, alert('Ouch! Just kidding. I'm just a window.')
window.addEventListener('resize', (event) => {
    alert('Ouch! Just kidding, I am a window.');
})


// mouseenter, button bump up, text change to 'haha, missed me!', then revert. only 1x per button



// [need replacement], images bounce, etc.



// drag, alert('Zooooom!)
// dragend to remove alert
window.addEventListener('wheel', (event) => {
    alert('ZOOOOOOOOOOOOOM');

    //reset
    setTimeout(function() {
        alert = '';
    }, 3000);
}, false);


// mouseover, text-content h2, dropshadow fades in
const h2Shadow = document.querySelector('h2');

h2Shadow.addEventListener('mouseover', (event) => {
    event.target.style.textShadow = '3px 3px 5px black';
    event.target.style.transition = 'all 1s';

    // reset
    setTimeout(function() {
        event.target.style.textShadow = '';
    }, 3000);
}, false);


