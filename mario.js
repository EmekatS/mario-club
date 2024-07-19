function validateEmail(email) {  
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    return pattern.test(email);  
}  

let eMail = document.getElementById("e-mail");  
let error = document.getElementById("error-message");  

function validate() {  
    if (!validateEmail(eMail.value)) {  
        error.style.display = "block";  
        eMail.focus();  
        eMail.style.border = "2px solid red";  
        return false;  
    } else {  
        error.style.display = "none"; // Clear error message  
        eMail.style.border = "1px solid #ccc"; // Reset border  
        return true;  
    }  
}