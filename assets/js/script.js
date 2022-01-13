const starterTyping = new TypeIt('.greeting-box', {
        speed: 50,
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
}).type('<span class="p-0 m-0" style="font-size:16px;">Click to see details...</span>')



let animeSkillPlay = () => {
    return anime({
        targets: ".box-skill",
        autoplay: false,
        opacity: 1,
        scale:1,
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
        scale:0,
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




const navSkills = document.querySelector('.nav-skills');
const navHome = document.querySelector('.nav-home');



navSkills.addEventListener('click', function (e) {

    if (starterTyping.is('started')) {
        starterTyping.reset();
    }
    animeSkillPlay().play();
    mainTyping.go();
})


navHome.addEventListener('click', function () {
    if (mainTyping.is('started')) {
        mainTyping.reset();
    }
    animeSkillBack().play();
    starterTyping.go();
})