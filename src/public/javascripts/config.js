var SideNav = {
    expand: () => {
        if(window.innerWidth >= 768 && window.innerWidth < 992) {
            document.getElementById("sideNav").style.width = "45%";
        } else {
            document.getElementById("sideNav").style.width = "100%";
        }
    },

    collapse: () => {
        document.getElementById("sideNav").style.width = "0";
    }
}

window.addEventListener("DOMContentLoaded", function(event) {

    Array.from(document.getElementsByClassName("sn-1")).forEach(link => {
        link.addEventListener("click", ()=> {
            SideNav.collapse();
        })
    })

    
})

const mainElement = document.querySelector("main")

mainElement.addEventListener("scroll", function() {
    
    if(mainElement.scrollTop >= 200) {
        document.querySelector(".navbar").classList.add("retracted");
        if(window.innerWidth < 768) {
            window.scrollTo({
                left: 0,
                top: window.innerHeight,
                behavior: "smooth"
            });
        }
        
    } else {
        
        document.querySelector(".navbar").classList.remove("retracted");
        if(window.innerWidth < 768) {
            window.scrollTo({
                left: 0,
                top: window.innerHeight * (-1),
                behavior: "smooth"
            });
        }
    }
})