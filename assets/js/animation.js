const animeSkillPlay = () => {
    return anime({
        targets: ".box-skill",
        autoplay: false,
        opacity: 1,
        scale: 1,
        rotate: {
            value: (el, i) => {
                if (i == 0) {
                    return -10;
                } else if (i == 1) {
                    return -10;
                } else {
                    return 20;
                }
            }
        },
        right: {
            value: (el, i) => {
                if (i == 0) {
                    return "65%";
                } else if (i == 1) {
                    return "0%";
                } else {
                    return "5%";
                }
            },

        },
        bottom: {
            value: (el, i) => {
                if (i == 0) {
                    return "45%";
                } else if (i == 1) {
                    return "55%";
                } else {
                    return "38%";
                }
            },
        },
        delay: anime.stagger(150)

    });
};


const animeSkillBack = () => {
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

const animeContactPlay = () => {
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


const animeContactBack = () => {
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


const animeNoGlasses = () => {
    return anime({
        targets: ".rizkyzet.glasses",
        autoplay: false,
        opacity: anime.random(0.7, 0.9),
        duration: 500,
        direction: 'alternate',
        

    });
}


export {
    animeSkillPlay,
    animeSkillBack,
    animeContactPlay,
    animeContactBack,
    animeNoGlasses
}