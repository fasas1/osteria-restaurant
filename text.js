//Nav scroll
window.addEventListener('scroll', function(){
    const header=document.querySelector('header');
      header.classList.toggle("sticky", window.scrollY > 0);
});


//menu item 


const menuTabs = document.querySelector(".menu-tabs");
     menuTabs.addEventListener("click", function (e){
        if (e.target.classList.contains("menu-tab-item") && !e.target .classList.contains("active")){
           const target = e.target.getAttribute("data-target")
            menuTabs.querySelector(".active").classList.remove("active");
          e.target.classList.add("active");
          const menuSection = document.querySelector(".menu-section"); 
          menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
          menuSection.querySelector(target).classList.add('active');

        }
     });


     // TOGGLE MENU

     function toggleMenu(){
           const menuToggle = document.querySelector('.menuToggle');
             const  navigation = document.querySelector('.navigation');  
               menuToggle.classList.toggle('active');
               navigation.classList.toggle('active')
     }