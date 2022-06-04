
			document.getElementById("clock").addEventListener("mouseenter",function(){
				this.style.backgroundColor="#98777b";
				this.style.color="white";
			});
			document.getElementById("clock").addEventListener("mouseout",function(){
				this.style.backgroundColor="#fbceb1";
				this.style.color="black";
				
			});
			
			setInterval(showtime, 1000);
			function showtime(){
				var date = new Date();
				var hour = date.getHours();
				var min = date.getMinutes();
				var sec = date.getSeconds();
				am_pm = "AM";
				if(hour>12){
					hour = hour-12;
					am_pm="PM";
				}
				if(hour==0){
					hour = 12;
					am_pm="AM";
				}
				
				hour = hour<10?'0' +hour:hour;
				min = min<10?'0' +min:min;
				sec = sec<10?'0' +sec:sec;
				
				var currentTime = hour +":"+ min +":"+ sec +" "+am_pm;
				document.getElementById("clock").innerHTML=currentTime;
			}	
			showtime();
		