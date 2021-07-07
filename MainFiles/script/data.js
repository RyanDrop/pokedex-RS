// Cores

var colors = [ 
	"#0af" , 
	"#f0f" , 
	"#378" 
];


//------------------------------------------------------------------
var contColor = -1 ;
for( i = 1 ; i < 151 ; i++ ){
	contColor++;
	var color = colors[ contColor ];
	if( color == null||undefined||"" ){
		color = "#555" ;
		console.log( "Faltou cor no pokemon n°: " + i );
	}
    engine( i , color );
}

