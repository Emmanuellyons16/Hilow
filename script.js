$(document).ready(function(){

$("#enter").click(function() {
    var password = 6 ;
    var input = $("#input").val();

if (password === input)
{
    
    $("#apples").text("congragulastions you played yourself");
    alert('suhhdude');
    
}

else if(input > password){
       alert("too high");
   }

else if(input < password){
        alert("too low");
    }
    


});
});