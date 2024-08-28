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

    this.document.querySelector(".btn-contact").addEventListener("click", function() {
        Swal.fire({
            title: "Entrar em contacto",
            html:`
                <p class="co-info-text">
                    <a href="mailto:shop@farmundial.pt"
                        class="custom-link">shop@farmundial.pt
                        <img class="ic-redirect"
                            src="./images/icons/ic-redirect.png"
                            alt="Redirect icon.">
                    </a>
                </p>

                <p class="co-info-text">
                    <a href="mailto:geral@farmundial.pt"
                        class="custom-link">geral@farmundial.pt
                        <img class="ic-redirect"
                            src="./images/icons/ic-redirect.png"
                            alt="Redirect icon.">
                    </a>
                </p>
            `,
            showCloseButton: true,
            showConfirmButton: false,
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    })

    
})

window.addEventListener("scroll", function() {
    
    if(this.window.scrollY >= 200) {
        document.querySelector(".navbar").classList.add("retracted");
        
    } else {
        
        document.querySelector(".navbar").classList.remove("retracted");
    }
})
