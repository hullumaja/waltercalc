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
				
				if (a.length == 0)
				{
				alert('Palun täida väljad!');
				$("#nupp1").attr('href','');
				}
				else if (a.length > 0)
				{
				$("#nupp1").attr('href','#page2');
				}
				
				if (b.length > 0)
				{
				$("#yes5").text('.');
				}
				
				raha = parseInt(a) + (b/100);

        			//document.getElementById('b1').value = ymardamine($("#a1").val() / 0.53, 0);
        			$('#r1').text( ymardamine(raha / 0.53, 0) );
        			$('#r2').text( ymardamine(raha / 0.73, 0) );
        			$('#r3').text( ymardamine(raha / 1.73, 0) );
        			$('#r4').text( ymardamine(raha / 2.37, 0) );
        			$('#yes2').text( $("#eur").val() );
        			$('#yes3').text( $("#sent").val() );

              
    			});
    			
    			
    			
    			$("#reset").click(function()
				{
				
				
				
				$("#eur").val('');
				$("#sent").val('');
				
				
        			$('#r1').empty();
        			$('#r2').empty();
        			$('#r3').empty();
        			$('#r4').empty();
        			
        			$('#yes2').empty();
        			$('#yes3').empty();
        			$('#yes5').empty();


              
    			});
    			
    			

				
			});
