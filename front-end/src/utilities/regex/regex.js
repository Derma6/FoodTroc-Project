export function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email.value);
  }
export function validatePassword(password) {
    if (password.value.length >= 6) {
        return true
    } else {
        return false
    }
  }
export function confirmPassword(passwordOne, passwordTwo) {
  if (passwordOne.value === passwordTwo.value) {
    return true
} else {
    return false
}
}