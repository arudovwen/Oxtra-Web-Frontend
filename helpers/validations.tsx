import * as Yup from "yup";

export const initSignupValues = {
  fullName: "",
  email: "",
  password: "",
  code: "",
  phone: "",
};

export const initLoginValues = {
  email: "",
  password: "",
};

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const validationSignupSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  fullName: Yup.string().required("Full Name is required"),
  code: Yup.object().required("Country Code is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .min(10, "Phone number must not be lower than 10 digits")
    .max(11, "Phone number cannot exceed 11 digits"),
  password: Yup.string()
    .required("Password required")
    .matches(
      passwordRegex,
      "Must Be More Than 8 Digits And Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password required")
    .matches(
      passwordRegex,
      "Must Be More Than 8 Digits And Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
