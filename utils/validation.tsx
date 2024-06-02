import * as Yup from "yup";

export const signUpValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phoneCode: "",
  phoneNumber: "",
  dob: "",
};

export const validateSignupSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phoneCode: Yup.object().required("Phone Code is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  dob: Yup.string().required("Date of birth is required"),
});
