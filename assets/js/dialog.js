const firstTyping = new TypeIt('.start-dialog-box', {
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

const greetingTyping = new TypeIt('.greeting-box', {
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

const skillsTyping = new TypeIt('.greeting-box', {
    speed: 10,
}).type('<span class="p-0 m-0" style="font-size:16px;">i used to build a website using PHP, Javascript and CSS</span>')

const contactTyping = new TypeIt('.greeting-box', {
    speed: 10,
}).type('<span class="p-0 m-0" style="font-size:16px;">Get in touch with me...</span>');

const javascriptTyping = new TypeIt('.greeting-box', {
    speed: 10,
}).type('<span class="p-0 m-0" style="font-size:16px;">Basic Javascript, DOM Manipulation, Event Listeners and Javascript Async (such as Promise, Async-Await and Fetch API) and some little bit knowledge (still learn it) about framework vuejs and expressjs</span>');

const phpTyping = new TypeIt('.greeting-box', {
    speed: 10,
}).type('<span class="p-0 m-0" style="font-size:16px;">i use framework such as laravel and codeigniter to built php website, on laravel i understand to handle Migration, Queue, Authentication (Basic Auth and Socialite), Scheduler, Mail, Livewire library.</span>');

const cssTyping = new TypeIt('.greeting-box', {
    speed: 10,
}).type('<span class="p-0 m-0" style="font-size:16px;">CSS, Position, Flexbox, Float, Margin, Padding, and some CSS Animation and bootstrap, Grid, Flexbox, and Bootstrap Component (Alert,Table, Navbar, Card)</span>');

export  {
    firstTyping,
    greetingTyping,
    skillsTyping,
    contactTyping,
    javascriptTyping,
    phpTyping,
    cssTyping,
};