export const validateData = (email, password, name) => {

    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[A-Za-z\s]+$/.test(name);

    if (!isEmailValid) return "Enter valid email"
    if (!isPasswordValid) return "Enter valid password"
    if (!isNameValid) return "Enter valid name"

    return null
}