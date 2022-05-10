// /*==================== MENU SHOW Y HIDDEN ====================*/
// const navMenu =  document.getElementById('nav-menu');
// const  navToggle =  document.getElementById('nav-toggle');
// const  navClose =  document.getElementById('nav-close');

// /*===== MENU SHOW =====*/
// /* Validate if constant exists */
// if(navToggle && nav){
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-menu')
//     })
// }
// //navMenu('nav-toggle','nav-menu')
// /*===== MENU HIDDEN =====*/
// /* Validate if constant exists */
// if(navClose){
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-menu')
//     })
// }
// //navMenu('nav-toggle','nav-menu')
// /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//    let navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))


 /*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsbyClassName('skills__content'),
    skillsHeader = document.querySelectorAll('skills__header')

    function toggleSkills(){
        let itemClass = this.parentNode.ClassName

        for( i=0; i< skillsContent.length ; i++){
            skillsContent[i].className ='skills__content skills__close'

        }
        if(itemClass === 'skills__content skills__close'){
            this.parentNode.className = 'skills__content skills__open'
        }
    }

    skillsHeader.forEach((el) =>{
        el.addEventListener('click', toggleSkills)
    })

// /*==================== QUALIFICATION TABS ====================*/


// /*==================== SERVICES MODAL ====================*/


// /*==================== PORTFOLIO SWIPER  ====================*/
// let swiper = new Swiper(".portfolio__container", {
//     cssMode: true,
//     loop:true,

//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     mousewheel: true,
//     keyboard: true,
//   });

// /*==================== TESTIMONIAL ====================*/


// /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


// /*==================== CHANGE BACKGROUND HEADER ====================*/ 


// /*==================== SHOW SCROLL UP ====================*/ 


// /*==================== DARK LIGHT THEME ====================*/ 