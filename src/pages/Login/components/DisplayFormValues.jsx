import React from "react";
import { Box, Typography } from "@mui/material";

export const DisplayFormValues = ({ isDirty, isValid, values }) => {
  return (
    <Box color="grey.600" mt="10px">
      {isDirty && isValid && (
        <>
          <Typography>Username: {values.username}</Typography>
          <Typography>Password: {values.password}</Typography>
        </>
      )}
    </Box>
  );
};

export default DisplayFormValues;
