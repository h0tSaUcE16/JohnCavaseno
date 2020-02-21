
const heroStyles = [
  {
    "background-image": 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../images/John_0001.jpg")',
  },
  {
    "background-image": 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../images/John_0073.jpg")',
  },
  {
    "background-image": 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../images/John_0134.jpg")',
  }
];

const entrances = ['WELCOME', 'HEADSHOT & RESUME', 'GALLERY'];

const dataPages = [];

for (let i = 0; i < 3; i++) {
  let hero = document.createElement("div");
  hero.className = "heroImage";
  hero.id = "hero" + i;

  Object.assign(hero.style, heroStyles[i]);

  let dataPage = document.createElement("div");
  dataPage.className = "dataPage";
  dataPage.id = 'dp' + i;
  dataPages.push(dataPage);

  document.body.appendChild(hero);
  document.body.appendChild(dataPage);

  let entrance = document.createElement("div");
  entrance.className = 'entranceText';
  entrance.innerText = entrances[i];
  hero.appendChild(entrance);
}

// console.log(dataPages);

// REEL DATAPAGE
const reelTitles = ['DANCE REEL', 'FIGHT REEL', 'VOCAL REEL'];
// const reelTitleUp1 = document.createElement("div"); // REEL TITLE1
// reelTitleUp1.className = 'reelTitle';
// reelTitleUp1.innerText = reelTitles[1];
// dataPages[0].appendChild(reelTitleUp1);
// const reelTitleUp2 = document.createElement("div"); // REEL TITLE2
// reelTitleUp2.className = 'reelTitle';
// reelTitleUp2.innerText = reelTitles[2];
// dataPages[0].appendChild(reelTitleUp2);
const reels = ["https://www.youtube.com/embed/2y2km_SFviQ", "https://www.youtube.com/embed/iqYVwag3N7Y", "https://www.youtube.com/embed/3i6Qg18eGxs"];
const reel = document.createElement("iframe"); // REEL
reel.src = reels[0];
reel.id = 'reel';
// reel.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
reel.allow = 'encrypted-media';
dataPages[0].appendChild(reel);
const reelTitleBottom = document.createElement("div"); // REEL TITLE0
reelTitleBottom.className = 'reelTitle';
reelTitleBottom.innerText = reelTitles[0];
const arrow = document.createElement("a"); // NEXT
arrow.id = 'arrow';
arrow.innerText = '>';
reelTitleBottom.appendChild(arrow);
dataPages[0].appendChild(reelTitleBottom);

// ARROW FUNCTIONALITY
let reelIndex = 0;
const arrowChange = () => {
  if (++reelIndex > 2) reelIndex = 0;
  reel.src = reels[reelIndex];
  reelTitleBottom.innerText = reelTitles[reelIndex];
  reelTitleBottom.appendChild(arrow);
};
arrow.onmousedown = arrowChange;



// HEADSHOT
const headshotSpan = document.createElement("span");
const headshotLink = document.createElement("a");
headshotLink.href = "../images/retouch2.jpg";
// headshotLink.setAttribute("download", "../images/19.jpg");
headshotLink.setAttribute('target',"_blank");
const headshot = document.createElement("img");
headshot.src = "../images/retouch2.jpg";
headshot.id = 'headshot';
// headshot.setAttribute('style', 'width: 400px')
headshotSpan.appendChild(headshotLink);
headshotLink.appendChild(headshot);


// RESUME
const resumeSpan = document.createElement("span");
const resumeLink = document.createElement("a");
resumeLink.href = "../resume/jcResume.pdf";
// resumeLink.setAttribute('download', '../resume/johnResume.docx');
resumeLink.setAttribute('target',"_blank");
const resume = document.createElement("img");
resume.src = '../resume/jcResume.png';
resume.id = 'resume';
// resume.setAttribute('style', 'width: 400px;');
resumeSpan.appendChild(resumeLink);
resumeLink.appendChild(resume);


// HEADSHOT & RESUME
const headshotResumeDiv = document.createElement("div");
headshotResumeDiv.appendChild(headshotSpan);
headshotResumeDiv.appendChild(resumeSpan);
dataPages[1].appendChild(headshotResumeDiv);

