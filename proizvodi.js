$('.uvecaj').hover(function(){
	  $(this).animate({
      width: '400px',
      height: '300px'
    } ,500);}, function()
	{
		    $(this).animate({
      width: '200px',
      height: '150px'
    },500);
	})
