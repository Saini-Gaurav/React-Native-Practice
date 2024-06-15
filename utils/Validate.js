export const checkValidData = ({ name, email, password }) => {
    if (name !== undefined) {
      const isNameValid = /^[0-9A-Za-z]{6,16}$/.test(name);
      if (!isNameValid) return "Name is not valid";
    }
    if (email !== undefined) {
      const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
      if (!isEmailValid) return "Email ID is not valid";
    }
    if (password !== undefined) {
      const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
      if (!isPasswordValid) return "Password is not valid";
    }
  
    return null;
  };