let prev = document.getElementById('pre');
let next = document.getElementById('next');

var arr = ["images/app-dev.jpg", "images/webdevelopment.jpg", "images/webdesign.jpg", "images/aside.jpg"];

var num = 0;

const imageGall = () => {
    let image = document.getElementById('slider');
    num++;
    if (num >= arr.length) {
        num = 0;
    }
    image.src = arr[num];
}

const imageGallpre = () => {
    let image = document.getElementById('slider');
    num--;
    if (num < 0) {
        num = arr.length - 1;
    }
    image.src = arr[num];
}

prev.addEventListener('click', imageGallpre)
next.addEventListener('click', imageGall);


//Next Section
// let elm = document.createElement('div');
// elm.className = "headClass";
// elm.id = "headId";
// let h1 = document.createElement('h1')
// elm.appendChild(h1);
// let text = document.createTextNode("I'm create text node heading");
// h1.appendChild(text);

// document.body.appendChild(elm);
// console.log(elm.getAttribute('class'));
// console.log(elm.hasAttribute('class'));
// elm.removeAttribute('class');
// elm.setAttribute('title','mytitle');
// // document.body.removeChild(elm);
// // elm.removeChild(h1);
// console.log(elm);

// Quiz
let heading = document.createElement('h2');
heading.innerText = "Go to CodeWithHarry";
document.body.appendChild(heading);
heading.setAttribute('href','https://www.codewithharry.com');
console.log(heading);