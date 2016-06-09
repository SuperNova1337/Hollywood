<script>
		function detectmob() { 
				 if( navigator.userAgent.match(/Android/i)
				  || navigator.userAgent.match(/webOS/i)
				  || navigator.userAgent.match(/iPhone/i)
				  || navigator.userAgent.match(/iPad/i)
				  || navigator.userAgent.match(/iPod/i)
				  || navigator.userAgent.match(/BlackBerry/i)
				  || navigator.userAgent.match(/Windows Phone/i)
				 ){return true;}
				 else {return false;}
				}
		
		function checkPhone(){ //Anropa funktionen checkPhone() med <body onLoad="checkPhone()">

			if(detectmob()){ 
			  // Kod för att mobilanpassa sidan
				
				// Exempelvis:
  				element=document.getElementById("test");
  				deals = element.childNodes[7];
  				diablo = element.childNodes[11];
  				
  				element.insertBefore(deals,diablo);
			}
		}
		</script>


		function detectmob() { 
           if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
           ){return true;}
           else {return false;}
       }


function onSiteLoad(id){
    if(detectmob()){

       document.getElementById("right1").style.marginLeft = " 420px";
    }
}