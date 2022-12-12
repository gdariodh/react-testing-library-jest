import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "./schemas/login-form-schema";
import { CustomInput } from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import DisplayFormValues from "./components/DisplayFormValues";
import { callEndPoint } from "../../services/call-endpoint";
import { Box } from "@mui/material";

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

  const onSubmit = async (data) => {
    const result = await callEndPoint(data);
    console.log({ result });
    reset();
  };

  return (
    <Box
      style={{
        backgroundColor: "#999999",
        borderRadius: "30px",
        padding: "50px",
        width: "300px",
      }}
    >
      <FormProvider {...{ register, errors }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <CustomInput name="username" label="Nombre de usuario" required />
            <CustomInput
              name="password"
              label="Password"
              required
              type="text"
            />
            <CustomButton isDirty={isDirty} isValid={isValid} type="submit">
              Iniciar sesion
            </CustomButton>
          </Box>
        </form>
      </FormProvider>
      <DisplayFormValues
        isDirty={isDirty}
        isValid={isValid}
        values={{ username: userNameWatch, password: passwordWatch }}
      />
    </Box>
  );
};
