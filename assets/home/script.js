// new TypeIt('.greeting-box', {
//     strings: ['HELLO IM,', '<h1 class="p-0 m-0 d-inline">MOCHAMAD RIZKY</h1>', 'AN COMPUTER SCIENCE STUDENT WHO LOVE CODE & DESIGN'],
//     speed: 50,
// }).go();

new TypeIt('.greeting-box', {
        speed: 50,
    }).type("Hello im,")
    .break()
    .type('<span class="p-0 m-0 fs-1">MUHAMAD </span>')
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
    .type('<span class="p-0 m-0 fs-1">RIZKI</span>')
    .pause(300)
    .delete(1)
    .pause(300)
    .type('<span class="p-0 m-0 fs-1">Y</span>')
    .break()
    .type('AN COMPUTER SCIENCE STUDENT WHO LOVE CODE & DESIGN')
    .go();