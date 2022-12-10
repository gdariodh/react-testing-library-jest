import * as yup from "yup";

export const LoginFormSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .max(12, "Username cannot be longer than 12 characters"),
  password: yup
    .string()
    .required("Password is required")
    .max(12, "Password cannot be longer than 12 characters")
    // regex una mayuscula, minuscula, un numero y un caracter especial debe tener el password
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must have at least a capital letter, lowercase, a number and an special character"
    )
    .required(),
});
