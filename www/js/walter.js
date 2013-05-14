function ymardamine(n, l)
  		{ 
				var u = Math.floor(n*Math.pow(10,l))/Math.pow(10,l);
				return parseFloat(u);
			}

			$(document).ready(function()
			{
				
				$("#nupp1").click(function()
				{
				
				a = $("#eur").val();
				b = $("#sent").val();
				
				raha = parseInt(a) + (b/100);

        			//document.getElementById('b1').value = ymardamine($("#a1").val() / 0.53, 0);
        			$('#yes').text( ymardamine(raha / 0.53, 0) );
        			$('#yes2').text( $("#eur").val() );
        			$('#yes3').text( $("#sent").val() );

              
    			});
    			
    			
    			

				
			});
