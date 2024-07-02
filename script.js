let textcon = document.getElementById('typewritter-text');
let textcon2=document.getElementById('typewritter-text2');
let textcon3=document.getElementById('typewritter-text3')
const githubLogo = document.getElementById('github-logo');
const linkedinLogo = document.getElementById('linkedin-logo');
const npmlogo = document.getElementById('npm-logo');
let resume= document.getElementsByClassName('resume')[0];
let instagram=document.getElementById('instagram-logo');
let facebook=document.getElementById('facebook-logo');
let linkedin=document.getElementById('linkedin-logo');
let gmail=document.getElementById('gmail-logo');
let skills=document.getElementsByClassName('skills-table')[0];
let heading=document.getElementById('table-head')

  
// text to be display

let text = "I am Suraj Chandra, i have completed engineering from  Institute of Technology, Gopeshwar. My primary interest lies in the field of software engineering.";
let text2 = "I maintain my GitHub repository with passion, showcasing my projects and contributions to the open-source community. "
let text3= "I actively contribute to npm by creating and maintaining packages that solve specific problems or enhance developer workflows."
let index = 0;

function typeText(element, text) {
    return new Promise((resolve, reject) => {
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 20); //set speed here(delay between each character)
            } else {
                index = 0;
                resolve();
            }
        }
        type();
    });
}

function normal_printing(){
    textcon.textContent=text;
    textcon2.textContent=text2;
    githubLogo.style.opacity=1;
    textcon3.textContent=text3;
    npmlogo.style.opacity=1;
    resume.style.opacity=1;
    linkedin.style.opacity=1;
    facebook.style.opacity=1;
    instagram.style.opacity=1;
    gmail.style.opacity=1;
    heading.style.opacity=1;
    skills.style.opacity=1;

}

// step by step execution
async function startTyping() {
    await typeText(textcon, text);
    await typeText(textcon2, text2);
    await new Promise((resolve) => {
        setTimeout(resolve, 500);
    });
    githubLogo.style.opacity = 1;
   
    await typeText(textcon3, text3);
    await new Promise((resolve) => {
        setTimeout(resolve, 500);
    });
    npmlogo.style.opacity = 1;
    await new Promise((resolve)=>{
        setTimeout(resolve,1000);
    });
    resume.style.opacity=1;
    await new Promise((resolve)=>{
        setTimeout(resolve,500);
    });
    instagram.style.opacity=1;
    await new Promise((resolve)=>{
        setTimeout(resolve,500);
    });
    facebook.style.opacity=1;
    await new Promise((resolve)=>{
        setTimeout(resolve,500);
    });
    linkedin.style.opacity=1;
    await new Promise((resolve)=>{
        setTimeout(resolve,500);
    });
    gmail.style.opacity=1;
    await new Promise((resolve)=>{
        setTimeout(resolve,500);
    });
    heading.style.opacity=1;
    await new Promise((resolve)=>{
        setTimeout(resolve,500);
    });
    skills.style.opacity=1;
}



function shouldRunTypewriter() {
    return sessionStorage.getItem('typewriterEnabled') !== 'false';
}

// session storage using for not repeate typewritter effect while you refresh.
function setTypewriterFlag(enabled) {
    sessionStorage.setItem('typewriterEnabled', enabled);
}

if (shouldRunTypewriter()) {
    startTyping();
}
else{
    normal_printing();
}


window.addEventListener('beforeunload', function() {
    setTypewriterFlag(false);
});

