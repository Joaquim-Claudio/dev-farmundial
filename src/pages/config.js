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

window.addEventListener("DOMContentLoaded", (event) => {

    Array.from(document.getElementsByClassName("sn-1")).forEach(link => {
        link.addEventListener("click", ()=> {
            SideNav.collapse();
        })
    })
})
