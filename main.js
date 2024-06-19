const form =document.getElementById("Contacto")
const successmsg =document.getElementById("Success")

form.addEventListener("submit", (e) =>{

    const firstName =document.getElementById("Firstname").value.trim()
    const lastName =document.getElementById("Lastname").value.trim()
    const email =document.getElementById("Email").value.trim()
    const query = document.querySelector('input[name="QueryT"]:checked')
    const message = document.getElementById("Message").value.trim()
    const consent = document.getElementById("Consent").checked

    const alert = document.querySelectorAll(".Alert")

    let isValid = true;

    //Validacion nombre

    if (firstName=== ""){
        isValid =false
        document.querySelector("#Firstname + .Alert").style.display = "block"
        document.querySelector("#Firstname").style.border = "1px solid var(--naranja)"
    }else{
        document.querySelector("#Firstname + .Alert").style.display = "none"
        document.querySelector("#Firstname").style.border = "1px solid var(--gris)"
    }
    

    //Validacion apellido

    if (lastName=== ""){
        isValid =false
        document.querySelector("#Lastname + .Alert").style.display = "block"
        document.querySelector("#Lastname").style.border = "1px solid var(--naranja)"
    }else
        document.querySelector("#Lastname + .Alert").style.display = "none"
        document.querySelector("#Lastname").style.border = "1px solid var(--gris)"

    //Validacion email
    if(!isValidEmail(email)){
        document.querySelector("#Email + .Alert").style.display = "block"
        document.querySelector("#Email").style.border = "1px solid var(--naranja)"
    }else{
        document.querySelector("#Email + .Alert").style.display = "none"
        document.querySelector("#Email").style.border = "1px solid var(--gris)"
    }

    //tipo de query
    if(!query){
        isValid =false

        document.querySelector(".Radio + .Alert").style.display = "block"
    } else{
        document.querySelector(".Radio + .Alert").style.display = "none"
    }

    //mensaje
    if(message === ""){
        isValid = false

        document.querySelector("#Message + .Alert").style.display = "block"
        document.querySelector("#Message").style.display = "1px solid var(--naranja)"
    } else{
        document.querySelector("#Message + .Alert").style.display = "none"
        document.querySelector("#Message").style.display = "1px solid var(--gris)"
    }
    
    //Consent
    if(!consent){
        isValid = false

        formAlert[5].classList.add("Form-error")
    } else{
        formAlert[5].classList.remove("Form-error")
    }

    //isVALID

    if(isValid){
        successMessage.classList.add("active")
        form.reset()
    }
})

    //email
    function isValidEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }
