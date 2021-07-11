// Cores

var colors = [ 
	"#3FD07C" , 
	"#3FD07C" , 
	"#3FD07C" ,
	"#F44B4B" , 
	"#F44B4B" , 
	"#F44B4B" ,
	"#40CAE6" , 
	"#40CAE6" , 
	"#40CAE6" ,
	"#20CB22" , 
	"#20CB22" , 
	"#20CB22" ,
	"#D5E200" , 
	"#D5E200" , 
	"#D5E200" ,
	"#FEB931" , 
	"#FEB931" , 
	"#FEB931" ,
	"#FFCC7F" , 
	"#FFCC7F" ,
	"#E78B00" ,
	"#E78B00" , 
	"#BD71FF" , 
	"#BD71FF" ,
	"#EAF015s" , 
	"#EAF015s" , 
	"#C9C43C" ,
	"#C9C43C" , 
	"#78C5FF" ,
	"#78C5FF" ,
	"#78C5FF" , 
	"#AA7AD8" ,
	"#AA7AD8" ,
	"#AA7AD8" ,
	"#E599D7" ,
	"#E599D7" ,
	"#DD5C3B" ,
	"#FAF67E" ,
	"#ECCBE6" ,
	"#ECCBE6" ,
	"#932EB4" ,
	"#932EB4" ,
	"#495EBA" ,
	"#495EBA" ,
	"#495EBA" ,
	"#FFB52F" ,
	"#FFB52F" ,
	"#AD65E2" ,
	"#AD65E2" ,
	"#B87B14" ,
	"#B87B14" ,
	"#C3C497" ,
	"#C3C497" ,
	"#F9CD24" ,
	"#5986EF" ,
	"#E09F20" ,
	"#E09F20" ,
	"#FFA11A" ,
	"#FFA11A" ,
	"#006BD8" ,
	"#006BD8" ,
	"#006BD8" ,
	"#DDE231" ,
	"#DDE231" ,
	"#DDE231" ,
	"#579CAA" ,
	"#579CAA" ,
	"#579CAA" ,
	"#7BEA39" ,
	"#7BEA39" ,
	"#7BEA39" ,
	"#39E1EA" ,
	"#39E1EA" ,
	"#64787A" ,
	"#64787A" ,
	"#64787A" ,
	"#FF6900" ,
	"#FF6900" ,
	"#FAB3FF" ,
	"#FAB3FF" ,
	"#99BEBE" ,
	"#99BEBE" ,
	"#9E9281" ,
	"#E6A13F" ,
	"#E6A13F" ,
	"#8DBAC6" ,
	"#8DBAC6" ,
	"#C396FF" ,
	"#C396FF" ,
	"#8D6BB7" ,
	"#8D6BB7" ,
	"#8D6BB7" ,
	"#6332A0" ,
	"#6332A0" ,
	"#646A8C" ,
	"#E5E400" ,
	"#E5E400" ,
	"#FF7B00" ,
	"#FF7B00" ,
	"#E96D50" ,
	"#E96D50" ,
	"#F4BE9D" ,
	"#F4BE9D" ,
	"#525252" ,
	"#525252" ,
	"#958979" ,
	"#958979" ,
	"#EC73D8" ,
	"#9116CE" ,
	"#9116CE" ,
	"#545057" ,
	"#545057" ,
	"#EA9CF1" ,
	"#5281DA" ,
	"#B08401" ,
	"#2FC8DE" ,
	"#2FC8DE" ,
	"#DF6316" ,
	"#DF6316" ,
	"#E2D322" ,
	"#E2D322" ,
	"#F79CED" ,
	"#7CE96D" ,
	"#A550E7" ,
	"#F4DA1A" ,
	"#FD5312" ,
	"#5E5C4D" ,
	"#E0A93E" ,
	"#EC9640" ,
	"#447EDB" ,
	"#42B0EA" ,
	"#B7A1F8" ,
	"#EAA46A" ,
	"#3AA2EA" ,
	"#DEDD08" ,
	"#E77713" ,
	"#E6538B" ,
	"#6BB9EE" ,
	"#6BB9EE" ,
	"#BC8201" ,
	"#BC8201" ,
	"#997BCB" ,
	"#4C94C8" ,
	"#2065C9" ,
	"#F1ED2B" ,
	"#F9D024" ,
	"#6982F1" ,
	"#6982F1" ,
	"#F9AD24" ,
	"#A05ED0" ,
	"#F1A5FF" 
];

// REM img Width Height

var wh = [
	 , 		//1
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 , 		//10
	 , 
	 ,
	 , 
	 , 
	 ,
	 , 
	 , 
	 ,
	 , 
	 , 		//20
	 ,
	 , 
	 , 
	 ,
	 , 
	 , 
	 ,
	 , 
	 ,
	 , 		//30
	 , 
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 , 		//40
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 , 		//50
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 , 		//60
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 , 		//70
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 , 		//80
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 , 		//90
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 , 		//100
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 , 		//110
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 , 		//120
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 , 		//130
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 , 		//140
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 ,
	 	  //----151
];



//------------------------------------------------------------------
var cont = -1 ;
var i = 0;

function delay( ){
	
	if( i > 149 ){ clearInterval( loop ); } //149
	
	cont++;
	i++;
	var color = colors[ cont ];
	var rem = wh[ cont ];
    engine( 0 , i , color , rem );
   
}

var loop = window.setInterval( "delay()" , 160 );
