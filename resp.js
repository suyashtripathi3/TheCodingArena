hamburger = document.querySelector('.hamburger')
navBar = document.querySelector('.navbar')
navItem = document.querySelector('.items')
srchBar = document.querySelector('.srch-bar')
navImg = document.querySelector('.logo')



hamburger.addEventListener('click',()=>{
  srchBar.classList.toggle('v-class-resp') ;
  navImg.classList.toggle('v-class-resp') ;
  navItem.classList.toggle('v-class-resp') ;
  navBar.classList.toggle('h-nav-resp') ;
})
