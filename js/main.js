/** 
 * 
 * Own partials
 * 
 * **/
//import test from './partials/plugins.js';

//test();

function para() {
    console.log("para: INIT");

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
        setInputElement: ".header-main",
    });

}

para();