// GALLERY 
// const topRow = document.createElement('div');
// const bottomRow = document.createElement('div');
// const rows = [topRow, bottomRow] 
// = [document.createElement('div'), document.createElement('div')];

// ARRAYS OF GALLERY IMAGES PATHS
const tall = ['../gallery/wide/IMG_6374.jpg','../gallery/tall/IMG_6016.jpg','../gallery/tall/IMG_6017.jpg','../gallery/tall/IMG_6371.jpg','../gallery/tall/IMG_6373.jpg','../gallery/tall/IMG_6422.jpg','../gallery/tall/IMG_6423.jpg','../gallery/tall/IMG_6424.jpg','../gallery/tall/IMG_6425.jpg','../gallery/tall/IMG_6426.jpg','../gallery/tall/IMG_6574.jpg','../gallery/tall/IMG_6722.jpg','../gallery/tall/IMG_6723.jpg'];
const wide = [,'../gallery/wide/IMG_6110.jpg','../gallery/wide/IMG_6096.jpg','../gallery/wide/IMG_6109.jpg','../gallery/wide/IMG_6129.jpg','../gallery/wide/IMG_6370.jpg','../gallery/wide/IMG_6372.jpg','../gallery/wide/IMG_6379.jpg','../gallery/wide/IMG_6377.jpg','../gallery/wide/IMG_6378.jpg','../gallery/wide/IMG_6380.jpg','../gallery/wide/IMG_6725.jpg','../gallery/wide/IMG_6726.jpg','../gallery/wide/IMG_6727.jpg'];

// ,'../gallery/wide/IMG_6111.jpg'

// let galleryIndices = [9,0,5,13];
// let galleryArray = [];

// for (let i = 0; i < 2; ++i) {
//   const tallImg = document.createElement('img');
//   tallImg.src = tall[galleryIndices[i]];
//   const wideImg = document.createElement('img');
//   wideImg.src = wide[galleryIndices[i+1]];
//   galleryArray.push(tallImg, wideImg);
//   if (!i) {
//     rows[i].appendChild(tallImg);
//     rows[i].appendChild(wideImg);
//   } else {
//     rows[i].appendChild(wideImg);
//     rows[i].appendChild(tallImg);
//   }
// }

for (let i = tall.length - 1; i > 0; --i) {
  const tallImg = document.createElement('img');
  tallImg.src = tall[i];
  const wideImg = document.createElement('img');
  wideImg.src = wide[i];
  // galleryArray.push(tallImg, wideImg);
  const row = document.createElement('div');
  if (i % 2 === 0) {
    row.appendChild(tallImg);
    row.appendChild(wideImg);
  } else {
    row.appendChild(wideImg);
    row.appendChild(tallImg);
  }
  dataPages[2].appendChild(row);
}

// const prev = document.createElement('div');
// prev.innerHTML = "prev";

// dataPages[2].appendChild(topRow);
// dataPages[2].appendChild(bottomRow);

// FOOTER
const footer = document.createElement('footer');
footer.id = 'contact';
document.body.appendChild(footer);
const email = document.createElement('h3');
email.id = 'email';
email.innerText = 'john.cavaseno@gmail.com';
const website = document.createElement('h3');
website.id = 'website';
website.innerText = 'johncavaseno.com';
website.onclick = () => {
  window.open('http://johncavaseno.com');
}
footer.appendChild(email);
footer.appendChild(website);

// function gallerySlideshow() {
//   galleryIndices.forEach((item, index, array) => {
//     if (index % 2)
//   })
// }


// function checkScroll(mS) {
//   let header = document.getElementsByTagName("header");
//   console.log(this.pageYOffset, header[0].style);
//   setTimeout(() => {
//     if (this.pageYOffset >= 150) {
//       header[0].style.backgroundColor = "#03030367";
//       header[0].style.boxShadow = "0px 0px 5px 5px #03030385";
//     } 
//     if (this.pageYOffset <= 150) {
//       header[0].style.backgroundColor = "";
//       header[0].style.boxShadow = "";
//     } 
//     checkScroll(mS);
//     // else {
//     //   checkScroll(mS);
//     // }
//   }, mS);
// }

// checkScroll(10);
