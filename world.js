
$(document).ready(function()
{
    var lookbtn = $('#lookup');
    var lookbtn2 = $('#lookup2');
    var result = $('#result');
    var search =$('#country').val();
   
    lookbtn.on('click',(function (e) 
    {
        e.preventDefault();
        console.log('clicked')


        $.ajax("http://localhost/info2180-lab5/world.php?search",  {
            method: "post",
        })

        .done(function(response){
            result.html(response);
        })

        .fail(function(){
            alert('There was a problem loading the database!')
        });  
    })); 


        lookbtn2.on('click',(function (e) 
    {
        e.preventDefault();
        console.log('clicked')

        $.ajax("http://localhost/info2180-lab5/world.php?search",  {
            method: "post",
        })

        .done(function(response){
            result.html(response);
        })

        .fail(function(){
            alert('There was a problem loading the database!')
        });  
    })); 
});

    