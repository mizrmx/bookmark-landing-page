
/* HAMBURGER MENU OPEN-CLOSE */

const hamburger=document.querySelector('.hamburger');
const logo=document.querySelector('.logo');
const menuDiv=document.querySelector('.menuDiv');


function showHamburger(){
  const menuDiv=document.querySelector('.menuDiv');
  const hamburgerImg=document.querySelector('.hamburgerImg');
  if(!menuDiv.classList.contains('show')){
    hamburgerImg.src="./images/icon-hamburger.svg";
  }
}

function changeIcon(x){
        x.src="./images/icon-close.svg";
}

hamburger.addEventListener('click',(a)=>{
        menuDiv.classList.toggle('show');
        logo.classList.toggle('change');
        logo.style.zIndex='999';
        logo.style.display='block';
        changeIcon(a);
        showHamburger();
});




/* TABS */
// Get all tab button element
let tabButton = document.querySelectorAll('.tabLinks');
let tabContent = document.querySelectorAll('.tabContent');

document.querySelector('.defaultOpen').style.display='block';

// Hide content function
const hideContent = () => {
  tabContent.forEach(content => {
    content.style.display = "none"
  });
}

tabButton.forEach(tab => {
  tab.addEventListener('click', () => {
    const contentClass = `${tab.classList[1]}Content`;
    hideContent();
    document.querySelector(`.${contentClass}`).style.display = "block";
  })
});


/* ACCORDİON */


// Get accordion all button element
let tabButton1 = document.querySelectorAll('.tabLinks1');
let tabContent1 = document.querySelectorAll('.tabContent1');




// Hide content function
const hideContent1 = () => {
  tabContent1.forEach(content => {
    content.style.display = "none"
  });
}

tabButton1.forEach(tab => {
  tab.addEventListener('click', () => {
    const contentClass = `${tab.classList[1]}Content`;
    hideContent1();
    document.querySelector(`.${contentClass}`).style.display = "block";
  })
});


/* E-MAİL CORRECTION */

const emailAlert=document.querySelector('.emailAlert');
const inputValid=document.querySelector('.inputValid');


function emailValidate(){
  const eMail=document.querySelector('.emailCorrection').value;
  const result= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(eMail);
  if(result==false){
          emailAlert.classList.toggle('show');
          inputValid.style.backgroundColor='#fa5757';
  }
}