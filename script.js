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

screenshotBox1.addEventListener('mouseover', () => {
    //To remove the project title overlay
    overlay1Box1.style.display = 'none';

    //To display project information overlay
    overlay2Box1.style.display = 'block';
});

screenshotBox1.addEventListener('mouseout', () => {
    //To remove the project title overlay
    overlay1Box1.style.display = 'flex';

    //To display project information overlay
    overlay2Box1.style.display = 'none';
});

//.............Project Box2

screenshotBox2.addEventListener('mouseover', () => {
    //To remove the project title overlay
    overlay1Box2.style.display = 'none';

    //To display project information overlay
    overlay2Box2.style.display = 'block';
});

screenshotBox2.addEventListener('mouseout', () => {
    //To remove the project title overlay
    overlay1Box2.style.display = 'flex';

    //To display project information overlay
    overlay2Box2.style.display = 'none';
});

//.............Project Box3

screenshotBox3.addEventListener('mouseover', () => {
    //To remove the project title overlay
    overlay1Box3.style.display = 'none';

    //To display project information overlay
    overlay2Box3.style.display = 'block';
});

screenshotBox3.addEventListener('mouseout', () => {
    //To remove the project title overlay
    overlay1Box3.style.display = 'flex';

    //To display project information overlay
    overlay2Box3.style.display = 'none';
});
