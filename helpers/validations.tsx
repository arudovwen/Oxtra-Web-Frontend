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

export const resetPassValue = {
  password: "",
  password_confirmation: "",
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
      "Must Be More Than 8 Digits And Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character",
    ),
});

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password required")
    .matches(
      passwordRegex,
      "Must Be More Than 8 Digits And Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character",
    ),
});

export const validatePassSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be more than 8 characters")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter",
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter",
    )
    .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
    .test(
      "contains-special-character",
      "Password must contain a special character",
      (value) => {
        return /[!@#\$%\^&]/.test(value);
      },
    ),
  password_confirmation: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});
