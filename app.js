document.querySelector(".open-btn").addEventListener("click", function(){
   document.querySelector(".mobileMenu").classList.toggle("show")
   // console.log("hi");
});
document.querySelector(".menu-close").addEventListener("click", function () {
   document.querySelector(".mobileMenu").classList.toggle("show")
   // console.log("hi");
});
// openBtn()

// var height = $('.fixed-navbar').height();

// $(window).scroll(function () {
//    if ($(this).scrollTop() > height) {
//       $('.wpo-site-header').addClass('fixed')
//    } else {
//       $('.wpo-site-header').removeClass('fixed')
//    }
// })

document.getElementById("resumehoo").addEventListener("click",re_fun);

document.getElementById("resumehoo1").addEventListener("click",re_fun);

function re_fun() { 
   // window.location="https://drive.google.com/file/d/19Pvl7XdGm6eeHpYNGD02X9J73Ksle-Xq/view?usp=share_link"
   // window.location="_blank";
  
   window.open("https://drive.google.com/file/d/1sIRCdL4g82GgpngzUJyXONzbOltI4Jdx/view?usp=share_link");
   // window.location.href = "https://drive.google.com/file/d/1sIRCdL4g82GgpngzUJyXONzbOltI4Jdx/view?usp=share_link";
   // window.location.href = "https://drive.google.com/file/d/19Pvl7XdGm6eeHpYNGD02X9J73Ksle-Xq/view?usp=share_link";
}
