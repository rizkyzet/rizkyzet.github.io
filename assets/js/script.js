import dialog from "./dialog.js"




dialog.firstTyping.go();

const starterTyping = new TypeIt('.greeting-box', {
        speed: 20,
    }).type('<span class="p-0 m-0" style="font-size:12px;">HELLO, IM</span>')
    .break()
    .type('<span class="p-0 m-0 fs-2">MUHAMAD </span>')
    .pause(500)
    .move(-6)
    .delete(1)
    .pause(300)
    .type('OC', {
        speed: 400
    })
    .move(null, {
        to: 'END'
    })
    .type('<span class="p-0 m-0 fs-2">RIZKI</span>')
    .pause(300)
    .delete(1)
    .pause(300)
    .type('<span class="p-0 m-0 fs-2">Y</span>')
    .break()
    .type('<span class="p-0 m-0" style="font-size:12px;">AN COMPUTER SCIENCE STUDENT WHO LOVE CODE & DESIGN</span>')




const mainTyping = new TypeIt('.greeting-box', {
    speed: 10,
}).type('<span class="p-0 m-0" style="font-size:16px;">i used to build a website using PHP, Javascript and CSS</span>')

const contactTyping = new TypeIt('.greeting-box', {
    speed: 10,
}).type('<span class="p-0 m-0" style="font-size:16px;">Get in touch with me...</span>')


const startDialogContainer = document.querySelector('.start-dialog')


let animeSkillPlay = () => {
    return anime({
        targets: ".box-skill",
        autoplay: false,
        opacity: 1,
        scale: 1,
        right: {
            value: (el, i) => {
                if (i == 0) {
                    return "60%";
                } else if (i == 1) {
                    return "0%";
                } else {
                    return "20%";
                }
            },

        },
        bottom: {
            value: (el, i) => {
                if (i == 0) {
                    return "50%";
                } else if (i == 1) {
                    return "55%";
                } else {
                    return "40%";
                }
            },
        },
        delay: anime.stagger(150)

    });
};


let animeSkillBack = () => {
    return anime({
        targets: ".box-skill",
        autoplay: false,
        opacity: 1,
        scale: 0,
        right: {
            value: (el, i) => {
                if (i == 0) {
                    return "30%";
                } else if (i == 1) {
                    return "30%";
                } else {
                    return "30%";
                }
            },

        },
        bottom: {
            value: (el, i) => {
                if (i == 0) {
                    return "50%";
                } else if (i == 1) {
                    return "50%";
                } else {
                    return "50%";
                }
            },
        },
        delay: anime.stagger(150)

    });
};

let animeContactPlay = () => {
    return anime({
        targets: ".icon-contact",
        autoplay: false,
        opacity: 1,
        right: {
            value: (el, i) => {
                if (i == 0) {
                    return "15%";
                } else if (i == 1) {
                    return "20%";
                } else if (i == 2) {
                    return "5%";
                } else if (i == 3) {
                    return "85%";
                } else if (i == 4) {
                    return "70%";
                } else if (i == 5) {
                    return "75%";
                }
            },

        },
        bottom: {
            value: (el, i) => {
                if (i == 0) {
                    return "65%";
                } else if (i == 1) {
                    return "45%";
                } else if (i == 2) {
                    return "55%";
                } else if (i == 3) {
                    return "55%";
                } else if (i == 4) {
                    return "60%";
                } else if (i == 5) {
                    return "45%";
                }
            },
        },
        scale: {
            value: (el, i) => {
                if (i == 0) {
                    return "0.7";
                } else if (i == 1) {
                    return "1.3";
                } else if (i == 2) {
                    return "1";
                } else if (i == 3) {
                    return "0.7";
                } else if (i == 4) {
                    return "0.6";
                } else if (i == 5) {
                    return "1.3";
                }
            },
        },
        delay: anime.stagger(100)

    });
};


let animeContactBack = () => {
    return anime({
        targets: ".icon-contact",
        autoplay: false,
        opacity: 1,
        right: 40,
        bottom: {
            value: 0,
        },
        scale: 0,
        delay: anime.stagger(100)

    });
};



const navSkills = document.querySelector('.nav-skills');
const navHome = document.querySelector('.nav-home');
const navContact = document.querySelector('.nav-contact');



navSkills.addEventListener('click', function (e) {
    if (startDialogContainer) {
        startDialogContainer.remove()
    }
    if (starterTyping.is('started')) {
        starterTyping.reset();
    }
    if(contactTyping.is('started')){
        contactTyping.reset();
    }
    animeSkillPlay().play();
    animeContactBack().play();
    mainTyping.go();
})


navHome.addEventListener('click', function () {
    if (startDialogContainer) {
        startDialogContainer.remove()
    }
    if (mainTyping.is('started')) {
        mainTyping.reset();
    }

    if(contactTyping.is('started')){
        contactTyping.reset();
    }
    animeSkillBack().play();
    animeContactBack().play();
    starterTyping.go();
})

navContact.addEventListener('click', function (e) {
    if (startDialogContainer) {
        startDialogContainer.remove()
    }

    if (starterTyping.is('started')) {
        starterTyping.reset();
    }

    if (mainTyping.is('started')) {
        mainTyping.reset();
    }

    contactTyping.go();
    animeSkillBack().play();
    animeContactPlay().play();

})