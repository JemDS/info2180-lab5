window.onload= function()
{
	var lookbtn = document.querySelectorAll('#lookup');

	//Event Listener for Lookup buttons//

	lookbtn.forEach(lookbtn => {
		lookbtn.addEventListener("click", function(e){ 
			e.preventDefault();
			console.log('clicked')

	   fetch("http://localhost/info2180-lab5/world.php")
            .then(response => {
                if (response.ok)
                {
                    return response.text()
                } 
                else
                {
            	   return Promise.reject('something went wrong!')
                }
             })

            .then(data => {
        	   let result = document.querySelector('#result');
                result.innerHTML = data;
            })

            .catch(error => console.log('There was an error: ' + error));
        });
    });
}