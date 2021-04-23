import * as yup from "yup";

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "username must be at least 5 characters long")
    .required("Please provide a username"),
  password: yup
    .string()
    .min(8, "please choose a password between 8-15 characters long")
    .max(15, "please choose a password between 8-15 characters long")
    .required("please choose a password"),
  email: yup
    .string()
    .min(6, "please choose a password between 6-64 characters long")
    .max(64, "email cannot be longer than 64 characters")
    .required("please enter your email"),
  first_name: yup
    .string()
    .min(2, "please enter first name at least 2 characters long")
    .max(64, "first name cannot be longer than 64 characters")
    .required("please enter your first name"),
   last_name: yup
    .string()
    .min(2, "please enter last name at least 2 characters long")
    .max(64, "last name cannot be longer than 64 characters")
    .required("please enter your last name"),
});

export default registerSchema;