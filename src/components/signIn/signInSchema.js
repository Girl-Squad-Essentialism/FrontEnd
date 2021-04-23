import * as yup from "yup";

const signInSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, "username must be at least 5 characters long")
        .required("Please provide a username"),
    password: yup
        .string()
        .min(8, "please choose a password between 8-15 characters long")
        .max(15, "please choose a password between 8-15 characters long")
        .required("please choose a password")
});

export default signInSchema;