$('body').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 /50);
    var amountMovedY = (e.pageY * -1 /50);
    var amountMovedXp = (e.pageX * 1 /50);
    var amountMovedYp = (e.pageY * 1 /50);
    var x = (e.pageX * -1 /68);
    var y = (e.pageY * -1 /68);
    console.log('Y'+amountMovedY);
    console.log('X'+amountMovedX);
   
    $('.rectangle, .ellipse').css({
        "transform": "translate(" + amountMovedX + "px," + amountMovedY + "px)"
      });
    $('.polygon').css({
        "transform": "translate(" + amountMovedXp + "px," + amountMovedYp + "px)"
      });
  
   

});

$('.nav-link').click(function(){
  Swal.fire({
    title: 'Oops!',
    text: 'Web sedang dalam proses :)',
  
    imageUrl: 'img/download.jpeg',
    imageAlt: 'Custom image',

  })
});