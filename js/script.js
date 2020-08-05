const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const submit = document.querySelector('#submit');


function validate() {
    let result = true;

    //CHECK FIRST NAME IS NOT EMPTY
    if (fname.value === "") {
        fname.style.border = "1px solid red";
        fname.parentNode.querySelector('.err_img').style.display = "block";
        fname.parentNode.querySelector('.err_msg').style.display = "block";
        fname.parentNode.querySelector('.err_msg').innerHTML = "First Name can not be empty";
        result = false;
    } else {
        fname.style.borderColor = "var(--form-input-border)";
        fname.parentNode.querySelector('.err_img').style.display = "none";
        fname.parentNode.querySelector('.err_msg').style.display = "none";
    }
    
    //CHECK LAST NAME IS NOT EMPTY
    if (lname.value === "") {
        lname.style.border = "1px solid red";
        lname.parentNode.querySelector('.err_img').style.display = "block";
        lname.parentNode.querySelector('.err_msg').style.display = "block";
        lname.parentNode.querySelector('.err_msg').innerHTML = "Last Name can not be empty";
        result = false;
    } else {
        lname.style.borderColor = "var(--form-input-border)";
        lname.parentNode.querySelector('.err_img').style.display = "none";
        lname.parentNode.querySelector('.err_msg').style.display = "none";
    }

    //CHECK EMAIL IS NOT EMPTY
    if (email.value === "") {
        email.style.border = "1px solid red";
        email.parentNode.querySelector('.err_img').style.display = "block";
        email.parentNode.querySelector('.err_msg').style.display = "block";
        email.parentNode.querySelector('.err_msg').innerHTML = "Email Address can not be empty";
        result = false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.style.border = "1px solid red";
        email.parentNode.querySelector('.err_img').style.display = "block";
        email.parentNode.querySelector('.err_msg').style.display = "block";
        email.parentNode.querySelector('.err_msg').innerHTML = "Looks like this is not an email";
        result = false;
    } else {
        email.style.borderColor = "var(--form-input-border)";
        email.parentNode.querySelector('.err_img').style.display = "none";
        email.parentNode.querySelector('.err_msg').style.display = "none";
    }

    
    //CHECK PASSWORD IS NOT EMPTY
    if (pass.value === "") {
        pass.style.border = "1px solid red";
        pass.parentNode.querySelector('.err_img').style.display = "block";
        pass.parentNode.querySelector('.err_msg').style.display = "block";
        pass.parentNode.querySelector('.err_msg').innerHTML = "Password can not be empty";
        result = false;
    } else {
        pass.style.borderColor = "var(--form-input-border)";
        pass.parentNode.querySelector('.err_img').style.display = "none";
        pass.parentNode.querySelector('.err_msg').style.display = "none";
    }


    return result;
}