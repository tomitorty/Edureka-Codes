
document.addEventListener("DOMContentLoaded", function () {
    const name = document.getElementById('name');

const email = document.getElementById('email');

const password = document.getElementById('password');

const form = document.getElementById('form');

const name_error = document.getElementById('name_error');


form.addEventListener('submit', (e)=>
    letisvalid = true;
    emailError.innerText = "";
    passwordError.InnerText= "";


    {

        if(name.value=== '' || name.value == null )
        
         {
            e.preventDefault();
            name_error.innerHTML ="Name is required";
         }  

        if (password.value.trim() === "") {
            passwordError.innerText = "Password is required";
            isValid = false;
        }  
        if (!isValid) {
            e.preventDefault();
        } else {
            e.preventDefault(); 
            alert("User logged in");
        }

    })

})

    
    
    
    