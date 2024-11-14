import * as Yup from "yup";

const VerifyNumberValidationSchema = Yup.object().shape({
  email: Yup.string()
  .required("Please enter email address")
  .matches(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "Please enter a valid email"
  ),
  password:Yup.string().required("Please enter password"),
});


export {
  VerifyNumberValidationSchema,
};
