 $(document).ready(function(){
       $('#black').width(200);
       $('#black').mouseover(function()
       {
          $(this).css("cursor","pointer");
          $(this).animate({width: "500px"}, 'slow');
       });
    
    $('#black').mouseout(function()
      {   
          $(this).animate({width: "200px"}, 'slow');
       });
   });