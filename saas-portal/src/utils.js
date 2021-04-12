export const validateEmail = (passkey) => {  
    let apos = passkey.indexOf("@");
    let dotpos = passkey.lastIndexOf(".");
    if (apos < 1 || dotpos - apos < 2) {
        return "invalid email."
    }
    return null
}

export const validatePassword = (password, passwordConfirm) => {
    var illegalChars = /[\W_]/; // allow only letters and numbers
 
    if (password === "") {
        return "Can't have an empty password."
    } else if (password.length < 7) {
        return "Password must be between 7 and 15 characters long."
    } else if (illegalChars.test(password)) {
        return "The password contains illegal characters."
    } else if ((password.search(/[a-zA-Z]+/) === -1) || (password.search(/[0-9]+/) === -1)) {
        return "The password must contain at least one numeral.";
    } else if (password !== passwordConfirm) {
        return "The passwords do not match."
    }

    return null
}