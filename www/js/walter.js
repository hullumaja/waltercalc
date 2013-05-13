function ymardamine(n, l)
  		{ 
				var u = Math.floor(n*Math.pow(10,l))/Math.pow(10,l);
				return parseFloat(u);
			}

			$(document).ready(function()
			{
				
				$("#nupp1").click(function()
				{

        			//document.getElementById('b1').value = ymardamine($("#a1").val() / 0.53, 0);
        			$('#yes').text( ymardamine($("#a1").val() / 0.53, 0) );
        			$('#yes2').text( $("#a1").val() );
        			
              $('.hidn').fadeIn(1);
              
    			});
    			
    			$("#slide").click(function()
				{

        			$("#part1").animate({width:'0px'}, function() {
    $("#part1").css('display','none');
  });
        			$("#part2").animate({width:'320px'});
              
    			});
    			

				
			});
