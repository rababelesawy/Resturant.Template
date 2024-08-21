/*******menu btn on header**** */
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu');

btnMenu.onclick = () =>{
    btnMenu.classList.toggle('fa-times'); //colse
    menu.classList.toggle('active')
}


/*******end menu btn on header**** */

/**********j quary popup */
$(document).ready(function(){

    $('.show-popup').click(function(){
        $('.popup').fadeIn();

    });
    $('#close').click(function(){
        $('.popup').fadeOut();


    });
    /*************flip******** */

    $(document).ready(function(){
        $("#flip").click(function(){
          $("#panel").slideDown("slow");
        });
      });



});


/****************end jquary popup********** */

$(window).scroll(function(){
if ($(window).scrollTop() >= 1000){
    $('.scroll-to-top').fadeIn(400);

}else{
    $('.scroll-to-top').fadeOut(400);
}
});
//click on scroll to top to go up//
$('.scroll-to-top').click(function(event){
   event.preventDefault();// prevent the page to reload 
   $('html, body').animate({
    scrollTop:0
   }, 1000);
   });








function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");

return true;1
}
else
{
alert("You have entered an invalid email address!");

return false;
}



}
function validateform()
{
   

   var name=document.myform.name.value;  
   var phone = document.myform.phone.value;
    
     
if (name==null || name==""){  
    alert(" Please Enter Your Full Name ");  
    return false;

}else if(phone == null  || phone ==""){
    alert(" Please Enter Your phone ");  
    return false;
}
else if(phone.length<11)
{
    alert("phone  must be at most 11 number long.");  
    return false;  
}

}


$( "#myform " ).validate({
    rules: {
        myselect: { required: true }
    }
});
