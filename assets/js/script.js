import {
    firstTyping,
    greetingTyping,
    skillsTyping,
    contactTyping,
    javascriptTyping,
    phpTyping,
    cssTyping
} from "./dialog.js"
import {
    animeSkillPlay,
    animeSkillBack,
    animeContactPlay,
    animeContactBack,
    animeNoGlasses,
} from "./animation.js"

const startDialogContainer = document.querySelector('.start-dialog')
const navSkills = document.querySelector('.nav-skills');
const navHome = document.querySelector('.nav-home');
const navContact = document.querySelector('.nav-contact');
const navSkillsJavascript = document.querySelector('.skill-js');
const navSkillsPHP = document.querySelector('.skill-php');
const navSkillsCSS = document.querySelector('.skill-css');

firstTyping.go();


navHome.addEventListener('click', function () {
    animeNoGlasses().play();
    if (startDialogContainer) {
        startDialogContainer.remove()
    }
    if (skillsTyping.is('started')) {
        skillsTyping.reset();
    }

    if (contactTyping.is('started')) {
        contactTyping.reset();
    }

    resetDialogSkills();

    animeSkillBack().play();
    animeContactBack().play();
    greetingTyping.go();
})


navSkills.addEventListener('click', function (e) {

   console.log( animeNoGlasses().play());

    if (startDialogContainer) {
        startDialogContainer.remove()
    }
    if (greetingTyping.is('started')) {
        greetingTyping.reset();
    }
    if (contactTyping.is('started')) {
        contactTyping.reset();
    }

    resetDialogSkills();

    animeSkillPlay().play();
    animeContactBack().play();
    skillsTyping.go();
})


navContact.addEventListener('click', function (e) {
    animeNoGlasses().play();
    if (startDialogContainer) {
        startDialogContainer.remove()
    }

    if (greetingTyping.is('started')) {
        greetingTyping.reset();
    }

    if (skillsTyping.is('started')) {
        skillsTyping.reset();
    }

    resetDialogSkills();

    contactTyping.go();
    animeSkillBack().play();
    animeContactPlay().play();

})


// Skills

navSkillsJavascript.addEventListener('click', function () {
    if (skillsTyping.is('started')) {
        skillsTyping.reset();
    }
    if (phpTyping.is('started')) {
        phpTyping.reset();
    }
    if (cssTyping.is('started')) {
        cssTyping.reset();
    }

    javascriptTyping.go();
})

navSkillsPHP.addEventListener('click', function () {
    if (skillsTyping.is('started')) {
        skillsTyping.reset();
    }
    if (javascriptTyping.is('started')) {
        javascriptTyping.reset();
    }
    if (cssTyping.is('started')) {
        cssTyping.reset();
    }


    phpTyping.go();
})

navSkillsCSS.addEventListener('click', function () {
    if (skillsTyping.is('started')) {
        skillsTyping.reset();
    }
    if (javascriptTyping.is('started')) {
        javascriptTyping.reset();
    }

    if (phpTyping.is('started')) {
        phpTyping.reset();
    }


    cssTyping.go();
})


const resetDialogSkills = () => {
    if (cssTyping.is('started')) {
        cssTyping.reset();
    }
    if (javascriptTyping.is('started')) {
        javascriptTyping.reset();
    }

    if (phpTyping.is('started')) {
        phpTyping.reset();
    }
}