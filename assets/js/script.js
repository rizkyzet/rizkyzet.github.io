import {
    firstTyping,
    greetingTyping,
    skillsTyping,
    contactTyping
} from "./dialog.js"
import {
    animeSkillPlay,
    animeSkillBack,
    animeContactPlay,
    animeContactBack
} from "./animation.js"

const startDialogContainer = document.querySelector('.start-dialog')
const navSkills = document.querySelector('.nav-skills');
const navHome = document.querySelector('.nav-home');
const navContact = document.querySelector('.nav-contact');

firstTyping.go();


navHome.addEventListener('click', function () {
    if (startDialogContainer) {
        startDialogContainer.remove()
    }
    if (skillsTyping.is('started')) {
        skillsTyping.reset();
    }

    if (contactTyping.is('started')) {
        contactTyping.reset();
    }
    animeSkillBack().play();
    animeContactBack().play();
    greetingTyping.go();
})


navSkills.addEventListener('click', function (e) {
    if (startDialogContainer) {
        startDialogContainer.remove()
    }
    if (greetingTyping.is('started')) {
        greetingTyping.reset();
    }
    if (contactTyping.is('started')) {
        contactTyping.reset();
    }
    animeSkillPlay().play();
    animeContactBack().play();
    skillsTyping.go();
})


navContact.addEventListener('click', function (e) {
    if (startDialogContainer) {
        startDialogContainer.remove()
    }

    if (greetingTyping.is('started')) {
        greetingTyping.reset();
    }

    if (skillsTyping.is('started')) {
        skillsTyping.reset();
    }

    contactTyping.go();
    animeSkillBack().play();
    animeContactPlay().play();

})