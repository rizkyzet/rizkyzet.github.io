$('body').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 /50);
    var amountMovedY = (e.pageY * -1 /50);
    var amountMovedXp = (e.pageX * 1 /50);
    var amountMovedYp = (e.pageY * 1 /50);
    var x = (e.pageX * -1 /68);
    var y = (e.pageY * -1 /68);
    console.log('Y'+amountMovedY);
    console.log('X'+amountMovedX);
    // $(this).css('rotateX','('+ amountMovedX +'deg)');
    // $('.asako, .bg-rectangle, .ellipse-line, .polygon').css("transform", "rotateX("+y+"deg)" +" rotateY("+x+"deg)");
   
    $('.rectangle, .ellipse').css({
        "transform": "translate(" + amountMovedX + "px," + amountMovedY + "px)"
      });
    $('.polygon').css({
        "transform": "translate(" + amountMovedXp + "px," + amountMovedYp + "px)"
      });
  
    // $(this).css("transform", "rotateY("+amountMovedX+"deg)");
 
   

});

$('.nav-link').click(function(){
  Swal.fire({
    title: 'Oops!',
    text: 'Web sedang dalam proses :)',
  
    imageUrl: 'img/download.jpeg',
    imageAlt: 'Custom image',
  // backdrop: `
  //   rgba(0,0,123,0.4)
  //   url("img/tenor.gif")
  //   left top
  //   no-repeat
  // `
  })
});