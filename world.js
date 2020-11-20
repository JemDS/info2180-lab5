
$(document).ready(function()
{
    var lookbtn = $('#lookup');
    var lookbtn2 = $('#lookup2');
    var result = $('#result');

   
    lookbtn.on('click',(function (e) 
    {
        e.preventDefault();
        console.log('clicked')

        $('#country').keyup(function(){
            var search = $(this).val();
        })

        $.ajax("http://localhost/info2180-lab5/world.php",  {
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

    