
let slides=document.querySelectorAll(".container__panel2__slide");//select all slides

let emailPage=slides[0];
let nameAndPasswdPage=slides[1];
let dobPage=slides[2];

let backBtns=document.querySelectorAll(".container__form-ui__button--back");//get all back buttons
let nameAndPasswdPageBackBtn=backBtns[0];
let dobPageBackBtn=backBtns[1];

let nextBtn=document.querySelector(".container__form-ui__button--next");
let continueBtn=document.querySelector(".container__form-ui__button--continue");

nameAndPasswdPageBackBtn.addEventListener("click",(eve)=>{
    emailPage.classList.add("active");//make email page invisible
    nameAndPasswdPage.classList.remove("active");//make name and password page visible
},
{capture:false,once:false,passive:false,});

dobPageBackBtn.addEventListener("click",(eve)=>{
    nameAndPasswdPage.classList.add("active");//make email page invisible
    dobPage.classList.remove("active");//make name and password page visible
},
{capture:false,once:false,passive:false,});

nextBtn.addEventListener("click",(eve)=>{
    emailPage.classList.remove("active");//make email page invisible
    nameAndPasswdPage.classList.add("active");//make name and password page visible
},
{capture:false,once:false,passive:false,});

continueBtn.addEventListener("click",(eve)=>{
    nameAndPasswdPage.classList.remove("active");//make namesAndPasswd page invisible
    dobPage.classList.add("active");//make name and password page visible
},
{capture:false,once:false,passive:false,});