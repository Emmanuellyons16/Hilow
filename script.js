$(document).ready(function(){
    var password = "5";
    var input = $("#input").val();
$("#enter").click(function() {


if (password === $("#input").val())
{
    
    $("#apples").text("congragulastions you played yourself");
    alert('suhhdude');
    
}
else{
   if(input > password){
       alert("too high");
   }
}


var name = $("#input").val();

});
});