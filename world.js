
$(document).ready(function()
{
    var lookbtn = $('#lookup');
    var lookbtn2 = $('#lookup2');
    var result = $('#result');

   
    lookbtn.on('click',(function (e) 
    {
        e.preventDefault();
        console.log('clicked')

        $('#country').on('keyup', function(){
            var searchCou = $(this).val();
        

            $.ajax({
                url: "http://localhost/info2180-lab5/world.php",
                method: "POST",
                data: {country:searchCou},
                success: function(data){
                    $("#result").html(data);
                }
            })

            //.done(function(response){
            //    result.html(response);
            })

            .fail(function(){
                alert('There was a problem loading the database!')
            });  

        })
    })); 
});

    