function validateForm()
{
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value;

    let nameError=document.getElementById("nameError");
    let emailError=document.getElementById("emailError");
    let passError=document.getElementById("passError");

    nameError.innerText="";
    emailError.innerText="";
    passError.innerText="";

    let isvalid= true;
    let emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(name==="")
    {
        nameError.innerText="* Name is required.";
        isvalid= false;
    }
    if(!emailPattern.test(email))
    {
        emailError.innerText="* Valid email is required.";
        isvalid = false;
    }
    if(password.length < 8)
    {
        passError.innerText="* Password must have to at least 8 character.";
        isvalid= false;
    }


    return isvalid;

}