let firstName = document.querySelector("[name='firstName']");  
let lastName = document.querySelector("[name='lastName']");  
let email = document.querySelector("[name='email']");  
let passWord = document.querySelector("[name='passWord']");  
let FnameError = document.querySelector(".FnameError");  
let LnameError = document.querySelector(".LnameError");  
let EmailError = document.querySelector(".EmailError");  
let PassError = document.querySelector(".PassError");  

function resetErrorState(inputField, errorElement) {  
    inputField.style.borderColor = "hsl(248, 32%, 49%)";  
    inputField.style.borderWidth = "";  
    inputField.style.backgroundImage = "";  
    errorElement.innerHTML = "";  
    inputField.style.color = "black";  
}  

firstName.addEventListener("input", () => resetErrorState(firstName, FnameError));  
lastName.addEventListener("input", () => resetErrorState(lastName, LnameError));  
email.addEventListener("input", () => resetErrorState(email, EmailError));  
passWord.addEventListener("input", () => resetErrorState(passWord, PassError));  

// Clear email input field if it contained an error on focus  
email.addEventListener("focus", () => {  
    if (EmailError.innerHTML !== "") {  
        email.value = ""; // Clear the value only if there's an error  
    }  
});  

document.forms[0].onsubmit = function (e) {  
    let fNameValid = false;  
    let lNameValid = false;  
    let emailValid = false;  
    let passValid = false;  

    if (firstName.value !== "") {  
        fNameValid = true;  
        firstName.style.borderColor = "hsl(248, 32%, 49%)";  
        FnameError.innerHTML = "";  
    } else {  
        FnameError.innerHTML = "First Name cannot be empty";  
        firstName.style.borderColor = "hsl(0, 100%, 74%)";  
        firstName.style.borderWidth = "2px";  
        firstName.style.backgroundImage = "url('images/icon-error.svg')";  
        firstName.style.backgroundRepeat = "no-repeat";  
        firstName.style.backgroundPosition = "94% 50%";  
        firstName.placeholder = "";  
    }  

    if (lastName.value !== "") {  
        lNameValid = true;  
    } else {  
        LnameError.innerHTML = "Last Name cannot be empty";  
        lastName.style.borderColor = "hsl(0, 100%, 74%)";  
        lastName.style.borderWidth = "2px";  
        lastName.style.backgroundImage = "url('images/icon-error.svg')";  
        lastName.style.backgroundRepeat = "no-repeat";  
        lastName.style.backgroundPosition = "94% 50%";  
        lastName.placeholder = "";  
    }  

    // Regular expression for basic email validation  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  

    if (email.value === "") {  
        EmailError.innerHTML = "Looks like this is not an email";  
        email.style.borderColor = "hsl(0, 100%, 74%)";  
        email.style.borderWidth = "2px";  
        email.style.backgroundImage = "url('images/icon-error.svg')";  
        email.style.backgroundRepeat = "no-repeat";  
        email.style.backgroundPosition = "94% 50%";  
        email.placeholder = "";  
        email.value = "email@example.com";  
        email.style.color = "hsl(0, 100%, 74%)";  

    } else if (!emailPattern.test(email.value)) {  
        EmailError.innerHTML = "Please provide a valid email address";  
        email.style.borderColor = "hsl(0, 100%, 74%)";  
        email.style.borderWidth = "2px";  
        email.style.backgroundImage = "url('images/icon-error.svg')";  
        email.style.backgroundRepeat = "no-repeat";  
        email.style.backgroundPosition = "94% 50%";  
        email.placeholder = "";  
        email.value = "email@example.com";  
        email.style.color = "hsl(0, 100%, 74%)";  
    } else {  
        emailValid = true;  
    }  

    if (passWord.value !== "") {  
        passValid = true;  
    } else {  
        PassError.innerHTML = "Password cannot be empty";  
        passWord.style.borderColor = "hsl(0, 100%, 74%)";  
        passWord.style.borderWidth = "2px";  
        passWord.style.backgroundImage = "url('images/icon-error.svg')";  
        passWord.style.backgroundRepeat = "no-repeat";  
        passWord.style.backgroundPosition = "94% 50%";  
        passWord.placeholder = "";  
    }  

    if (fNameValid === false || lNameValid === false || emailValid === false || passValid === false) {  
        e.preventDefault();  
    }  
};


// ---------------------------------------------------------------------------------------------------
// ^: Asserts the start of the string.
// [^\s@]+: Matches one or more characters that are not whitespace (\s) and not the @ symbol. This corresponds to the local part of the email (the part before the @).
// @: Matches the literal @ character.
// [^\s@]+: Again matches one or more characters that are not whitespace and not the @. This corresponds to the domain name of the email (the part after the @ but before the dot).
// \.: Matches a literal dot (.) which separates the domain name from the top-level domain (like .com, .org, etc.).
// [^\s@]+: Matches one or more characters that are not whitespace and not the @. This will match the top-level domain.
// $: Asserts the end of the string.
// test() method: The .test() method is a built-in function of regular expression objects in JavaScript. It takes a string as an argument and checks whether the string matches the regular expression. It returns true if there is a match and false if there is not.

// ! (logical NOT operator): The ! operator negates the boolean value returned by the test() method. It essentially flips true to false and vice versa. Thus:

// If emailPattern.test(email.value) returns true (indicating that the email format matches the pattern), !emailPattern.test(email.value) will return false.
// If emailPattern.test(email.value) returns false (indicating the email format does not match the pattern), !emailPattern.test(email.value) will return true.