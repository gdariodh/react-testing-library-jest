import { TextField, Typography } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

const formValidation = (errors, errorKey) => {
  return errors[errorKey] ? (
    <Typography color="red">{errors[errorKey].message}</Typography>
  ) : (
    ""
  );
};

export const CustomInput = ({
  name = "",
  label = "",
  type = "text",
  disabled = false,
  required = false,
}) => {
  const { register, errors } = useFormContext();

  return (
    <div>
      <TextField
        required={required}
        disabled={disabled}
        type={type}
        label={label}
        error={errors && !!errors[name]}
        id={name}
        {...register(name)}
        variant="outlined"
        fullWidth
      ></TextField>

      {errors && formValidation(errors, name)}
    </div>
  );
};
