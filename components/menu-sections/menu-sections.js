const _ = {
	defaults: {
		componentSelector: '.header',
        pluginOptions: {
            selectors: {
                isActive: 'is-active',
                noScroll: 'no-scroll'
            }
        }
	}
};

const o = _.defaults;

function  bindListeners() {
	
    const navPoints = document.querySelectorAll('.section-first .card a');

    const defaultSection = document.querySelector('.section-first');
    const meSection = document.querySelector('.section-me');
    const projectsSection = document.querySelector('.section-projects');
    const contactSection = document.querySelector('.section-contact');

    const closeButtons = document.querySelectorAll('.section__close');
    
    navPoints.forEach(item => {
        item.addEventListener('click', event => {
          
            console.log(event.target.parentNode.parentNode.innerText);

            if (event.target.parentNode.parentNode.innerText === "ÜBER MICH") {
                console.log(true, "ÜBER MICH");
                meSection.classList.add(o.pluginOptions.selectors.isActive);
                defaultSection.classList.add(o.pluginOptions.selectors.noScroll);
                
            }

            if (event.target.parentNode.parentNode.innerText === "PROJEKTE") {
                console.log(true, "PROJEKTE");
                projectsSection.classList.add(o.pluginOptions.selectors.isActive);
                defaultSection.classList.add(o.pluginOptions.selectors.noScroll);
            }

            if (event.target.parentNode.parentNode.innerText === "KONTAKT") {
                console.log(true, "KONTAKT");
                contactSection.classList.add(o.pluginOptions.selectors.isActive);
                defaultSection.classList.add(o.pluginOptions.selectors.noScroll);
            }

        })
    })

    closeButtons.forEach(item => {
        item.addEventListener('click', event => {
          
            console.log(event.target.parentNode);

            if (event.target.parentNode.classList.contains('section-me')) {
                console.log(true, "ÜBER MICH");
                meSection.classList.remove(o.pluginOptions.selectors.isActive);
                defaultSection.classList.remove(o.pluginOptions.selectors.noScroll);
                
            }

            if (event.target.parentNode.classList.contains('section-projects')) {
                console.log(true, "PROJEKTE");
                projectsSection.classList.remove(o.pluginOptions.selectors.isActive);
                defaultSection.classList.remove(o.pluginOptions.selectors.noScroll);
            }

            if (event.target.parentNode.classList.contains('section-contact')) {
                console.log(true, "KONTAKT");
                contactSection.classList.remove(o.pluginOptions.selectors.isActive);
                defaultSection.classList.remove(o.pluginOptions.selectors.noScroll);
            }

        })
    })
}

export function init() {
	bindListeners();
    console.log("menu-sections init");

         
}

