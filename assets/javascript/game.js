// var element = document.getElementById("header");
// element.innerHTML = "New Header";
 var letter_click = ""
 var chosen_letter_global = ""
 var counter_to_hang = 0;

 var HangManImageArray = ['assets/images/Drawing1.png' , 'assets/images/Drawing2.png' , 
'assets/images/Drawing3.png' ,'assets/images/Drawing4.png' , 'assets/images/Drawing5.png',
'assets/images/Drawing6.png', 'coffin.jpeg']

 var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var html_letters = ["letter_a", "letter_b", "letter_c", "letter_d", "letter_e", "letter_f", "letter_g", "letter_h", "letter_i", "letter_j", "letter_k", "letter_l", "letter_m", "letter_n", "letter_o", "letter_p", "letter_q", "letter_r", "letter_s", "letter_t", "letter_u", "letter_v", "letter_w", "letter_x", "letter_y", "letter_z"]
  	
  for (var i = 0; i < letters.length; i++) {
 

   	var element = document.getElementById(html_letters[i]);
   		element.innerHTML = letters[i];
     
}





function applyLetter(letter_click) {
	//increment counter. Game over when it reaches six.
	

	if ( counter_to_hang !== 6){

    for (var l=0;  l<letters.length; l++) {
    	if(letters[l] === letter_click){
    		var id_value = html_letters[l]
    	}
    }
    var chosen_letter = document.getElementById(id_value).value;
    document.getElementById(id_value).style.color = "red";
    // document.write(chosen_letter);

    // var chosen_letter  =  document.getElementsByTagName("DIV")[0].letterClass

    function UpdateUnderlineBand() {
    	var is_a_match = false; 

    	for (var m = 0; m<Chosen_Band.length; m++) {
    		if(Chosen_Band[m] === chosen_letter){
    			Underline_Band_Global[m] = chosen_letter;
    			is_a_match = true;

    		}
    	}
    	if(is_a_match !== true){

    		counter_to_hang++;

    		var array_count = counter_to_hang - 1;
    		
    		document.getElementById("hangman_image").src=HangManImageArray[array_count];
    	}
    	
	// End of Update_Underline function
	}
	function FillInTheBlanks() {

		var element = document.getElementById("fill_in_the_blanks");
		element.innerHTML = Underline_Band_Global;

	// End of UpdateDocument_interna function
	}

    UpdateUnderlineBand();
    FillInTheBlanks();
    //end of IF Statement.
	}
	else{
		var element = document.getElementById("Youre_Dead");
		element.innerHTML = "Youre Dead";
		location.reload();
	}

}
	
function randomEI1() {

	var Bands = [ "PERL JAM", "SMASHING PUMPKINS", "TEARS FOR FEARS", "KID ROCK", "MAROON FIVE", "BRUCE SPRINGSTEIN", "BRUNO MARS", "NATALIE MERCHANT" ];
 	var randomValue = Bands[Math.floor(Math.random() * Bands.length)];
    
    return randomValue;
}



function UnderlineBand() {

	var Underline_Band = []

	
	for (var j=0; j<Chosen_Band.length; j++){
		if(Chosen_Band[j] !== " ") {
			Underline_Band[j] = "__"
		}
		else{
		Underline_Band[j] = "  "	
		}
	}
	
	return Underline_Band;
	
// End of Underline function
}


function UpdateDocument(){

	
	var element = document.getElementById("band");
	element.innerHTML = Chosen_Band;
	
	
	var element = document.getElementById("fill_in_the_blanks");
	element.innerHTML = Underline_Band_Global;

}

function reset_values() {

	location.reload();


}

var Chosen_Band = randomEI1();
var Underline_Band_Global = UnderlineBand();
UpdateDocument();





