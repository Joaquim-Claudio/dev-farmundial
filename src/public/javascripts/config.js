var SideNav = {
    expand: () => {
        
        if(window.innerWidth >= 768 && window.innerWidth < 992) {
            document.getElementById("sideNav").style.width = "45%";
        } else {
            document.getElementById("sideNav").style.width = "100%";
            document.body.style.overflow = "hidden";
        }
        
        document.querySelector(".side-navbar").style.display = "block"
    },
    
    collapse: () => {
        document.querySelector(".side-navbar").style.display = "none"
        document.getElementById("sideNav").style.width = "0";
        document.body.style.overflow = "auto";
    }
}

window.addEventListener("DOMContentLoaded", function(event) {

    Array.from(document.getElementsByClassName("sn-1")).forEach(link => {
        link.addEventListener("click", ()=> {
            SideNav.collapse();
        })
    })

    
})

window.addEventListener("scroll", function() {
    
    if(this.window.scrollY >= 200) {
        document.querySelector(".navbar").classList.add("retracted");
        
    } else {
        
        document.querySelector(".navbar").classList.remove("retracted");
    }
})