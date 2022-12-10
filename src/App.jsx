import { Box, Typography } from "@mui/material";
import { LoginForm } from "./pages/Login/LoginForm";
import "./App.css";

function App() {
  return (
    <Box
      className="App"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h2" mb="20px" textAlign="center">
        Unit Testing
      </Typography>
      <LoginForm />
    </Box>
  );
}

export default App;
