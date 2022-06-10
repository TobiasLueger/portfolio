/**
 * onPageLoad
**/

window.onload = function() {
  var show = localStorage.getItem('pageOverlapp');
  if(!show){
    document.querySelector('.page-overlapp').style.display = 'flex';
    setTimeout(function(){ 
      document.querySelector('.header').style.opacity = '1';
    }, 4000);
  } else {
    document.querySelector('.header').style.opacity = '1';
  }
  localStorage.setItem('pageOverlapp', 'true');
  document.querySelector('#page-wrapper').style.opacity = '1';
  
}

/**
 * initialize components
 */
function loadComponents() {

    if (document.querySelector('.header')) {
      import('../components/header/header').then(
        component => {
          component.init();
        }
      );
    } 

    if (document.querySelector('#page-wrapper')) {
      import('../components/menu-sections/menu-sections').then(
        component => {
          component.init();
        }
      );
    } 
	
}

document.addEventListener('DOMContentLoaded', function(event) {
    //the event occurred
    loadComponents();
    console.log("page is ready")
  })


