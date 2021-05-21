import * as yup from "yup";

const contactSchema = yup.object().shape({
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
  phone_number: yup
    .string(),
  message: yup
    .string()
})

export default contactSchema;