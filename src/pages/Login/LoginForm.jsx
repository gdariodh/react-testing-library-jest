import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "./schemas/login-form-schema";
import { Typography, Box } from "@mui/material";
import { CustomInput } from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { DisplayFormValues } from "./components/DisplayFormValues";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const userNameWatch = watch("username");
  const passwordWatch = watch("password");

  const onSubmit = async (data) => {};

  return (
    <>
      {userNameWatch}
      {passwordWatch}
      <FormProvider {...{ register, errors }}>
        <form onSubmit={handleSubmit}>
          <CustomInput name="username" label="Nombre de usuario" required />
          <CustomInput
            name="password"
            label="Password"
            required
            type="password"
          />
          <CustomButton isDirty={isDirty} isValid={isValid}>
            Iniciar sesion
          </CustomButton>
        </form>
      </FormProvider>
      <DisplayFormValues
        isDirty={isDirty}
        isValid={isValid}
        values={{ username: userNameWatch, password: passwordWatch }}
      />
    </>
  );
};
