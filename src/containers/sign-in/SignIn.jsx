import { Box, Button, InputBase, styled, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <StyledSignOut>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ width: "100%", textAlign: "center", padding: ".5rem" }}>
          <Typography variant="h5">Войти</Typography>
        </Box>
        <InputBase
          placeholder="Email"
          name="email"
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="inputBase"
        />
        <InputBase
          placeholder="Password"
          name="password"
          type="password"
          className="inputBase"
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Button type="submit" className="button">
          Submit
        </Button>
      </form>
    </StyledSignOut>
  );
};

export default SignIn;

const StyledSignOut = styled(Box)(() => ({
  height: "100vh",
  padding: "120px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .inputBase": {
    width: "35vw",
    backgroundColor: "#444",
    color: "#fff",
    borderRadius: "4px",
    padding: "8px 12px",
  },

  "& .inputBase::placeholder": {
    color: "#ccc",
  },

  "& .inputBase:focus": {
    outline: "none",
    backgroundColor: "#555",
  },
  "& .button": {
    width: "35vw",
  },
  "& form": {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "3rem 1rem",
    borderRadius: "5px",
    backgroundColor: "#222",
    boxShadow:
      "rgba(241, 242, 243, 0.3) 0px 1px 2px 0px, rgba(225, 228, 230, 0.15) 0px 1px 3px 1px",
  },
}));
