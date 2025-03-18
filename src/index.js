// initial content
import './styles.css';
import { displayHome } from './modules/home.js';
import { displayMenu } from './modules/menu.js';
import { displayAbout } from './modules/about.js';
const mainContainer = document.querySelector('#content');

// website buttons
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

const listBtn = [homeBtn,menuBtn,aboutBtn];

// display initial content
mainContainer.innerHTML = displayHome();
homeBtn.classList.add('active');

// function to add active class
function setActiveClass(btn){
    btn.classList.add('active');

    // remove active class from other buttons
    listBtn.forEach((element) => {
        if(element !== btn){
            element.classList.remove('active');
        }
    })
    
}
 for(let i = 0; i < listBtn.length; i++){
    listBtn[i].addEventListener('click', () =>{
        if( listBtn[i] === homeBtn){
            setActiveClass(listBtn[i]);
            mainContainer.innerHTML = displayHome();
            console.log(displayHome());
        }else if(listBtn[i] === menuBtn){
            setActiveClass(listBtn[i]);
            mainContainer.innerHTML = displayMenu();
        }else if(listBtn[i] === aboutBtn){
            setActiveClass(listBtn[i]);
            mainContainer.innerHTML = displayAbout();
        }else{
            console.log('no button clicked');
        }
    })
 }

// display initial content
// mainContainer.innerHTML = displayHome();
// homeBtn.classList.add('active');

// homeBtn.addEventListener('click',() =>{
//     mainContainer.innerHTML = displayHome();
//     homeBtn.classList.add('active');

//     menuBtn.classList.remove('active');
//     aboutBtn.classList.remove('active');

// });

// menuBtn.addEventListener('click',() =>{
//     mainContainer.innerHTML = displayMenu();
//     menuBtn.classList.add('active');

//     aboutBtn.classList.remove('active');
//     homeBtn.classList.remove('active');
// });

// aboutBtn.addEventListener('click',() =>{
//     mainContainer.innerHTML = displayAbout();
//     aboutBtn.classList.add('active');

//     homeBtn.classList.remove('active');
//     menuBtn.classList.remove('active');
// });