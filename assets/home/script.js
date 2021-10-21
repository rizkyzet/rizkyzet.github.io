// new TypeIt('.greeting-box', {
//     strings: ['HELLO IM,', '<h1 class="p-0 m-0 d-inline">MOCHAMAD RIZKY</h1>', 'AN COMPUTER SCIENCE STUDENT WHO LOVE CODE & DESIGN'],
//     speed: 50,
// }).go();

new TypeIt('.greeting-box', {
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
    .go();