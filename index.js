
// Gets dynamic year for display in copyright section
const d = new Date();
let year = d.getFullYear();
document.getElementById("yearText").innerHTML = year;



let menuIcon = document.getElementById("menuIcon")
menuIcon.addEventListener("click",toggleMenu);


let menu = document.getElementById("dropDownHamburgerMenu");
let mobileMenu = document.getElementById("mobileMenu");
let menuOpen = false;




let paralaxImageTop =  document.getElementById("paralaxImageTop");
let bottomParalaxBanner = document.getElementById("testemonialParalaxImage")


function toggleMenu(){
    menuOpen = !menuOpen;
    console.log(menuOpen);

    
    if(menuOpen) {
        menu.style.height = "10vw";
        mobileMenu.style.transform = "translateX(-0.1vw)" 
        menuIcon.style.transform = 'rotate(180deg)';   
    } else {
        menu.style.height = "0"; 
        mobileMenu.style.transform = "translateX(40vw)" 
        menuIcon.style.transform = 'rotate(-180deg)'; 
    }
}


window.addEventListener('scroll', ()=>{
    let shift = window.scrollY;
    paralaxImageTop.style.marginTop = shift * 0.35 + 'px'
    
    
})
