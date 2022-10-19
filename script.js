const screenshotBox1 = document.getElementById('screenshot1');
const overlay1Box1 = document.getElementById('firstlayer1');
const overlay2Box1 = document.getElementById('secondlayer1');

const screenshotBox2 = document.getElementById('screenshot2');
const overlay1Box2 = document.getElementById('firstlayer2');
const overlay2Box2 = document.getElementById('secondlayer2');

const screenshotBox3 = document.getElementById('screenshot3');
const overlay1Box3 = document.getElementById('firstlayer3');
const overlay2Box3 = document.getElementById('secondlayer3');

//.............Project Box1

function click1() {
    //To remove the project title overlay
    overlay1Box1.style.display = 'none';

    //To display project information overlay
    overlay2Box1.style.display = 'block';
};

function mouseOut1() {
    //To remove the project title overlay
    overlay1Box1.style.display = 'flex';

    //To display project information overlay
    overlay2Box1.style.display = 'none';
};


overlay2Box1.addEventListener('click', () => {
    //To open website link
    window.open("https://aimes13.github.io/Flexbox-Business-Site-Project/");
 });

/*screenshotBox1.addEventListener('mouseenter', () => {
    //To remove the project title overlay
    overlay1Box1.style.display = 'none';

    //To display project information overlay
    overlay2Box1.style.display = 'block';
    overlay2Box1.style.cursor = 'pointer';
});

screenshotBox1.addEventListener('mouseleave', () => {
    //To remove the project title overlay
    overlay1Box1.style.display = 'flex';

    //To display project information overlay
    overlay2Box1.style.display = 'none';
}); */

//.............Project Box2

/*screenshotBox2.addEventListener('mouseenter', () => {
    //To remove the project title overlay
    overlay1Box2.style.display = 'none';

    //To display project information overlay
    overlay2Box2.style.display = 'block';
    overlay2Box2.style.cursor = 'pointer';
});

screenshotBox2.addEventListener('mouseleave', () => {
    //To remove the project title overlay
    overlay1Box2.style.display = 'flex';

    //To display project information overlay
    overlay2Box2.style.display = 'none';
}); */

function mouseOut2() {
    //To remove the project title overlay
    overlay1Box2.style.display = 'flex';

    //To display project information overlay
    overlay2Box2.style.display = 'none';
};

function click2() {
    //To remove the project title overlay
    overlay1Box2.style.display = 'none';

    //To display project information overlay
    overlay2Box2.style.display = 'block';
};

//To open website link
overlay2Box2.addEventListener('click', () => {
    window.open("https://aimes13.github.io/Responsive-Club-Website-Project/");
 });

//.............Project Box3

/*screenshotBox3.addEventListener('mouseenter', () => {
    //To remove the project title overlay
    overlay1Box3.style.display = 'none';

    //To display project information overlay
    overlay2Box3.style.display = 'block';
    overlay2Box3.style.cursor = 'pointer';
});

screenshotBox3.addEventListener('mouseleave', () => {
    //To remove the project title overlay
    overlay1Box3.style.display = 'flex';

    //To display project information overlay
    overlay2Box3.style.display = 'none';
}); */

function mouseOut3() {
    //To remove the project title overlay
    overlay1Box3.style.display = 'flex';

    //To display project information overlay
    overlay2Box3.style.display = 'none';
};

function click3() {
    //To remove the project title overlay
    overlay1Box3.style.display = 'none';

    //To display project information overlay
    overlay2Box3.style.display = 'block';
};

//To open website link
overlay2Box3.addEventListener('click', () => {
    window.open("https://aimes13.github.io/Mixed-Messages-Portfolio-Project/");
 });