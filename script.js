$(function() {
  $('a').click(function(links) {
    links.preventDefault();
  });
  $('.menu').click(function() {
    $('.sidemenu').css('left', '0');
  });
  $('.cancel').click(function() {
    $('.sidemenu').css('left', '-100%');
  });

  $('.container').click(function() {
    $('.sidemenu').css('left', '-100%')
  })
});

//variables
const favorite = document.getElementsByClassName('favorite');
const cancelAlert = document.getElementsByClassName('alert_cancel');

function addToFavorite() {
  let parent = this.parentNode;
  let grandParent = parent.parentNode;
  let firstChild = grandParent.childNodes[1];
  firstChild.style.opacity = '1';
}

//functions
function cancelAlertFunc() {
  let parent = this.parentNode;
  let grandParent = parent.parentNode;
  let firstChild = grandParent.childNodes[1];
  firstChild.style.opacity = '0';
}

//event listeners
for (i = 0; i < favorite.length; i++) {
  favorite[i].addEventListener('click', addToFavorite)
}

for (i = 0; i < cancelAlert.length; i++) {
  cancelAlert[i].addEventListener('click', cancelAlertFunc)
}

//preloading images
function load() {
  let myImages = document.getElementsByTagName('IMG');
  for (i = 0; i < myImages.length; i++) {
    let allImages = document.createElement('img');
    let imageSrc = [];
    imageSrc.push(myImages[i].src);
    imageSrc.forEach(img => {
      allImages.src = imageSrc;
      allImages.preload = true;
    })
  }
}